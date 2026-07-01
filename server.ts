import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Increase payload limit for base64 image uploads
  app.use(express.json({ limit: "50mb" }));

  // Initialize Gemini client
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  app.post("/api/preview-design", async (req, res) => {
    try {
      const { imageBase64, requestDescription, model } = req.body;
      
      if (!imageBase64) {
        return res.status(400).json({ error: "No image provided" });
      }
      
      // Extract mime type and base64 data
      const matches = imageBase64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        return res.status(400).json({ error: "Invalid base64 image format" });
      }
      
      const mimeType = matches[1];
      const base64Data = matches[2];

      const isImagen = model && model.startsWith('imagen-3.0');

      let generatedImageUrl = null;

      if (isImagen) {
        const imagenPrompt = `A high quality photo of a modern storefront with the following signage/branding element: ${requestDescription || 'a modern, glowing channel letter sign that says "STORE" or an appropriate aesthetic sign on the main facade'}. Professional, well-lit, and correctly scaled.`;
        
        const response = await ai.models.generateImages({
          model: model,
          prompt: imagenPrompt,
          config: {
            numberOfImages: 1,
            aspectRatio: "1:1"
          }
        });
        
        if (response.generatedImages && response.generatedImages.length > 0) {
          const generatedBase64 = response.generatedImages[0].image.imageBytes;
          generatedImageUrl = `data:image/png;base64,${generatedBase64}`;
        }
      } else {
        const prompt = `You are an expert graphic designer and sign maker for 'Mex Serigrafía'. 
The user has uploaded a photo of their storefront or space.
They want to visualize this product: ${requestDescription || 'A new signage or branding element'}.
Please realistically integrate the requested signage, lettering, or visual advertising element into the provided image.
Make it look professional, well-lit, and correctly scaled to fit the space. If no specific product is mentioned, add a modern, glowing channel letter sign that says "STORE" or an appropriate aesthetic sign on the main facade.`;

        const response = await ai.models.generateContent({
          model: model || 'gemini-3.1-flash-lite-image',
          contents: {
            parts: [
              {
                inlineData: {
                  data: base64Data,
                  mimeType: mimeType,
                },
              },
              {
                text: prompt,
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "1:1"
            },
          },
        });

        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const generatedBase64 = part.inlineData.data;
            generatedImageUrl = `data:image/png;base64,${generatedBase64}`;
            break;
          }
        }
      }

      if (generatedImageUrl) {
        res.json({ success: true, imageUrl: generatedImageUrl });
      } else {
        res.status(500).json({ error: "Failed to generate image. No image data returned." });
      }
    } catch (error: any) {
      console.error("Error generating preview:", error);
      res.status(500).json({ error: error.message || "Failed to generate preview" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Upload, Sparkles, Image as ImageIcon, Loader2 } from "lucide-react";

export function AIPreview() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [selectedModel, setSelectedModel] = useState("gemini-3.1-flash-lite-image");
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultImageUrl, setResultImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResultImageUrl(null);
      setError(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResultImageUrl(null);
      setError(null);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const generatePreview = async () => {
    if (!selectedFile) return;

    setIsGenerating(true);
    setError(null);

    try {
      const base64Image = await fileToBase64(selectedFile);
      
      const response = await fetch("/api/preview-design", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageBase64: base64Image,
          requestDescription: description,
          model: selectedModel
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResultImageUrl(data.imageUrl);
      } else {
        // En caso de cualquier error, mostramos el mensaje solicitado
        setError("El modelo no esta disponible, por favor prueba con otro");
      }
    } catch (err: any) {
      setError("El modelo no esta disponible, por favor prueba con otro");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="visualizador" className="py-24 bg-[#1A1A1A] border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter text-[#FBFBFB]">AI Visualizer</h3>
              <div className="px-2 py-1 border border-[#FF5F1F] text-[#FF5F1F] text-[9px] font-mono tracking-widest">BETA v1.0</div>
            </div>
            <p className="text-gray-400 text-sm font-medium max-w-lg">
              Sube una foto de tu local o espacio y nuestra Inteligencia Artificial generará una vista previa realista de cómo quedaría nuestro trabajo instalado.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-px bg-[#2A2A2A] border border-[#2A2A2A]">
          {/* Input Section */}
          <div className="lg:col-span-5 bg-[#121212] p-8 flex flex-col gap-6">
            <div 
              className={`flex-1 min-h-[250px] border-2 border-dashed transition-colors flex flex-col items-center justify-center cursor-pointer group ${previewUrl ? 'border-[#333] bg-[#0F0F0F]' : 'border-[#333] hover:border-[#FF5F1F] bg-[#141414]'}`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {previewUrl ? (
                <div className="relative w-full h-full p-2 group">
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                  <div className="absolute inset-0 bg-[#0F0F0F]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                      className="bg-white text-black px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-colors hover:bg-[#FF5F1F]"
                    >
                      Cambiar Foto
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center text-center" onClick={() => fileInputRef.current?.click()}>
                  <div className="w-12 h-12 bg-[#FF5F1F] rounded-full flex items-center justify-center mb-4 text-black">
                    <Upload className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-black uppercase tracking-tight text-[#FBFBFB]">Sube la foto de tu comercio</p>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Visualiza tu cartel en segundos</p>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileSelect} 
                accept="image/*" 
                className="hidden" 
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">¿Qué te gustaría instalar?</label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ej: Un cartel luminoso de letras corpóreas color naranja sobre la puerta principal..."
                className="w-full bg-[#222] border border-[#333] text-sm font-medium text-[#FBFBFB] p-4 focus:ring-1 focus:ring-[#FF5F1F] focus:border-[#FF5F1F] outline-none transition-all resize-none h-28"
              ></textarea>
            </div>

            <button 
              onClick={generatePreview}
              disabled={!selectedFile || isGenerating}
              className="w-full bg-[#FF5F1F] hover:bg-white disabled:bg-[#222] disabled:text-gray-500 text-black font-black py-4 uppercase tracking-widest text-[10px] transition-colors flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Procesando IA...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generar Vista Previa
                </>
              )}
            </button>
            
            <div className="space-y-3 pt-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Modelo IA Gratuito</label>
              <select 
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-[#222] border border-[#333] text-[10px] font-bold text-[#FBFBFB] rounded-none p-3 focus:ring-1 focus:ring-[#FF5F1F] focus:border-[#FF5F1F] outline-none transition-all appearance-none uppercase"
              >
                <option value="gemini-3.1-flash-lite-image">Nano Banana 2 Lite (gemini-3.1-flash-lite-image)</option>
                <option value="gemini-3.1-flash-image">Nano Banana Pro / Gemini 3 Pro Image</option>
                <option value="imagen-3.0-generate-001">Imagen 3.0 Generate</option>
              </select>
            </div>
            
            {error && (
              <p className="text-[#FF5F1F] text-[10px] uppercase font-bold text-center p-3 border border-[#FF5F1F]/50 bg-[#FF5F1F]/10">
                {error}
              </p>
            )}
          </div>

          {/* Result Section */}
          <div className="lg:col-span-7 bg-[#0F0F0F] relative min-h-[400px]">
            {resultImageUrl ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full absolute inset-0"
              >
                <img src={resultImageUrl} alt="Generated Preview" className="w-full h-full object-cover" />
                <div className="absolute top-6 right-6 bg-[#FF5F1F] px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-black flex items-center gap-1 shadow-2xl">
                  <Sparkles className="w-3 h-3" /> IA GENERADA
                </div>
              </motion.div>
            ) : (
              <div className="w-full h-full absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                {isGenerating ? (
                   <div className="space-y-6 flex flex-col items-center">
                     <div className="relative w-16 h-16">
                       <div className="absolute inset-0 border-2 border-[#333] rounded-full"></div>
                       <div className="absolute inset-0 border-2 border-[#FF5F1F] rounded-full border-t-transparent animate-spin"></div>
                       <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-[#FF5F1F] animate-pulse" />
                     </div>
                     <div className="space-y-1">
                       <p className="text-[10px] font-black text-[#FF5F1F] uppercase tracking-widest">Generando Diseño</p>
                       <p className="text-xs text-gray-500 font-medium">Renderizando cartelería en tu fachada...</p>
                     </div>
                   </div>
                ) : (
                  <>
                    <div className="w-48 h-48 border border-[#2A2A2A] flex items-center justify-center mb-6 opacity-30">
                       <ImageIcon className="w-12 h-12 text-[#FF5F1F]" />
                    </div>
                    <h3 className="text-sm font-black text-[#FBFBFB] uppercase tracking-widest mb-2">Lienzo Vacío</h3>
                    <p className="text-xs text-gray-500 font-medium max-w-sm">
                      Sube una imagen y describe tu proyecto para ver la previsualización aquí.
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

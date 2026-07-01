import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { AIPreview } from "./components/AIPreview";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#FBFBFB] font-sans selection:bg-[#FF5F1F]/30 flex flex-col relative">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Services />
        <Projects />
        <AIPreview />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

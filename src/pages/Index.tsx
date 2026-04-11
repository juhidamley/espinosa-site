import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WordCloudSection from "@/components/WordCloudSection";
import BioSection from "@/components/BioSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WordCloudSection />
        <BioSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

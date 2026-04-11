// src/pages/Gallery.tsx
import Header from "@/components/Header";
import DomeGallery from "@/components/DomeGallery";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-24 px-4">
        <h1 className="font-heading text-4xl md:text-5xl text-foreground font-normal mb-12">
          Gallery
        </h1>
        <DomeGallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;

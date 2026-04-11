// src/components/WordCloudSection.tsx
import wordcloud from "@/assets/wordcloud.png";

const WordCloudSection = () => {
  const handleExploreClick = () => {
    const next = document.getElementById("bio");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="wordcloud"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-primary"
    >
      <img
        src={wordcloud}
        alt="Research topics word cloud"
        className="w-[72%] max-w-4xl object-contain"
      />

      <button
        onClick={handleExploreClick}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 font-heading text-[#f8f5ef] text-xl hover:opacity-70 transition-opacity cursor-pointer"
      >
        Explore ↴
      </button>
    </section>
  );
};

export default WordCloudSection;

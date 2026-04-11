// src/components/DomeGallery.tsx
import { useEffect, useRef, useState, useCallback } from "react";

const CUSTOM_SUBTITLES: Record<string, string> = {
  pic1: "RLST 184 - Spring 2016 with Jeremy, Michaiah, Dr E., Kevin, Lora, and Leah",
  pic2: "Alex, Dr. E, Blake, and Jake",
  pic3: "Conference Photo",
  pic4: "Gaston on a field trip to a Mosque",
  pic5: "Conference in Kyiv, Ukraine, Feb. 15-23, 2020",
  pic6: "Gaston, Director, and Bishop in Conference in Kyiv, Ukraine, Feb. 15-23, 2020",
  pic7: "Conference Photo",
  pic8: "Dr. Espinosa asking questions",
  pic9: "Dr. Gillespie speaking",
  pic10: "Student Q&A",
  pic11: "Conference Team",
  pic12: "Gaston lecturing at Princeton University",
  pic13: "Prof. Espinosa at Princeton",
  pic14: "Gaston lecturing at Princeton University",
  pic15: "Gaston in Ukraine",
  pic16: "Gaston lecturing at Princeton University",
  pic17: "Hip-Hop Lab, May 2024",
  pic18: "Prof. Espinosa with students",
  pic20: "",
  pic21: "Prof. Espinosa with freshman advisees and research assistants",
  pic22: "Prof. Espinosa with freshman advisees and research assistants",
  pic23: "Dinner after the Religion, Race, and Gender in the 2024 Election Conference",
  pic24: "Prof. Espinosa with graduating student",
  pic25: "",
  pic26: "Prof. Espinosa",
  pic27: "Prof. Espinosa",
  pic28: "Claremont Colleges thank Father Joe",
  pic29: "Prof. Espinosa with family",
  "Ukraine Fair photo": "Ukraine Fair",
  "Ukraine Fair team 2": "Ukraine Fair team",
  "Ukraine Fair team": "Ukraine Fair team",
  "War in Ukraine Image 2": "War in Ukraine Student Panel",
  "War in Ukraine Student Panel E": "War in Ukraine Student Panel",
  "War in Ukraine Team Photo copy": "War in Ukraine Team",
};

const imageModules = import.meta.glob(
  "../assets/homepage/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  { eager: true }
);

type GalleryImage = { src: string; alt: string; subtitle: string };

const images: GalleryImage[] = Object.keys(imageModules).map((path) => {
  const mod = imageModules[path] as { default: string };
  const fileName = path.split("/").pop()?.split(".")[0] || "Gallery Image";
  const subtitle =
    CUSTOM_SUBTITLES[fileName] ??
    fileName.replace(/[-_]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return { src: mod.default, alt: subtitle, subtitle };
});

const SPEED = 0.35; // px per frame — calm drift

// Triple for seamless loop: we scroll through the middle set, reset when done
const looped = [...images, ...images, ...images];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>();
  const pausedRef = useRef(false);
  const lightboxRef = useRef<number | null>(null);
  const oneSetWidthRef = useRef(0);

  // Keep refs in sync with state
  useEffect(() => { lightboxRef.current = lightbox; }, [lightbox]);

  const tick = useCallback(() => {
    if (!pausedRef.current && lightboxRef.current === null) {
      const track = trackRef.current;
      if (track) {
        // Compute one-set width lazily
        if (oneSetWidthRef.current === 0) {
          oneSetWidthRef.current = track.scrollWidth / 3;
        }
        offsetRef.current += SPEED;
        // When we've scrolled one full set, snap back silently
        if (offsetRef.current >= oneSetWidthRef.current) {
          offsetRef.current -= oneSetWidthRef.current;
        }
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [tick]);

  const skip = (direction: 1 | -1) => {
    // Shift by ~280px (approx one image slot)
    const step = 280 * direction;
    const track = trackRef.current;
    if (!track) return;
    const oneSet = oneSetWidthRef.current || track.scrollWidth / 3;
    let next = offsetRef.current + step;
    // Keep within bounds
    next = ((next % oneSet) + oneSet) % oneSet;
    offsetRef.current = next;
    track.style.transform = `translateX(-${next}px)`;
  };

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox !== null) {
        if (e.key === "ArrowLeft") setLightbox((i) => ((i! - 1 + images.length) % images.length));
        if (e.key === "ArrowRight") setLightbox((i) => ((i! + 1) % images.length));
        if (e.key === "Escape") setLightbox(null);
      } else {
        if (e.key === "ArrowLeft") skip(-1);
        if (e.key === "ArrowRight") skip(1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="flex flex-col items-center w-full">
        {/* Track container */}
        <div className="relative w-full flex items-center gap-2">
          {/* Left arrow */}
          <button
            onClick={() => skip(-1)}
            aria-label="Previous"
            className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground text-xl transition-colors z-10"
          >
            ‹
          </button>

          {/* Scrolling strip */}
          <div
            className="flex-1 h-64 md:h-80 overflow-hidden"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; setHoveredIdx(null); }}
          >
            <div
              ref={trackRef}
              className="flex h-full items-center gap-4 will-change-transform"
              style={{ width: "max-content" }}
            >
              {looped.map((img, i) => {
                const origIdx = i % images.length;
                return (
                  <div
                    key={i}
                    className="h-full flex-shrink-0 flex items-center cursor-pointer"
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => setLightbox(origIdx)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={`h-full w-auto transition-opacity duration-300 ${hoveredIdx === i ? "opacity-80" : "opacity-100"}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => skip(1)}
            aria-label="Next"
            className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground text-xl transition-colors z-10"
          >
            ›
          </button>
        </div>

        {/* Caption — shows on hover */}
        <p className="mt-4 font-body text-sm text-center text-foreground/60 max-w-md min-h-[1.25rem] px-4 transition-opacity duration-300">
          {hoveredIdx !== null ? images[hoveredIdx % images.length].subtitle : ""}
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => ((i! - 1 + images.length) % images.length)); }}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white text-2xl transition-colors"
          >
            ‹
          </button>

          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[80vh] max-w-[85vw] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {images[lightbox].subtitle && (
            <p className="mt-4 font-body text-sm text-white/70 text-center max-w-lg px-6">
              {images[lightbox].subtitle}
            </p>
          )}

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => ((i! + 1) % images.length)); }}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white text-2xl transition-colors"
          >
            ›
          </button>

          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl transition-colors"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

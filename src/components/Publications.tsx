import { ExternalLink } from "lucide-react";

const publications = [
  {
    type: "Book",
    year: "2023",
    title: "Sacred Boundaries: Religion and the Making of Modern Nations",
    publisher: "Princeton University Press",
    description:
      "An examination of how religious identities have shaped nationalism and state formation across five continents.",
  },
  {
    type: "Book",
    year: "2019",
    title: "The Ethics of Encounter: Interfaith Dialogue in a Pluralistic Age",
    publisher: "Oxford University Press",
    description:
      "A philosophical and practical guide to meaningful dialogue across religious traditions.",
  },
  {
    type: "Article",
    year: "2024",
    title: "Digital Pilgrimage: Virtual Sacred Spaces and Authentic Religious Experience",
    publisher: "Journal of Religion & Society, Vol. 28",
    description:
      "Analyzing how virtual reality technologies are creating new forms of religious practice and community.",
  },
  {
    type: "Chapter",
    year: "2022",
    title: "Liberation Theology in the Twenty-First Century",
    publisher: "In: The Oxford Handbook of Contemporary Theology",
    description:
      "Tracing the evolution of liberation theology from Latin America to global movements for social justice.",
  },
  {
    type: "Article",
    year: "2021",
    title: "Climate, Creation, and Covenant: Religious Responses to Environmental Crisis",
    publisher: "Theological Studies, Vol. 82(3)",
    description:
      "A comparative analysis of environmental ethics across Abrahamic and Dharmic traditions.",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-24 bg-background">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-display mb-4">
              Selected Publications
            </h2>
            <p className="text-body font-body max-w-xl">
              A selection of books, articles, and chapters spanning two decades of scholarship.
            </p>
          </div>
          <a
            href="https://www.cmc.edu/sites/default/files/2026-01/Espinosa%20CV%20-%20Academic%20-%201.12.25.pdf"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-body text-sm hover:underline "
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full CV
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <article
              key={index}
              className="group card-scholarly p-6 md:p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-1 md:w-24 shrink-0">
                  <span className="text-caption font-body text-sm">{pub.year}</span>
                  <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-body font-medium rounded-sm">
                    {pub.type}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-display mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-caption font-body text-sm mb-3">{pub.publisher}</p>
                  <p className="text-body font-body text-sm leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

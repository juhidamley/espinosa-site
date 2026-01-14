const researchAreas = [
  {
    title: "Comparative Religious Ethics",
    description:
      "Examining how different religious traditions approach moral questions and ethical dilemmas, with particular focus on environmental ethics and social justice.",
    tags: ["Ethics", "Comparative Study", "Social Justice"],
  },
  {
    title: "Religion & Political Movements",
    description:
      "Analyzing the role of religious institutions and beliefs in shaping political ideologies, from liberation theology to religious nationalism.",
    tags: ["Politics", "Liberation Theology", "Nationalism"],
  },
  {
    title: "Interfaith Dialogue",
    description:
      "Developing frameworks for productive conversation across religious boundaries, addressing both theological and practical dimensions of dialogue.",
    tags: ["Dialogue", "Pluralism", "Peacebuilding"],
  },
  {
    title: "Religion in the Digital Age",
    description:
      "Investigating how digital technologies are transforming religious practice, community formation, and the transmission of sacred traditions.",
    tags: ["Technology", "Digital Religion", "Community"],
  },
];

const Research = () => {
  return (
    <section id="research" className="py-24 surface-warm">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-display mb-4">
            Research Interests
          </h2>
          <p className="text-body font-body max-w-2xl mx-auto">
            My work spans multiple disciplines, drawing insights from theology, 
            philosophy, sociology, and political science to understand religion's 
            enduring influence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className="card-scholarly p-8 hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-heading text-2xl font-semibold text-display mb-4">
                {area.title}
              </h3>
              <p className="text-body font-body leading-relaxed mb-6">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-body font-medium rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;

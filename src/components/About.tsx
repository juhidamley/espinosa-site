import { BookOpen, Users, Award, Globe } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "85+", label: "Publications" },
  { icon: Users, value: "2,500+", label: "Students Taught" },
  { icon: Award, value: "12", label: "Awards" },
  { icon: Globe, value: "40+", label: "Countries Visited" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="section-container">
        <div className="divider-ornate">
          <span className="text-primary text-2xl">✦</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-display mb-8">
              About
            </h2>
            <div className="space-y-6 text-body font-body leading-relaxed">
              <p>
                Dr. Marcus Whitfield is a distinguished Professor of Religious Studies at 
                Hartwell University, where he has taught for over two decades. His scholarship 
                bridges the ancient and contemporary, examining how religious traditions 
                continue to shape moral reasoning, political discourse, and cultural identity 
                in the modern world.
              </p>
              <p>
                After completing his doctorate at Oxford University, Dr. Whitfield conducted 
                extensive fieldwork across the Middle East, South Asia, and Latin America. 
                His comparative approach to religious studies has earned him recognition as 
                one of the leading voices in interfaith dialogue and religious literacy.
              </p>
              <p>
                Beyond academia, Dr. Whitfield serves as a consultant for organizations 
                seeking to understand the role of religion in international affairs. He is 
                a frequent contributor to public discourse on religion and society.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="card-scholarly p-8">
              <h3 className="font-heading text-xl font-semibold text-display mb-6">
                At a Glance
              </h3>
              <div className="space-y-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-2xl font-semibold text-display">
                        {stat.value}
                      </p>
                      <p className="text-caption text-sm">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

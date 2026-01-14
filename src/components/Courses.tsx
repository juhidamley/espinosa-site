import { Clock, Users, Calendar } from "lucide-react";

const courses = [
  {
    code: "REL 201",
    title: "Introduction to World Religions",
    semester: "Fall 2024",
    schedule: "Mon/Wed 10:00-11:30 AM",
    enrollment: "Open",
    description:
      "A comprehensive survey of major world religious traditions, examining their histories, beliefs, practices, and contemporary expressions.",
  },
  {
    code: "REL 405",
    title: "Religion, Ethics & Society",
    semester: "Fall 2024",
    schedule: "Tue/Thu 2:00-3:30 PM",
    enrollment: "Open",
    description:
      "An advanced seminar exploring how religious ethics intersect with contemporary moral debates on social justice, bioethics, and environmental responsibility.",
  },
  {
    code: "REL 510",
    title: "Graduate Seminar: Theories of Religion",
    semester: "Spring 2025",
    schedule: "Thu 4:00-7:00 PM",
    enrollment: "By Permission",
    description:
      "A critical examination of major theoretical approaches to the study of religion, from phenomenology to cognitive science.",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-24 surface-warm">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-display mb-4">
            Current Courses
          </h2>
          <p className="text-body font-body max-w-2xl mx-auto">
            I welcome students at all levels who share a curiosity about the role of 
            religion in human life and society.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.code}
              className="card-scholarly p-8 flex flex-col h-full"
            >
              <div className="mb-4">
                <span className="text-primary font-body text-sm font-semibold">
                  {course.code}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-display mb-3">
                {course.title}
              </h3>
              <p className="text-body font-body text-sm leading-relaxed mb-6 flex-1">
                {course.description}
              </p>
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center gap-3 text-caption text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{course.semester}</span>
                </div>
                <div className="flex items-center gap-3 text-caption text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center gap-3 text-caption text-sm">
                  <Users className="w-4 h-4" />
                  <span>Enrollment: {course.enrollment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

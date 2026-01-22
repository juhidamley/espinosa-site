import Header from "@/components/Header";
import CoursesComponent from "@/components/Courses";
import Footer from "@/components/Footer";

const CoursesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CoursesComponent />
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;

import Header from "@/components/Header";
import AboutComponent from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutComponent />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

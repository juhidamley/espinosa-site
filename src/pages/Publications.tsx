import Header from "@/components/Header";
import PublicationsComponent from "@/components/Publications";
import Footer from "@/components/Footer";

const PublicationsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PublicationsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default PublicationsPage;

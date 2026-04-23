import Header from "@/components/Header";
import AppearancesComponent from "@/components/Appearances";
import Footer from "@/components/Footer";

const AppearancesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AppearancesComponent />
      </main>
      <Footer />
    </div>
  );
};

export default AppearancesPage;

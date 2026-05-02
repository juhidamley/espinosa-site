import Header from "@/components/Header";
import LeadershipComponent from "@/components/Leadership";
import Footer from "@/components/Footer";

const LeadershipPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LeadershipComponent />
      </main>
      <Footer />
    </div>
  );
};

export default LeadershipPage;

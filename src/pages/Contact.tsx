import Header from "@/components/Header";
import ContactComponent from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactComponent />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

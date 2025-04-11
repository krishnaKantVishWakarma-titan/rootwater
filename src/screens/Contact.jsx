import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactHeader from "../Components/ContactHeader";
import ContactFormComp from "../Components/ContactFormComp";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-cream">
        <Header />
        <ContactHeader />
        <ContactFormComp />
        <Footer />
      </div>
    </>
  );
}

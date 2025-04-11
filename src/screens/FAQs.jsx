import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FAQHeader from "../Components/FAQHeader";
import FAQ from "../Components/FAQ";

export default function FAQs() {
  return (
    <>
      <div className="min-h-screen bg-cream">
        <Header />
        <FAQHeader />
        <FAQ />

        <Footer />
      </div>
    </>
  );
}

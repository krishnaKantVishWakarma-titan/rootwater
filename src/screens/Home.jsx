import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Solutions from "../Components/Solutions";
import TrustedBy from "../Components/TrustedBy";
import HireManage from "../Components/HireManage";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-cream">
        <Header />
        <Hero />
        <TrustedBy />
        <Solutions />
        <HireManage />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

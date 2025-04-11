import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductsHeader from "../Components/AboutHeader";
import Solutions from "../Components/Solutions";

export default function Products() {
  return (
    <>
      <div className="min-h-screen bg-cream">
        <Header />
        <ProductsHeader />
        <Solutions />
        <Footer />
      </div>
    </>
  );
}

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AboutHeader from "../Components/AboutHeader";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-cream">
        <Header />
        <AboutHeader />

        {/* Main content like "Our Mission", "Our Vision" */}
        <div className="max-w-[70rem] lg:px-0 px-6 mx-auto mb-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
          <div>
            <div class="space-y-2 md:space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-2 text-left">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-text-dark text-left">
                Our suite of tools, built to fill your sales pipeline.
              </p>
            </div>
          </div>
          <div>
            <div class="space-y-2 md:space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-2 text-left">
                Our Vision
              </h2>
              <p className="text-lg md:text-xl text-text-dark text-left">
                Our suite of tools, built to fill your sales pipeline.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

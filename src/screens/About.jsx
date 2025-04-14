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
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 text-left">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-text-dark text-left">
                At Root Water, our mission is to empower businesses with
                high-quality, customizable water bottles that not only hydrate
                but also promote their brand in a meaningful and impactful way.
                We are dedicated to delivering exceptional products with a focus
                on quality, sustainability, and customer satisfaction. Through
                innovative design and a commitment to reliability, we strive to
                provide our clients with the tools they need to make a lasting
                impression and stand out in every interaction.
              </p>
            </div>
          </div>
          <div>
            <div class="space-y-2 md:space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 text-left">
                Our Vision
              </h2>
              <p className="text-lg md:text-xl text-text-dark text-left">
                Our vision is to become the leading provider of custom-branded
                water bottles, known for our premium quality, creative
                solutions, and unwavering dedication to excellence. We aim to be
                a trusted partner for businesses looking to elevate their brand
                presence and make a positive impact on their customers,
                employees, and the environment. By consistently offering
                products that combine functionality, sustainability, and style,
                we envision a future where every sip is a chance to showcase
                your brand with pride.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

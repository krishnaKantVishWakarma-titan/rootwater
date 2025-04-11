import heroImage from "../assets/heroImage.png";

const Hero = () => {
  return (
    <div className="bg-cream min-h-[80vh] flex flex-col items-center px-6 py-12 md:py-16">
      {/* Yellow dot indicator */}
      <div className="w-3 h-3 bg-yellow-400 rounded-full mb-8"></div>

      {/* Hero image */}
      <div className="w-full max-w-md mx-auto mb-8">
        <img src={heroImage} alt="Hero Image" className="w-full" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark text-center mb-5">
        Hire anyone, anywhere.
      </h1>

      {/* Subheading */}
      <p className="text-xl md:text-2xl text-text-dark text-center mb-10">
        Hire remote employees anywhere in the world 🌎
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
        <button className="bg-stone-900 text-white rounded-md py-2 w-full hover:bg-gray-900">
          Get started
        </button>
        <button
          variant="outline"
          className="bg-transparent text-stone-900 font-bold border-2 border-stone-500 rounded-md py-2 w-full hover:bg-gray-200"
        >
          Book a call
        </button>
      </div>
    </div>
  );
};

export default Hero;

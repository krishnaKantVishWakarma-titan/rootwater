const HireManage = () => {
  const steps = [
    {
      title: "Choose Your Bottle & Design",
      description:
        "Browse our collection of premium quality bottles. Pick the size, style, and upload your custom banner or artwork — perfect for events, corporate gifts, or personal use.",
      icon: (
        <div className="bg-white w-16 h-16 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1E90FF"
            viewBox="0 0 24 24"
            width="40"
            height="40"
          >
            <path d="M12 2a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V4a2 2 0 0 1 2-2zm0 2h-1v3h2V4h-1zm3 5H9v11h6V9z" />
          </svg>
        </div>
      ),
    },
    {
      title: "Personalization & Purification",
      description:
        "We print your design on the bottle using high-resolution, durable printing methods. Meanwhile, we fill each bottle with fresh, purified water that meets the highest safety standards.",
      icon: (
        <div className="bg-white w-16 h-16 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#28A745"
            viewBox="0 0 24 24"
            width="40"
            height="40"
          >
            <path d="M12 2C8.13 2 5 9 5 13c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4-3.13-11-7-11zm0 16a5 5 0 0 1-5-5c0-2.33 2.14-7.05 5-9.88C14.86 5.95 17 10.67 17 13a5 5 0 0 1-5 5z" />
          </svg>
        </div>
      ),
    },
    {
      title: "Quality Check & Packaging",
      description:
        "Every bottle undergoes a strict quality check — from print clarity to water purity. After approval, we securely package your order to ensure it arrives in perfect condition.",
      icon: (
        <div className="bg-white w-16 h-16 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFC107"
            viewBox="0 0 24 24"
            width="40"
            height="40"
          >
            <path d="M20.59 5.41 18.17 3 12 9.17 5.83 3 3.41 5.41 9.59 11.59 3.41 17.59 5.83 20 12 13.83 18.17 20 20.59 17.59 14.41 11.59z" />
          </svg>
        </div>
      ),
    },
    {
      title: "Fast & Safe Delivery",
      description:
        "Your custom water bottles are shipped to your doorstep (or event location) through trusted logistics partners. Timely, safe, and ready to refresh!",
      icon: (
        <div className="bg-white w-16 h-16 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FF5722"
            viewBox="0 0 24 24"
            width="40"
            height="40"
          >
            <path d="M20 8h-3V4H3v13h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h1v-5l-4-4zM5 15V6h10v9H5zm13 3a1 1 0 1 1 .001-2.001A1 1 0 0 1 18 18zm-10 0a1 1 0 1 1 .001-2.001A1 1 0 0 1 8 18zm10-6v-3l3 3h-3z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-cream py-16 px-6">
      {/* Yellow dot indicator */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-3 h-3 bg-yellow-400 rounded-full mb-8"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-text-dark text-center mb-12">
          Our 4-Step Process
        </h2>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, ind) => (
            <div
              key={ind}
              className="bg-white rounded-lg p-8 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text-dark mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-text-dark">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HireManage;

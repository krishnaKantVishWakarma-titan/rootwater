const HireManage = () => {
  const steps = [
    {
      title: "Choose Your Bottle & Design",
      description:
        "Bring your brand to life with custom-labeled bottles that speak volumes. Choose from a variety of bottle styles and sizes, then add your logo, colors, and message. It’s branding made simple — and effective.",
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
        "Every bottle is personalized with your brand, but the quality goes deeper. We use advanced purification processes to ensure the water inside is as pure as the message on the outside.",
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
        "We care about every detail. Each batch undergoes strict quality control and is packaged securely to ensure your bottles arrive fresh, flawless, and ready to impress.",
      icon: (
        <div className="bg-white w-16 h-16 flex items-center justify-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8"
              y="14"
              width="32"
              height="20"
              rx="2"
              stroke="#4F46E5"
              stroke-width="4"
            />
            <path
              d="M16 24L21 29L32 18"
              stroke="#10B981"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Fast & Safe Delivery",
      description:
        "Time matters — and so does safety. That’s why we promise fast dispatch and careful handling, so your branded bottles reach you fresh, flawless, and right when you need them.",
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

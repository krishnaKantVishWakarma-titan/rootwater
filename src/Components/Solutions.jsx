import lt1 from "../assets/products/1lt.png";
import lt1p from "../assets/products/1lt-p.png";
import ml500 from "../assets/products/500ml.png";

const Solutions = () => {
  const products = [
    {
      name: "Classic Custom Bottle (500 ml)",
      features: [
        "500ml Capacity",
        "BPA-free Plastic",
        "High-Quality UV Print",
        "Purified RO + UV Water",
      ],
      image: <img src={ml500} alt="1" className="h-full" />,
      tags: ["Everyday Use", "Affordable", "Custom Banner"],
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      name: "Eco Glass Bottle (1 lt)",
      features: [
        "1 lt Capacity",
        "Tempered Glass with Silicone Sleeve",
        "Custom-Printed Neoprene Sleeve",
        "UV Purified Water Filling",
      ],
      image: <img src={lt1} alt="1" className="h-full" />,
      tags: ["Eco-Friendly", "Modern Look", "Reusable"],
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      name: "Premium Steel Bottle (1 lt)",
      features: [
        "1 lt Capacity",
        "304 Grade Stainless Steel",
        "Keeps Hot/Cold for 12+ hrs",
        "Laser-engraved or Full-Color Wrap",
      ],
      image: <img src={lt1p} alt="1" className="h-full" />,
      tags: ["Corporate Gifts", "Events", "Premium"],
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="bg-cream py-10 mb-10 px-6">
      {/* Yellow dot indicator */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-3 h-3 bg-yellow-400 rounded-full mb-8"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-text-dark text-center mb-4">
          Our Products
        </h2>

        {/* Subheading */}
        <p className="text-xl text-text-dark text-center mb-16">
          Tailored Bottles for Every Event, Business, or Brand Moment.
        </p>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {products.map((product, ind) => (
            <div key={ind} className="flex flex-col">
              {/* Card with icon */}
              <div
                className={`${product.bgColor} rounded-lg p-6 flex justify-center items-center h-80 mb-4`}
              >
                {product.image}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>

              {/* Tags */}
              <div class="flex flex-wrap justify-left gap-2">
                {product.tags.map((tag, ind) => (
                  <span
                    className={`${product.bgColor} ${product.textColor} rounded-full px-2 py-1 text-xs font-semibold`}
                    key={ind}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div class="mt-4 max-w-lg">
                <ul class="space-y-1">
                  {product.features.map((feat, ind) => (
                    <li class="flex gap-1 items-center" key={ind}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4 text-stone-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;

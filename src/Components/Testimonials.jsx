import { Star } from "lucide-react";

const Testimonial = (props) => {
  return (
    <div className="h-full bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="p-8 flex flex-col h-full">
        <p className="text-text-dark mb-auto">{props.content}</p>

        <div className="mt-6">
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
                strokeWidth={0.5}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500">{props.source}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content:
        "A friend recently told me about this app and it is a game changer for me! I was skeptical at first, but figured I'd give it a try. WOW WAS I AMAZED. The app is easy to use and hassle free. For all my fellow online shoppers- this app is for you!",
      rating: 5,
      source: "App Store Review",
    },
    {
      content:
        "This app is so easy to use! It's designed so well that I was able to seamlessly complete my returns. No packaging, taping, processing, printing.... all the things I hate to do!!!! So excited about this app. I highly recommend!!!",
      rating: 5,
      source: "App Store Review",
    },
    {
      content:
        "In addition to this life-changing innovation, everyone on the RQ team is super-friendly and a pleasure to work with. I can't recommend ReturnQueen highly enough, and can't imagine life without it!",
      rating: 5,
      source: "App Store Review",
    },
  ];

  return (
    <section className="py-16 px-6 bg-purple-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-dark">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See why thousands of shoppers trust ReturnQueen with their returns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              rating={testimonial.rating}
              source={testimonial.source}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

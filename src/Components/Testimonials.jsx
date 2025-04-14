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
        "We ordered custom water bottles for our corporate event, and they were a huge hit! The design was exactly what we wanted, and the quality was top-notch. Definitely will order again!",
      rating: 5,
      source: "App Store Review",
    },
    {
      content:
        "The custom bottles helped elevate our brand presence at the trade show. The quality of both the bottles and the printing was excellent. Our logo looked amazing, and attendees loved the personalized touch!",
      rating: 5,
      source: "App Store Review",
    },
    {
      content:
        "We’ve been ordering branded bottles for our office, and the service has been fantastic every time. Fast delivery, great quality, and the perfect customization options. Our team loves them!",
      rating: 5,
      source: "App Store Review",
    },
  ];

  return (
    <section className="py-16 px-6 bg-purple-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-dark">
            Voices Behind the Bottles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don't just deliver water — we deliver experiences. Hear it from
            those who’ve felt the difference.
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

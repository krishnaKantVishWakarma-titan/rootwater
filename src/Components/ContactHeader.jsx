export default function ContactHeader() {
  return (
    <>
      {/*Features */}
      <div class="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/*Grid */}
        <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-10">
          <div>
            <img
              class="rounded-xl w-lg"
              src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
              alt="Features Image"
            />
          </div>
          {/*End Col */}

          <div class="mt-5 sm:mt-10 lg:mt-0">
            <div class="space-y-6 sm:space-y-8">
              {/*Title */}
              <div class="space-y-2 md:space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4 text-left">
                  Contact Us
                </h2>
                <p className="text-xl text-text-dark text-left">
                  We’d Love to Hear From You!
                </p>
              </div>
              {/*End Title */}

              {/*List */}
              <ul>
                <li class="flex gap-x-3">
                  <p className="text-text-dark mb-6">
                    Whether you have a question, need help with your order, or
                    just want to learn more about how our custom-labeled water
                    bottles can elevate your brand, we’re here for you. At Root
                    Water, we value open communication and quick support —
                    because your satisfaction is our top priority.
                  </p>
                </li>
                <li class="flex gap-x-3">
                  <p className="text-text-dark mb-6">
                    Reach out to us through the form below, give us a call, or
                    drop us an email — whichever works best for you. Our
                    friendly support team is always ready to assist with product
                    information, design guidance, bulk pricing, delivery
                    queries, and everything in between. We aim to respond as
                    quickly as possible, ensuring that your experience with us
                    is smooth from start to finish.
                  </p>
                </li>
                <li class="flex gap-x-3">
                  <p className="text-text-dark mb-6">
                    Let’s create something amazing together — start the
                    conversation today!
                  </p>
                </li>
              </ul>
              {/*End List */}
            </div>
          </div>
          {/*End Col */}
        </div>
        {/*End Grid */}
      </div>
      {/*End Features */}
    </>
  );
}

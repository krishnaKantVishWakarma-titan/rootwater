export default function FAQHeader() {
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
                  FAQs
                </h2>
                <p className="text-xl text-text-dark text-left">
                  Got Questions? We’ve Got Answers!
                </p>
              </div>
              {/*End Title */}

              {/*List */}
              <ul>
                <li class="flex gap-x-3">
                  <p className="text-text-dark mb-6">
                    At Root Water, we believe in providing our customers with
                    all the information they need to make an informed decision.
                    Our FAQs page is here to help clarify any doubts you may
                    have about our products, customization options, delivery
                    process, and more. Whether you're curious about how to
                    customize your water bottles, what materials we use, or how
                    long it takes to receive your order, you’ll find all the
                    answers you need right here.
                  </p>
                </li>
                <li class="flex gap-x-3">
                  <p className="text-text-dark mb-6">
                    We understand that choosing the right product for your brand
                    is an important decision, and we’re committed to making the
                    process as smooth as possible. If you can’t find the answer
                    to your question, feel free to reach out to our customer
                    support team – we’re always happy to assist you with any
                    inquiries. Check out our frequently asked questions below,
                    and get started on bringing your custom water bottles to
                    life!
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

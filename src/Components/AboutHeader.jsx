export default function AboutHeader() {
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
                  About Us
                </h2>
                <p className="text-xl text-text-dark text-left">
                  Crafting Custom Bottles, Delivering Exceptional Brands
                </p>
              </div>
              {/*End Title */}

              {/*List */}
              <ul>
                <li class="flex gap-x-3">
                  <p className="text-text-dark mb-6">
                    At Root Water, we believe that hydration is more than just
                    about water — it’s about creating moments, promoting your
                    brand, and making a lasting impact. Since our inception,
                    we've been committed to providing businesses with
                    high-quality, custom-labeled water bottles that reflect
                    their unique identity. From small startups to large
                    corporations, we help brands stand out with personalized
                    bottles that leave a mark, whether at events, in the office,
                    or on-the-go.
                  </p>
                </li>
                <li>
                  <p className="text-text-dark mb-6">
                    We pride ourselves on our attention to detail, using only
                    the best materials to create bottles that are as durable as
                    they are stylish. Our advanced purification process ensures
                    that every sip is refreshing, while our customization
                    options allow you to add your logo, tagline, or design to
                    make every bottle your own. We understand that quality and
                    timely delivery are essential to your business, which is why
                    we ensure that each bottle undergoes rigorous quality checks
                    before reaching you.
                  </p>
                </li>
                <li>
                  <p className="text-text-dark mb-6">
                    As a company driven by passion and innovation, we aim to be
                    your trusted partner in branding, delivering not only a
                    product but an experience. Whether you’re looking for
                    bottles for your next event, office supplies, or corporate
                    giveaways, we’re here to make sure your brand stays front
                    and center, one sip at a time. Thank you for choosing us to
                    help hydrate and promote your business!
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

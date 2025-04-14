export default function ProductsHeader() {
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
                  Our Products
                </h2>
                <p className="text-xl text-text-dark text-left">
                  Customized Water Bottles That Speak for Your Brand
                </p>
              </div>
              {/*End Title */}

              {/*List */}
              <ul>
                <li class="flex gap-x-3">
                  <p className="text-text-dark mb-6">
                    At Root Water, we specialize in providing high-quality,
                    customizable water bottles that are designed to enhance your
                    brand’s visibility and leave a lasting impression. Our
                    bottles are not just a functional product, but a branding
                    tool that helps you stand out in any setting — from
                    corporate events to office spaces and promotional giveaways.
                  </p>
                </li>
                <li>
                  <p className="text-text-dark mb-6">
                    Each of our bottles is carefully crafted with durability and
                    style in mind, offering a perfect balance of aesthetics and
                    practicality. Whether you’re looking for sleek and modern
                    designs or bottles with a more rustic, eco-friendly feel, we
                    offer a variety of customization options to suit your
                    brand’s unique identity. From logo printing to full-wrap
                    designs, we ensure that your branding looks crisp,
                    professional, and eye-catching.
                  </p>
                </li>
                <li>
                  <p className="text-text-dark mb-6">
                    We understand that quality matters, which is why we source
                    only the finest materials for our bottles. Our
                    state-of-the-art purification process ensures that every sip
                    is refreshing, while our bottles are designed to withstand
                    everyday use. With our fast and reliable delivery service,
                    you can count on us to provide your business with the best
                    custom water bottles, delivered on time and ready to make an
                    impact.
                  </p>
                </li>
                <li>
                  <p className="text-text-dark mb-6">
                    Browse our range of products today and find the perfect
                    bottle to elevate your brand!
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

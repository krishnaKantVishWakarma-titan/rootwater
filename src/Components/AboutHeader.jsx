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
                  Discover our solutions
                </h2>
                <p className="text-xl text-text-dark text-left">
                  Our suite of tools, built to fill your sales pipeline.
                </p>
              </div>
              {/*End Title */}

              {/*List */}
              <ul class="space-y-2 sm:space-y-4">
                <li class="flex gap-x-3">
                  <p className="text-text-dark mb-6">Descriptions</p>
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

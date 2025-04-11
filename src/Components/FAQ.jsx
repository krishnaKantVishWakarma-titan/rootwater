export default function FAQ() {
  return (
    <>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="max-w-2xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-center">
            Frequesntly Asked Questions
          </h2>
        </div>

        <div class="max-w-2xl mx-auto divide-y dark:divide-neutral-700">
          <div class="py-8 first:pt-0 last:pb-0">
            <div class="flex gap-x-5">
              <svg
                class="shrink-0 mt-1 size-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>

              <div class="grow">
                <h3 className="text-2xl mb-3 text-left">
                  Can I cancel at anytime?
                </h3>
                <p class="mb-6">
                  Yes, you can cancel anytime no questions are asked while you
                  cancel but we would highly appreciate if you will give us some
                  feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const TrustedBy = () => {
  const companies = [
    { name: "Tupu", logo: "tupu" },
    { name: "Boloo", logo: "boloo" },
    { name: "Grive", logo: "grive" },
    { name: "Procurement Express", logo: "procurement" },
  ];

  return (
    <div className="bg-cream py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-text-dark mb-12">
        Trusted by
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {companies.map((company) => (
          <div key={company.name} className="flex justify-center">
            {/* Use actual logos when available or placeholders */}
            <div className="h-8 w-32 bg-gray-300 rounded flex items-center justify-center text-sm text-gray-500">
              {company.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;

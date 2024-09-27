// /app/components/CompanyLogosSection.tsx

export default function PopularUseCasesSection() {
  const useCases = [
    "Simplify complex topics",
    "Enhance reading comprehension",
    "Learn new terminology",
    "Explore related concepts"
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Most Popular Use Cases</h3>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-b from-gray-100 to-white p-8 rounded-lg shadow-md flex items-center justify-center min-h-[200px] transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 hover:scale-105"
                >
                  <p className="text-gray-800 font-semibold text-center text-xl leading-tight shadow-text">
                    {useCase}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center justify-center" style={{ width: '100%', maxWidth: '700px', height: '440px' }}>
              <img
                src="/CompanyLogoSection.png"
                alt="Popular use cases illustration"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

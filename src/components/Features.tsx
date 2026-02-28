import { features } from "@/lib/constants";

const Features = () => {
  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex  items-center justify-center text-center sm:text-left"
            >
              <feature.icon
                className="w-10 h-10 shrink text-gray-600"
                aria-hidden="true"
              />
              <div className="ms-4">
                <p className="text-base font-medium text-gray-900">
                  {feature.title}
                </p>
                <p className="text-gray-500 mt-1 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

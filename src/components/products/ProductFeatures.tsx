import React from "react";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface ProductFeaturesProps {
  features: Feature[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
              <div className="md:w-1/2">
                <div className="relative aspect-square overflow-hidden rounded-xl border border-gray-700">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
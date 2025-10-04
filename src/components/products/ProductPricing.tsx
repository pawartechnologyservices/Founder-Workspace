import { useState } from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/ui/fade-in";
import RgbBorderButton from "@/components/ui/rgb-border-button";
import { CheckCircle } from "lucide-react";

interface ProductPricingProps {
  productId: "lead-management" | "erp-system" | "billing-system";
  onDemoClick: () => void;
}

const billingOptions = [
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly", discount: "20% OFF" },
  { value: "lifetime", label: "Lifetime" },
];

const productPricing = {
  "lead-management": {
    monthly: {
      basic: 3999,
      advanced: 7999,
      pro: 15999,
    },
    yearly: {
      basic: 38399,
      advanced: 76799,
      pro: 153599,
    },
    lifetime: {
      basic: 79999,
      advanced: 159999,
      pro: 319999,
    },
  },
  "erp-system": {
    monthly: {
      basic: 7999,
      advanced: 15999,
      pro: 31999,
    },
    yearly: {
      basic: 76799,
      advanced: 153599,
      pro: 307199,
    },
    lifetime: {
      basic: 159999,
      advanced: 319999,
      pro: 639999,
    },
  },
  "billing-system": {
    monthly: {
      basic: 6499,
      advanced: 11999,
      pro: 23999,
    },
    yearly: {
      basic: 62399,
      advanced: 115199,
      pro: 230399,
    },
    lifetime: {
      basic: 127999,
      advanced: 239999,
      pro: 479999,
    },
  },
};

const features = {
  "lead-management": {
    basic: [
      "Up to 1,000 leads",
      "Lead capture forms",
      "Basic lead scoring",
      "Email integration",
      "Standard reports",
      "Email support",
    ],
    advanced: [
      "Everything in Basic",
      "Up to 10,000 leads",
      "Advanced lead scoring",
      "Email & SMS automation",
      "Custom pipelines",
      "CRM integration",
      "API access",
      "Priority support",
    ],
    pro: [
      "Everything in Advanced",
      "Unlimited leads",
      "AI-powered lead insights",
      "Custom integrations",
      "White labeling",
      "Dedicated account manager",
      "Custom reporting",
      "24/7 premium support",
    ],
  },
  "erp-system": {
    basic: [
      "Financial management",
      "Up to 5 users",
      "Inventory tracking",
      "Standard reports",
      "Basic HR module",
      "Email support",
    ],
    advanced: [
      "Everything in Basic",
      "Up to 20 users",
      "Advanced inventory",
      "Supply chain management",
      "Project management",
      "Custom reports",
      "API access",
      "Priority support",
    ],
    pro: [
      "Everything in Advanced",
      "Unlimited users",
      "Multi-location inventory",
      "Advanced manufacturing",
      "Business intelligence",
      "White labeling",
      "Custom development",
      "24/7 premium support",
    ],
  },
  "billing-system": {
    basic: [
      "Up to 500 customers",
      "Payment processing",
      "Subscription billing",
      "Invoice automation",
      "Basic reporting",
      "Email support",
    ],
    advanced: [
      "Everything in Basic",
      "Up to 5,000 customers",
      "Advanced subscription rules",
      "Custom pricing models",
      "Revenue analytics",
      "Dunning management",
      "API access",
      "Priority support",
    ],
    pro: [
      "Everything in Advanced",
      "Unlimited customers",
      "Multi-currency support",
      "Advanced tax management",
      "Custom checkout pages",
      "White labeling",
      "Developer tools",
      "24/7 premium support",
    ],
  },
};

const ProductPricing = ({ productId, onDemoClick }: ProductPricingProps) => {
  const [billing, setBilling] = useState("monthly");

  const handleBillingChange = (value: string) => {
    setBilling(value);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const currentPricing = productPricing[productId][billing as keyof typeof productPricing[typeof productId]];
  const currentFeatures = features[productId];

  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 500 + 100}px`,
                height: `${Math.random() * 500 + 100}px`,
                transform: `translate(-50%, -50%) scale(${0.6 + Math.random() * 0.4})`,
                opacity: 0.05 + Math.random() * 0.05,
                filter: 'blur(100px)',
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Pricing Plans
            </h2>
            <p className="text-gray-300 mb-8">
              Choose the plan that works best for your business needs. All plans include our core features.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="flex justify-center mb-10">
              <div className="p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full inline-flex">
                {billingOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleBillingChange(option.value)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      billing === option.value
                        ? "bg-white text-black"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {option.label}
                    {option.discount && billing === option.value && (
                      <span className="ml-1 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                        {option.discount}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <FadeIn direction="up" delay={100}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all hover:transform hover:scale-105 duration-300">
              <div className="p-6 md:p-8">
                <div className="text-lg font-medium text-gray-300 mb-2">Basic</div>
                <div className="flex items-end mb-5">
                  <div className="text-4xl font-bold text-white">{formatPrice(currentPricing.basic)}</div>
                  {billing === "monthly" && <div className="text-gray-400 ml-2">/ month</div>}
                  {billing === "yearly" && <div className="text-gray-400 ml-2">/ year</div>}
                  {billing === "lifetime" && <div className="text-gray-400 ml-2">one-time</div>}
                </div>
                <div className="border-t border-white/10 pt-5 mb-5">
                  <ul className="space-y-3">
                    {currentFeatures.basic.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="text-green-500 h-5 w-5 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-2 px-4 border-2 border-white/30 rounded-lg text-white hover:bg-white/5 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </FadeIn>
          
          {/* Advanced Plan */}
          <FadeIn direction="up" delay={200}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30"></div>
              <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden relative transition-all hover:transform hover:scale-105 duration-300">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
                <div className="p-6 md:p-8 pt-10">
                  <div className="text-lg font-medium text-gray-300 mb-2">Advanced</div>
                  <div className="flex items-end mb-5">
                    <div className="text-4xl font-bold text-white">{formatPrice(currentPricing.advanced)}</div>
                    {billing === "monthly" && <div className="text-gray-400 ml-2">/ month</div>}
                    {billing === "yearly" && <div className="text-gray-400 ml-2">/ year</div>}
                    {billing === "lifetime" && <div className="text-gray-400 ml-2">one-time</div>}
                  </div>
                  <div className="border-t border-white/10 pt-5 mb-5">
                    <ul className="space-y-3">
                      {currentFeatures.advanced.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="text-green-500 h-5 w-5 mr-3" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <RgbBorderButton className="w-full">
                    Get Started
                  </RgbBorderButton>
                </div>
              </div>
            </div>
          </FadeIn>
          
          {/* Pro Plan */}
          <FadeIn direction="up" delay={300}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all hover:transform hover:scale-105 duration-300">
              <div className="p-6 md:p-8">
                <div className="text-lg font-medium text-gray-300 mb-2">Pro</div>
                <div className="flex items-end mb-5">
                  <div className="text-4xl font-bold text-white">{formatPrice(currentPricing.pro)}</div>
                  {billing === "monthly" && <div className="text-gray-400 ml-2">/ month</div>}
                  {billing === "yearly" && <div className="text-gray-400 ml-2">/ year</div>}
                  {billing === "lifetime" && <div className="text-gray-400 ml-2">one-time</div>}
                </div>
                <div className="border-t border-white/10 pt-5 mb-5">
                  <ul className="space-y-3">
                    {currentFeatures.pro.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="text-green-500 h-5 w-5 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-2 px-4 border-2 border-white/30 rounded-lg text-white hover:bg-white/5 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <div className="mt-12 text-center">
          <FadeIn delay={400}>
            <p className="text-gray-300 mb-6">
              Need a custom plan for your enterprise? Contact us for a tailored solution.
            </p>
            <RgbBorderButton onClick={onDemoClick}>
              Contact Sales
            </RgbBorderButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ProductPricing;
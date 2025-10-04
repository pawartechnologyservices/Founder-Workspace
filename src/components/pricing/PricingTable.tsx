
import { useState } from "react";
import FadeIn from "@/components/ui/fade-in";
import RgbBorderButton from "@/components/ui/rgb-border-button";
import { CheckCircle, X } from "lucide-react";

type ProductType = "lead-management" | "erp-system" | "billing-system";
type BillingType = "monthly" | "yearly" | "lifetime";

interface PricingTableProps {
  productId: ProductType;
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
      basic: 49,
      advanced: 99,
      pro: 199,
    },
    yearly: {
      basic: 470,
      advanced: 950,
      pro: 1900,
    },
    lifetime: {
      basic: 990,
      advanced: 1990,
      pro: 3990,
    },
    name: "Customer Relationship Management",
  },
  "erp-system": {
    monthly: {
      basic: 99,
      advanced: 199,
      pro: 399,
    },
    yearly: {
      basic: 950,
      advanced: 1900,
      pro: 3800,
    },
    lifetime: {
      basic: 1990,
      advanced: 3990,
      pro: 7990,
    },
    name: "ERP System",
  },
  "billing-system": {
    monthly: {
      basic: 79,
      advanced: 149,
      pro: 299,
    },
    yearly: {
      basic: 750,
      advanced: 1430,
      pro: 2850,
    },
    lifetime: {
      basic: 1590,
      advanced: 2990,
      pro: 5990,
    },
    name: "Billing System",
  },
};

interface Feature {
  name: string;
  basic: boolean | string;
  advanced: boolean | string;
  pro: boolean | string;
  category?: string;
}

const leadFeatures: Feature[] = [
  { category: "Core Features", name: "Lead Capture Forms", basic: true, advanced: true, pro: true },
  { name: "Email Integration", basic: true, advanced: true, pro: true },
  { name: "Lead Scoring", basic: "Basic", advanced: "Advanced", pro: "AI-Powered" },
  { name: "Automated Follow-ups", basic: false, advanced: true, pro: true },
  { name: "Custom Pipelines", basic: false, advanced: true, pro: true },
  { name: "Lead Nurturing", basic: "Basic", advanced: "Advanced", pro: "Advanced" },
  { category: "Capacity", name: "Number of Leads", basic: "1,000", advanced: "10,000", pro: "Unlimited" },
  { name: "Number of Users", basic: "5", advanced: "20", pro: "Unlimited" },
  { name: "Custom Fields", basic: "10", advanced: "50", pro: "Unlimited" },
  { category: "Integrations", name: " Integration", basic: false, advanced: true, pro: true },
  { name: "Email Service Providers", basic: "2", advanced: "10", pro: "All" },
  { name: "API Access", basic: false, advanced: true, pro: true },
  { name: "Custom Integrations", basic: false, advanced: false, pro: true },
  { category: "Support", name: "Email Support", basic: true, advanced: true, pro: true },
  { name: "Priority Support", basic: false, advanced: true, pro: true },
  { name: "Phone Support", basic: false, advanced: false, pro: true },
  { name: "Dedicated Account Manager", basic: false, advanced: false, pro: true },
];

const erpFeatures: Feature[] = [
  { category: "Core Features", name: "Financial Management", basic: true, advanced: true, pro: true },
  { name: "Inventory Management", basic: "Basic", advanced: "Advanced", pro: "Multi-location" },
  { name: "Reporting", basic: "Standard", advanced: "Custom", pro: "Advanced Analytics" },
  { name: "HR Module", basic: "Basic", advanced: "Standard", pro: "Advanced" },
  { name: "Project Management", basic: false, advanced: true, pro: true },
  { name: "Supply Chain Management", basic: false, advanced: true, pro: true },
  { category: "Capacity", name: "Number of Users", basic: "5", advanced: "20", pro: "Unlimited" },
  { name: "Storage", basic: "10GB", advanced: "50GB", pro: "100GB" },
  { name: "Transactions per Month", basic: "1,000", advanced: "10,000", pro: "Unlimited" },
  { category: "Integrations", name: "Accounting Software", basic: "1", advanced: "5", pro: "All" },
  { name: "E-commerce Platforms", basic: false, advanced: true, pro: true },
  { name: "API Access", basic: false, advanced: true, pro: true },
  { name: "Custom Development", basic: false, advanced: false, pro: true },
  { category: "Support", name: "Email Support", basic: true, advanced: true, pro: true },
  { name: "Priority Support", basic: false, advanced: true, pro: true },
  { name: "Phone Support", basic: false, advanced: false, pro: true },
  { name: "Dedicated Account Manager", basic: false, advanced: false, pro: true },
];

const billingFeatures: Feature[] = [
  { category: "Core Features", name: "Payment Processing", basic: true, advanced: true, pro: true },
  { name: "Subscription Management", basic: "Basic", advanced: "Advanced", pro: "Enterprise" },
  { name: "Invoice Automation", basic: true, advanced: true, pro: true },
  { name: "Revenue Analytics", basic: "Basic", advanced: "Advanced", pro: "Custom" },
  { name: "Dunning Management", basic: false, advanced: true, pro: true },
  { name: "Multi-Currency Support", basic: false, advanced: false, pro: true },
  { category: "Capacity", name: "Number of Customers", basic: "500", advanced: "5,000", pro: "Unlimited" },
  { name: "Payment Gateways", basic: "2", advanced: "5", pro: "All" },
  { name: "Custom Pricing Models", basic: false, advanced: true, pro: true },
  { category: "Integrations", name: "Accounting Software", basic: "1", advanced: "5", pro: "All" },
  { name: "CRM Integration", basic: false, advanced: true, pro: true },
  { name: "API Access", basic: false, advanced: true, pro: true },
  { name: "White Labeling", basic: false, advanced: false, pro: true },
  { category: "Support", name: "Email Support", basic: true, advanced: true, pro: true },
  { name: "Priority Support", basic: false, advanced: true, pro: true },
  { name: "Phone Support", basic: false, advanced: false, pro: true },
  { name: "Dedicated Account Manager", basic: false, advanced: false, pro: true },
];

const featuresByProduct = {
  "lead-management": leadFeatures,
  "erp-system": erpFeatures,
  "billing-system": billingFeatures,
};

const PricingTable = ({ productId, onDemoClick }: PricingTableProps) => {
  const [billing, setBilling] = useState<BillingType>("monthly");

  const handleBillingChange = (value: string) => {
    setBilling(value as BillingType);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Get the correct pricing tiers based on product and billing cycle
  const currentPricing = productPricing[productId][billing] as {
    basic: number;
    advanced: number;
    pro: number;
  };
  
  const features = featuresByProduct[productId];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 4 }).map((_, i) => (
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
        
        <FadeIn>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b border-white/10"></th>
                  <th className="p-4 border-b border-white/10 min-w-[180px]">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-white">Basic</div>
                      <div className="text-3xl font-bold text-white mt-2">{formatPrice(currentPricing.basic)}</div>
                      <div className="text-sm text-gray-400 mt-1">
                        {billing === "monthly" && "per month"}
                        {billing === "yearly" && "per year"}
                        {billing === "lifetime" && "one-time"}
                      </div>
                      <button className="mt-4 w-full py-2 px-4 border-2 border-white/30 rounded-lg text-white hover:bg-white/5 transition-colors">
                        Get Started
                      </button>
                    </div>
                  </th>
                  <th className="p-4 border-b border-white/10 min-w-[180px]">
                    <div className="text-center relative">
                      <div className="absolute top-0 left-0 right-0 -mt-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-1 text-sm font-medium rounded-t-lg">
                        Most Popular
                      </div>
                      <div className="text-lg font-semibold text-white">Advanced</div>
                      <div className="text-3xl font-bold text-white mt-2">{formatPrice(currentPricing.advanced)}</div>
                      <div className="text-sm text-gray-400 mt-1">
                        {billing === "monthly" && "per month"}
                        {billing === "yearly" && "per year"}
                        {billing === "lifetime" && "one-time"}
                      </div>
                      <RgbBorderButton className="mt-4 w-full">
                        Get Started
                      </RgbBorderButton>
                    </div>
                  </th>
                  <th className="p-4 border-b border-white/10 min-w-[180px]">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-white">Pro</div>
                      <div className="text-3xl font-bold text-white mt-2">{formatPrice(currentPricing.pro)}</div>
                      <div className="text-sm text-gray-400 mt-1">
                        {billing === "monthly" && "per month"}
                        {billing === "yearly" && "per year"}
                        {billing === "lifetime" && "one-time"}
                      </div>
                      <button className="mt-4 w-full py-2 px-4 border-2 border-white/30 rounded-lg text-white hover:bg-white/5 transition-colors">
                        Get Started
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={feature.category ? "" : "border-b border-white/10"}>
                    {feature.category ? (
                      <td colSpan={4} className="p-4 bg-white/5">
                        <div className="font-semibold text-white">{feature.category}</div>
                      </td>
                    ) : (
                      <>
                        <td className="p-4 text-gray-300">{feature.name}</td>
                        <td className="p-4 text-center">
                          {typeof feature.basic === "boolean" ? (
                            feature.basic ? (
                              <CheckCircle className="h-5 w-5 mx-auto text-green-500" />
                            ) : (
                              <X className="h-5 w-5 mx-auto text-gray-500" />
                            )
                          ) : (
                            <span className="text-gray-300">{feature.basic}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.advanced === "boolean" ? (
                            feature.advanced ? (
                              <CheckCircle className="h-5 w-5 mx-auto text-green-500" />
                            ) : (
                              <X className="h-5 w-5 mx-auto text-gray-500" />
                            )
                          ) : (
                            <span className="text-gray-300">{feature.advanced}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.pro === "boolean" ? (
                            feature.pro ? (
                              <CheckCircle className="h-5 w-5 mx-auto text-green-500" />
                            ) : (
                              <X className="h-5 w-5 mx-auto text-gray-500" />
                            )
                          ) : (
                            <span className="text-gray-300">{feature.pro}</span>
                          )}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
        
        <div className="mt-16 text-center">
          <FadeIn delay={400}>
            <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-300 mb-6">
                Our enterprise plans are tailored to your specific business needs with custom pricing, 
                dedicated resources, and priority features.
              </p>
              <RgbBorderButton onClick={onDemoClick}>
                Contact Our Sales Team
              </RgbBorderButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;

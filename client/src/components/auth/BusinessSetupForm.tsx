import { useState } from 'react';
import { Building, Phone, Globe, Users, ArrowLeft, X, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Industry } from '@/types';

// Industry data
const crmIndustries: Industry[] = [
  { title: "Healthcare", desc: "Patient care & communication", icon: Briefcase, href: "#", category: 'crm' },
  { title: "Education", desc: "Enrollment & student management", icon: Briefcase, href: "#", category: 'crm' },
  { title: "Retail", desc: "Customer insights & loyalty", icon: Briefcase, href: "#", category: 'crm' },
  { title: "Finance", desc: "Client portfolio tracking", icon: Briefcase, href: "#", category: 'crm' },
  { title: "Manufacturing", desc: "B2B relationship management", icon: Briefcase, href: "#", category: 'crm' },
  { title: "Real Estate", desc: "Property inquiries & sales", icon: Briefcase, href: "#", category: 'crm' },
  { title: "IT Services", desc: "Technology solutions and support", icon: Briefcase, href: "#", category: 'crm' },
];

const erpIndustries: Industry[] = [
  { title: "Automotive", desc: "Supply chain & production", icon: Briefcase, href: "#", category: 'erp' },
  { title: "Logistics", desc: "Fleet & warehouse mgmt", icon: Briefcase, href: "#", category: 'erp' },
  { title: "Hospitality", desc: "Guest experiences", icon: Briefcase, href: "#", category: 'erp' },
  { title: "Construction", desc: "Project tracking", icon: Briefcase, href: "#", category: 'erp' },
  { title: "Energy", desc: "Operations & compliance", icon: Briefcase, href: "#", category: 'erp' },
  { title: "Telecom", desc: "Service mgmt", icon: Briefcase, href: "#", category: 'erp' },
];

const billingIndustries: Industry[] = [
  { title: "Freelancers", desc: "Invoices & payments", icon: Briefcase, href: "#", category: 'billing' },
  { title: "Agencies", desc: "Multi-client billing", icon: Briefcase, href: "#", category: 'billing' },
  { title: "SaaS", desc: "Subscriptions & recurring", icon: Briefcase, href: "#", category: 'billing' },
  { title: "E-commerce", desc: "Online store billing", icon: Briefcase, href: "#", category: 'billing' },
  { title: "Consulting", desc: "Project invoicing", icon: Briefcase, href: "#", category: 'billing' },
  { title: "Healthcare Billing", desc: "Medical billing systems", icon: Briefcase, href: "#", category: 'billing' },
];

const allIndustries = [...crmIndustries, ...erpIndustries, ...billingIndustries];

interface BusinessSetupFormProps {
  industry?: string;
  onComplete: () => void;
  onBack: () => void;
  onClose: () => void;
}

export default function BusinessSetupForm({ 
  industry, 
  onComplete, 
  onBack, 
  onClose 
}: BusinessSetupFormProps) {
  const [formData, setFormData] = useState({
    businessName: "",
    industry: industry || "",
    businessType: "",
    employees: "",
    phone: "",
    website: "",
  });
  const [selectedCategory, setSelectedCategory] = useState<'crm' | 'erp' | 'billing' | ''>('');
  const [error, setError] = useState('');
  
  const { completeBusinessSetup, isLoading } = useAuth();

  const businessTypes = ["Sole Proprietorship", "Partnership", "Corporation", "LLC", "Non-profit"];
  const employeeRanges = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"];

  // Filter industries based on selected category
  const filteredIndustries = selectedCategory 
    ? allIndustries.filter(ind => ind.category === selectedCategory)
    : allIndustries;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.industry) {
      setError('Please select an industry');
      return;
    }
    
    try {
      await completeBusinessSetup({
        name: formData.businessName,
        industry: formData.industry,
        businessType: formData.businessType,
        employees: formData.employees,
        phone: formData.phone,
        website: formData.website || undefined,
      });
      onComplete();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save business information');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIndustrySelect = (industryTitle: string) => {
    setFormData({ ...formData, industry: industryTitle });
  };

  const handleCategorySelect = (category: 'crm' | 'erp' | 'billing' | '') => {
    setSelectedCategory(category);
    setFormData({ ...formData, industry: '' }); // Reset industry selection when category changes
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-lg border w-full max-w-4xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h2 className="text-2xl font-bold">Setup Your Business</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-md text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Business Information</h3>
                
                <div className="space-y-2">
                  <label htmlFor="businessName" className="text-sm font-medium">
                    Business Name *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      placeholder="Enter your business name"
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.businessName}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="businessType" className="text-sm font-medium">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.businessType}
                    onChange={handleChange}
                    disabled={isLoading}
                  >
                    <option value="">Select Business Type</option>
                    {businessTypes.map(type => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="employees" className="text-sm font-medium">
                    Number of Employees *
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.employees}
                    onChange={handleChange}
                    disabled={isLoading}
                  >
                    <option value="">Select Employee Range</option>
                    {employeeRanges.map(range => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Enter your business phone"
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-medium">
                    Website (optional)
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="Enter your website URL"
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.website}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Industry Selection *</h3>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Filter by Category</label>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      type="button"
                      variant={selectedCategory === '' ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleCategorySelect('')}
                    >
                      All Industries
                    </Button>
                    <Button
                      type="button"
                      variant={selectedCategory === 'crm' ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleCategorySelect('crm')}
                    >
                      CRM
                    </Button>
                    <Button
                      type="button"
                      variant={selectedCategory === 'erp' ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleCategorySelect('erp')}
                    >
                      ERP
                    </Button>
                    <Button
                      type="button"
                      variant={selectedCategory === 'billing' ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleCategorySelect('billing')}
                    >
                      Billing
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Your Industry</label>
                  <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto p-1">
                    {filteredIndustries.map(industry => {
                      const Icon = industry.icon;
                      return (
                        <div
                          key={industry.title}
                          className={`p-3 rounded-lg border cursor-pointer transition-all ${
                            formData.industry === industry.title
                              ? 'border-primary bg-primary/10'
                              : 'border-muted hover:border-primary/40'
                          }`}
                          onClick={() => handleIndustrySelect(industry.title)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-md bg-primary/10 text-primary">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium">{industry.title}</div>
                              <div className="text-xs text-muted-foreground">{industry.desc}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {formData.industry && (
                  <div className="p-3 rounded-lg bg-muted">
                    <div className="text-sm font-medium">Selected Industry:</div>
                    <div className="font-semibold text-primary">{formData.industry}</div>
                  </div>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Complete Setup'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
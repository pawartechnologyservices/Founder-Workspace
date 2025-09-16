import ProductCard from '../ProductCard'

export default function ProductCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      <ProductCard
        title="CRM Software"
        subtitle="Customer Relationship Management"
        description="Streamline your customer interactions, track leads, and boost sales performance with our comprehensive CRM solution."
        href="/crm"
        icon="crm"
        features={[
          "Lead & Contact Management",
          "Sales Pipeline Tracking", 
          "Customer Analytics & Reports"
        ]}
      />
      <ProductCard
        title="ERP Software"
        subtitle="Enterprise Resource Planning"
        description="Integrate all your business processes in one unified platform for enhanced efficiency and real-time insights."
        href="/erp"
        icon="erp"
        features={[
          "Inventory Management",
          "Financial Planning",
          "Resource Allocation"
        ]}
      />
      <ProductCard
        title="Billing Software"
        subtitle="Simplify Invoicing & Payments"
        description="Automate your billing processes, manage invoices, and get paid faster with our intuitive billing solution."
        href="/billing"
        icon="billing"
        features={[
          "Automated Invoicing",
          "Payment Processing", 
          "Financial Reporting"
        ]}
      />
    </div>
  )
}
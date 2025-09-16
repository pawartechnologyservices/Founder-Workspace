import HeroProductCard from '../HeroProductCard'

export default function HeroProductCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 max-w-md">
      <HeroProductCard
        shortName="CRM"
        fullName="Customer Relationship Management"
        href="/crm"
        icon="crm"
        delay={0}
      />
      <HeroProductCard
        shortName="ERP"
        fullName="Enterprise Resource Planning"
        href="/erp"
        icon="erp"
        delay={100}
      />
      <HeroProductCard
        shortName="Billing"
        fullName="Billing Software"
        href="/billing"
        icon="billing"
        delay={200}
      />
    </div>
  )
}
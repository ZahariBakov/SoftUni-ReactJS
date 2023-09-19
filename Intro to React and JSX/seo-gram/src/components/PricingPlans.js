import PricingPlan from './PricingPlan';

export default function PricingPlans() {
  return (
    <div className="page-section">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="subhead">Pricing Plan</div>
          <h2 className="title-section">Choose plan the right for you</h2>
          <div className="divider mx-auto"></div>
        </div>
        <div className="row mt-5">
          <PricingPlan
            price="39"
            pricingType="Basic"
            cardBackground="card-pricing"
          />

          <PricingPlan
            price="59"
            pricingType="Standar"
            cardBackground="card-pricing marked"
          />

          <PricingPlan
            price="99"
            pricingType="Professional"
            cardBackground="card-pricing"
          />
        </div>
      </div>
    </div>
  );
}
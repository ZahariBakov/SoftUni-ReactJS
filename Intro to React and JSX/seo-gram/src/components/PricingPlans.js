import PricingPlansBasic from './PricingPlanBasic';
import PricingPlanStandar from './PricingPlanStandar';
import PricingPlanProfessional from './PricingPlanProfessional';

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
            <PricingPlansBasic />

            <PricingPlanStandar />

            <PricingPlanProfessional />
          </div>
        </div>
      </div>
    );
}
import MarketingServiceCard from "./MarketingServiceCard";
import SeoServiceCard from "./SeoServiceCard";
import ResearchServiceCard from './ResearchServiceCard'

export default function TopServices() {
    return (
        <div className="page-section">
            <div className="container">
                <div className="row">
                    <SeoServiceCard />

                    <MarketingServiceCard />

                    <ResearchServiceCard />
                </div>
            </div>
        </div>
    );
}

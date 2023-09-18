import OurServicesCard from "./OurServicesCard";

export default function OurServices() {
    return (
        <div className="page-section bg-light">
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <div className="subhead">Our services</div>
                    <h2 className="title-section">How SEO Team Can Help</h2>
                    <div className="divider mx-auto"></div>
                </div>

                <div className="row">
                    <OurServicesCard />

                    <OurServicesCard />

                    <OurServicesCard />

                    <OurServicesCard />

                    <OurServicesCard />

                    <OurServicesCard />

                    <OurServicesCard />

                    <OurServicesCard />                    
                </div>

            </div>
        </div>
    );
}
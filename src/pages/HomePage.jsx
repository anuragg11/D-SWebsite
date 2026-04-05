import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import PremiumChia from "../components/PremiumChia";
import ExportProcess from "../components/ExportProcess";
import CTASection from "../components/CTASection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

function HomePage() {
    return (
        <>
            <Hero />
            <WhyChooseUs />
            <PremiumChia />
            <ExportProcess />
            <CTASection />
            <Testimonials />
            <FAQ />
        </>
    );
}

export default HomePage;
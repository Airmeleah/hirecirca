import { Navbar } from './components/Navbar';
import { Ticker } from './components/Ticker';
import { Hero } from './components/Hero';
import { PriceBar } from './components/PriceBar';
import { RealitySection } from './components/RealitySection';
import { PositioningSection } from './components/PositioningSection';
import { PainSection } from './components/PainSection';
import { SolutionSection } from './components/SolutionSection';
import { TransformationSection } from './components/TransformationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Ticker />
      
      <Hero />

      <PriceBar 
        variant="light"
        text={<>Everything inside Hire Circa for a <strong>one-time investment</strong></>}
        amount="₦15,000"
      />

      <RealitySection />

      <PriceBar 
        variant="dark-glass"
        text={<>Stop waiting. Start winning. Join Hire Circa for just <strong>₦15,000</strong> — one time, forever.</>}
        buttonText="Invest in Your Career →"
      />

      <PositioningSection />

      <PriceBar 
        variant="pale"
        text={<>Get the positioning strategy that changes everything — <strong>one-time ₦15,000</strong></>}
        amount="₦15,000"
      />

      <PainSection />

      <PriceBar 
        variant="dark-glass"
        text={<>You deserve real support — not guesswork. Join Hire Circa for <strong>₦15,000</strong> one time.</>}
        buttonText="Fix This Today →"
      />

      <SolutionSection />

      <PriceBar 
        variant="light"
        text={<>All 7 resources. One community. One price — <strong>₦15,000 forever.</strong></>}
        amount="₦15,000"
        buttonText="Get Instant Access →"
      />

      <TransformationSection />

      <PriceBar 
        variant="pale"
        text={<>This transformation is available to you right now for just <strong>₦15,000</strong></>}
        amount="₦15,000"
        buttonText="Start Your Transformation →"
      />

      <TestimonialsSection />

      <div className="bg-gradient-to-r from-[#fef3c7] to-[#fde68a] py-8 px-6 text-center">
        <p className="text-base font-bold text-[#92400e]">
          ⚠️ Every week you wait is another week of silence, missed opportunities and stagnation. <em className="not-italic underline">The right time to change your strategy is now.</em>
        </p>
      </div>

      <PriceBar 
        variant="purple"
        text={<>Thousands of professionals are already positioning themselves ahead of you. <strong>Don't wait.</strong></>}
        amount="₦15,000"
      />

      <PricingSection />

      <FinalCTA />

      <Footer />
    </div>
  );
}

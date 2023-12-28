
import Subscription from '@/app/components/subscribtion/Subscription';
import AboutUs from '@/app/components/AboutUs'
import Testimony from '@/app/components/Testimony/Testimony'
import Hero from "@/app/components/hero"
import TestimonyMobile from './components/Testimony/TestimonyMobile';
import Testimonial from './components/Testimony/Testimonial';
export default function Home() {

  return (
    <div className="bg-primary font-custom tracking-wide">
      <Hero/>
      <AboutUs/>
      <Testimony/>
      <TestimonyMobile/>
      <Testimonial/>
      <Subscription />
    </div>

  )
}
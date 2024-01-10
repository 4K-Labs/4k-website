
import Subscription from '@/app/components/subscribtion/Subscription';
import AboutUs from '@/app/components/AboutUs'
import Hero from "@/app/components/hero"
import Testimony from './components/Testimony/Testimony';
export default function Home() {

  return (
    <div className="bg-primary font-custom tracking-wide">
      <Hero/>
      <AboutUs/>
      <Testimony/>
      <Subscription />
    </div>

  )
}
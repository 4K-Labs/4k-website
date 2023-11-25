
import Subscription from '@/app/components/subscribtion/Subscription';
import Footer from '@/app/components/Footer/Footer';
import AboutUs from '@/app/components/AboutUs'
import Testimony from '@/app/components/Testimony'
import Hero from "@/app/components/hero"

export default function Home() {

  return (
    <div className="bg-primary font-custom tracking-wide>
      <Hero/>
      <AboutUs/>
      <Testimony/>
      <Subscription />
      <Footer />
    </div>

  )
}

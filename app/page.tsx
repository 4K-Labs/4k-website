import Subscription from "@/components/HomePage/Subscription";
import AboutUs from "@/components/HomePage/AboutUs";
import Hero from "@/components/Header/hero";
import EventCard from'@/components/HomePage/EventCard'
import Testimony from "../components/Testimonial/Testimony";

export default function Home() {
  return (
    <div className="bg-primary-bg px-2 font-custom tracking-wide gap-8 mx-auto w-full">
      <Hero />
      <AboutUs />
      <EventCard />
      <Testimony/>
      <Subscription />
      
    </div>
  );
}

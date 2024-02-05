import Subscription from "@/components/HomePage/Subscription";
import AboutUs from "@/components/HomePage/AboutUs";
import TestimonyDesktop from "@/components/Testimony/TestimonyDesktop";
import Hero from "@/components/Header/hero";
import ProjectCard from "@/components/Projects/ProjectCard";
import EventCard from'@/components/HomePage/EventCard'
import Testimony from "../components/Testimony/Testimony";

export default function Home() {
  return (
    <div className="bg-primary font-custom tracking-wide">
      <Hero />
      <AboutUs />
      <ProjectCard id={""} />
      <EventCard />
      <TestimonyDesktop />
      <Subscription />
    </div>
  );
}

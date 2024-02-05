import WhoAreWe from "./WhoAreWe";
import MissionIntro from "./MissionIntro";
import AboutCard from "./About-card";
import MissionAndVision from "./MissionAndVision";

export default function about() { 
    return (
      <div className="mt-44 w-4/5 mx-auto">
        <WhoAreWe />
        <MissionIntro />
        <AboutCard
          imageSrc="/images/4klabs.png"
          blackTitle="Our "
          orangeTitle="Mission"
          description="The mission of 4K Labs is to conduct research and development in the fields of AI, ML, embedded systems, software development, and robotics to create innovative solutions that can solve real-world problems. This may involve developing hardware systems, software platforms, or new algorithms that can improve efficiency and reduce costs. More precisely, the mission of 4K Labs is to create new opportunities for individuals by pushing the boundaries of what is possible with these cutting-edge technologies."
        />
        <AboutCard
          imageSrc="/images/4klabs.png"
          blackTitle="Our "
          orangeTitle="Vision"
          description="The mission of 4K Labs is to conduct research and development in the fields of AI, ML, embedded systems, software development, and robotics to create innovative solutions that can solve real-world problems. This may involve developing hardware systems, software platforms, or new algorithms that can improve efficiency and reduce costs. More precisely, the mission of 4K Labs is to create new opportunities for individuals by pushing the boundaries of what is possible with these cutting-edge technologies."
        />
        <MissionIntro />
        <MissionAndVision />
      </div>
    );
}
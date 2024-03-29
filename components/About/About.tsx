"use client"
import WhoAreWe from "./WhoAreWe";
import MissionIntro from "./MissionIntro";
import AboutCard from "./About-card";
import Division from "./Division";
import MissionAndVision from "./MissionAndVision";

export default function about() { 
    return (
      <div className="mt-44 w-4/5 mx-auto">
        <WhoAreWe />
        <MissionIntro />
        <div className="md:w-4/5 mx-auto">
        <AboutCard
          imageSrc1="/images/mission.jpg"
          imageSrc2="/images/mission2.jpg"
          blackTitle="Our "
          orangeTitle="Mission"
          description="The mission of 4K Labs is to conduct research and development in the fields of AI, ML, embedded systems, software development, and robotics to create innovative solutions that can solve real-world problems. This may involve developing hardware systems, software platforms, or new algorithms that can improve efficiency and reduce costs. More precisely, the mission of 4K Labs is to create new opportunities for individuals by pushing the boundaries of what is possible with these cutting-edge technologies."
        />
        <AboutCard
            imageSrc1="/images/vision.jpg"
            imageSrc2="/images/vision2.jpg"
          blackTitle="Our "
          orangeTitle="Vision"
          description="The vision of 4K Labs is to be one of the leaders in the development of innovative solutions that leverage state of the art technologies to solve complex problems and create new opportunities. As one pillar of the university is community service, 4K Labs has a vision to be at the forefront of R&D to provide solutions to the community challenges."
        />
        </div>
        <Division />
        <MissionAndVision />
      </div>
    );
}
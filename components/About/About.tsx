import WhoAreWe from "./WhoAreWe";
import MissionIntro from "./MissionIntro";
import MissionAndVision from "./MissionAndVision";

export default function about() { 
    return (
        <div className = "mt-44 w-4/5 mx-auto">
            <WhoAreWe />
            <MissionIntro />
            <MissionAndVision />
        </div>
    )
}
import CardAbout from "../elements/CardAbout";
import { PropsSession } from "@/types";

export default function About({ id }: PropsSession) {
  return (

    <div
      className="w-full h-fit flex flex-col justify-center items-center lg:flex-row mb-10"
      id={id}
    >
        
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center py-5  px-5">
        <CardAbout />
      </div>

      <div className="w-full lg:w-1/2 h-full">

        <div className="w-full h-full px-5">
          <video
            src={"/Soraia-Felix-Video.mp4"}
            autoPlay
            loop
            muted
            className="w-full h-140 object-cover rounded-[20px]"
          />
        </div>

      </div>

    </div>
  );
}

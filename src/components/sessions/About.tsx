import CardAbout from "../elements/CardAbout";

export default function About() {
  return (

    <div
      className="w-full h-fit flex flex-col justify-center items-center lg:flex-row py-16"
      id="about"
    >
        
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center py-5 px-5">
        <CardAbout />
      </div>

      <div className="w-full lg:w-1/2 h-full">

        <div className="w-full h-full px-5 lg:px-10">
          <video
            src={"/Soraia-Felix-Video.webm"}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Video de apresentação"
            className="w-full h-140 object-cover rounded-[20px]"
          >
            <source src="/Soraia-Felix-Video.webm" type="video/webm" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>

      </div>

    </div>
  );
}

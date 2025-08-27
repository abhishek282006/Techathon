import EventImg from "/src/assets/img/event.svg";
import SocialIcons from "./SocialMedia";

const eventsData = [
  { name: "TECHTRIVIA", icon: "/src/assets/img/techtrivia.svg" },
  { name: "BUILD@ARSD", icon: "/src/assets/img/build.svg" },
  { name: "CODEOFF@ARSD", icon: "/src/assets/img/code.svg" },
  { name: "SPEAKER SESSIONS", icon: "/src/assets/img/speaker.svg" },
  { name: "MEME WAR", icon: "/src/assets/img/meme-war.svg" },
  { name: "GEO GUESSER", icon: "/src/assets/img/geoguesser.svg" },
];

const Event = () => {
  return (
    <section
      className="h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${EventImg})` }}
    >
      <div className="h-screen relative flex flex-col items-center p-15">
        <div className="flex flex-col items-center text-center p-10">
          <div className="h-[1.5px] w-18 bg-white"></div>
          <h1 className="text-white text-[2rem]">Events</h1>
        </div>
        <div className="overflow-y-scroll [&::-webkit-scrollbar]:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {eventsData.map((event) => (
            <div
              key={event.name}
              className="group relative h-[200px] w-[200px] rounded-lg transition duration-300 transform hover:[transform:perspective(1000px)_rotateY(10deg)]"
            >
              <div
                className="relative z-10 flex flex-col items-center justify-center h-full w-full bg-white rounded-lg shadow-md p-6 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-blue-400"
              >
                <img
                  src={event.icon}
                  alt={event.name}
                  className="h-20 w-20 mb-2 transition duration-300 group-hover:scale-110"
                />
                <p className="font-bold text-black group-hover:text-white">
                  {event.name}
                </p>
              </div>
            </div>
          ))}
        </div>
          <div className="absolute  bottom-0 right-0 p-4">
            <SocialIcons/>
          </div>
      </div>
    </section>
  );
};

export default Event;

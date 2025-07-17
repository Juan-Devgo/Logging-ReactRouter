import LoggingTitle from "../ui/LoggingTitle";
import SplashCursor from "../Animations/SplashCursor/SplashCursor";
import LoggingBody from "../components/LoggingBody";
import "./Logging.css";

function Logging() {
  return (
    <>
      <head>
        <title>Ingreso al Portal</title>
      </head>

      <div className="bg-gray-950 text-white flex flex-col items-center justify-center min-h-screen">
        <LoggingTitle></LoggingTitle>
        <LoggingBody
          splashCursor={
            <SplashCursor
              DENSITY_DISSIPATION={1}
              VELOCITY_DISSIPATION={10}
              PRESSURE_ITERATIONS={10}
              SPLAT_RADIUS={0.2}
              COLOR_UPDATE_SPEED={2}
            />
          }
        ></LoggingBody>
      </div>
    </>
  );
}

export default Logging;

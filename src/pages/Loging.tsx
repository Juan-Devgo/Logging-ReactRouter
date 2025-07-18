import { useNavigate } from "react-router";
import SplitTitle from "../ui/SplitTitle";
import SplashCursor from "../Animations/SplashCursor/SplashCursor";
import LoggingBody from "../components/LogingBody";
import NavigationBar from "../components/NavigationBar";
import "./Loging.css";

function Loging() {

  const navigate = useNavigate();

  function handleSubmit(id: string) {
    navigate("/" + id);
  }

  return (
    <div className="bg-gray-950 min-h-screen space-y-35">
      <head>
        <title>Ingreso al Portal</title>
      </head>
      <NavigationBar />
      <div className="text-white flex flex-col items-center justify-center">
        <SplitTitle text="Descubre Qué hay Para Ti" time={6500}/>
        <LoggingBody onSubmit={handleSubmit}
          splashCursor={
            <SplashCursor
              DENSITY_DISSIPATION={1}
              VELOCITY_DISSIPATION={1}
              PRESSURE_ITERATIONS={5}
              SPLAT_RADIUS={0.1}
              COLOR_UPDATE_SPEED={5}
            />
          }
        ></LoggingBody>
      </div>
    </div>
  );
}

export default Loging;

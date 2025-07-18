import NavigationBar from "../components/NavigationBar";
import SplashCursor from "../Animations/SplashCursor/SplashCursor";
import SplitTitle from "../ui/SplitTitle";
import "./Register.css";
import RegisterBody from "../components/RegisterBody";

function Register() {
  return (
    <div className="bg-gray-950 min-h-screen space-y-35">
      <head>
        <title>Registro en el Portal</title>
      </head>
      <NavigationBar />
      <div className="text-white flex flex-col items-center justify-center">
        <SplitTitle text="Regístrate en Nuestro Portal" time={6500}/>
        <RegisterBody
          splashCursor={
            <SplashCursor
              DENSITY_DISSIPATION={1}
              VELOCITY_DISSIPATION={1}
              PRESSURE_ITERATIONS={5}
              SPLAT_RADIUS={0.1}
              COLOR_UPDATE_SPEED={5}
            />
          }
        ></RegisterBody>
      </div>
    </div>
  );
}

export default Register;

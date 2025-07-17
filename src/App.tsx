import Title from "./components/Title";
import SplashCursor from "./Animations/SplashCursor/SplashCursor";
import Logging from "./components/Logging";
import "./App.css";

function App() {

  return (
    <div className="bg-gray-950 text-white flex flex-col items-center justify-center min-h-screen">
      <Title></Title>
      <Logging splashCursor={<SplashCursor DENSITY_DISSIPATION={1} VELOCITY_DISSIPATION={10} PRESSURE_ITERATIONS={10} SPLAT_RADIUS={0.2} COLOR_UPDATE_SPEED={2}/>}></Logging>
    </div>
  );
}

export default App;

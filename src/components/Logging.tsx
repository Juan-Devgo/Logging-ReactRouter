import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import "./Logging.css";

interface LoggingProps {
  splashCursor: ReactNode;
}

function Logging({ splashCursor }: LoggingProps) {  
  const [id, setId] = useState("");
  const [splashCursorEnabled, setSplashCursorEnabled] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);
  useEffect(() => {
    if(buttonPressed) {
      const timer = setTimeout(() => {
        setButtonPressed(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    
  }, [buttonPressed])

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    // Validate that the input is a number
    if (/^\d*$/.test(value)) {
      // Ignore non-numeric input
      setId(value);
    }
  }

  function toggleSplashCursor(checked: boolean) {
    setSplashCursorEnabled(!checked);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setButtonPressed(true);
  }

  return (
    <>
    {splashCursorEnabled && splashCursor}
      <p className="mb-2">
        Pon aquí tu tarjeta de identidad y descubre qué hay para ti.
      </p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center gap-1"
      >
        <input
          value={id}
          type="text"
          placeholder="ID"
          onChange={(e) => handleInputChange(e)}
          className="bg-white font-bold rounded text-black text-center placeholder:text-slate-500 placeholder:font-normal placeholder:text-center"
        ></input>
        <button
          type="submit"
          className={buttonPressed? "bg-gray-500 text-gray-700 font-bold py-2 px-4 rounded" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
        >
          {buttonPressed? "Cargando..." : "Descubre"}
        </button>
      </form>
      <label className="flex items-center gap-2 mt-4 border border-gray-600 p-2 rounded">
        <span className="text-sm text-gray-400"> Desactivar splash cursor</span>
        <input
          type="checkbox"
          checked={!splashCursorEnabled}
          onChange={(e) => toggleSplashCursor(e.target.checked)}
          className="bg-white text-black scale-125 accent-blue-500 rounded"
        />
      </label>
    </>
  );
}

export default Logging;

import { useState, useEffect, type ReactNode } from "react";

interface RegisterBodyProps {
  splashCursor: ReactNode;
}

interface InputProps {
  value: string;
  regEx: RegExp;
  placeholder: string;
  onChange: (value: string) => void;
}

function Input({ value, regEx, placeholder, onChange }: InputProps) {
  
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    // Validate that the input matches the regular expression
    if (regEx.test(value)) {
      onChange(value);
    }
  }
  
  return (
    <input
    value={value}
    type="text"
    placeholder={placeholder}
    onChange={(e) => handleInputChange(e)}
    className="bg-white font-bold rounded h-7 text-black text-center placeholder:text-slate-500 placeholder:font-normal placeholder:text-center"
    ></input>
  );
}

function RegisterBody({ splashCursor }: RegisterBodyProps) {
  const [splashCursorEnabled, setSplashCursorEnabled] = useState(true);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (buttonPressed) {
      const timer = setTimeout(() => {
        setButtonPressed(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [buttonPressed]);

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
        Pon aquí tus datos, pronto descubrirás qué hay para ti.
      </p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center gap-1"
      >
        <Input value={id} regEx={/^\d*$/} placeholder="ID" onChange={setId}></Input>
        <Input value={firstName} regEx={/^[a-zA-Z\s]*$/} placeholder="Nombres" onChange={setFirstName}></Input>
        <Input value={lastName} regEx={/^[a-zA-Z\s]*$/} placeholder="Apellidos" onChange={setLastName}></Input>
        <button
          type="submit"
          className={
            buttonPressed
              ? "bg-gray-500 text-gray-700 font-bold py-2 px-4 rounded"
              : "bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded hover:text-2xl transition-all duration-300"
          }
        >
          {buttonPressed ? "Cargando..." : "Regístrate"}
        </button>
      </form>
      <label className="flex items-center gap-2 mt-4 border border-gray-600 p-2 rounded  hover:bg-slate-800 transition-all duration-300">
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

export default RegisterBody;

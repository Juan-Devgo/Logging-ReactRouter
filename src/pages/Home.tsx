import { useParams } from "react-router";
import NavigationBar from "../components/NavigationBar";
import "./Home.css";
import { users } from "../data/users";

function Home() {

  const params = useParams();

  function getUser(id: string) {
    return users.find((user) => user.id.toString() === id);
  }

  const user = getUser(params.id || "");

  return (
    <div className="pattern min-h-screen">
      <NavigationBar {...(user ? {user} : {})}/> 
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4 text-white">
          ¡Bienvenido a la Página de {"{ nombrePagina }"}!
        </h1>
        <p className="text-lg text-gray-300">
          Aquí podrás encontrar cosas como {"{ descripcionPagina }"}.
        </p>
        <a href="https://en.wikipedia.org/wiki/Mosasaurus">
          <img
            src="mosasaurio.png"
            alt="Mosasaurio"
            className="rounded w-70 aspect-9/16"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Home;

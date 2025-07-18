import type User from "../types/User";

interface NavigationBarProps {
  user?: User
}

function NavigationBar({user}: NavigationBarProps) {
  return (
    <nav className="bg-transparent p-4 h-8">
      <ul className="flex justify-end space-x-4 text-black">
        <div className="justify-start grow">
          <h1 className="text-white text-2xl font-bold">{user?.firstName} {user?.lastName}</h1>
        </div>
        <li>
          <a
            href="/"
            className="rounded-full bg-white p-2 hover:bg-blue-900 hover:text-white hover:text-2xl transition-all duration-300"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href="/loging"
            className="rounded-full bg-white p-2 hover:bg-blue-900 hover:text-white hover:text-2xl transition-all duration-300"
          >
            Iniciar Sesión
          </a>
        </li>
        <li>
          <a
            href="/register"
            className="rounded-full bg-white p-2 hover:bg-blue-900 hover:text-white hover:text-2xl transition-all duration-300"
          >
            Registrarse
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;

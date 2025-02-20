import { Link } from "react-router"

const Navbar = () => {
    return (
      <nav>
        <Link to={"/"}>Sobre</Link>
        <Link to={"/skills"}>Habilidades</Link>
        <Link to={"/projects"}>Projetos</Link>
        <Link to={"/contact"}>Contato</Link>
      </nav>
    );
}

export default Navbar
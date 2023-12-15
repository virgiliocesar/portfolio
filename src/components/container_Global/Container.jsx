import "./container.css"
import Header from "../header/Header";
import Sobremim from "../Sobremim/Sobremim";
import Projetos from "../projetos/Projetos";

const Container = () => {
    return (
      <div id="main-container">
        <Header/>
        <Sobremim/>
        <Projetos/>
      </div>
    );
    
};

export default Container
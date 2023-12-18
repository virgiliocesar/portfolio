import "./container.css"
import Header from "../header/Header";
import Sobremim from "../Sobremim/Sobremim";
import Projetos from "../projetos/Projetos";
import Hardskills from "../hard_skills/hardskills";
import Softskills from "../Soft_skills/Softskills";

const Container = () => {
    return (
      <div id="main-container">
        <Header />
        <Sobremim />
        <Hardskills />
        <Softskills />
        <Projetos />
      </div>
    );
    
};

export default Container
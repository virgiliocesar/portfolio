import "./container.css"
import Header from "../header/Header";
import Sobremim from "../Sobremim/Sobremim";
import Projetos from "../projetos/Projetos";
import Hardskills from "../hard_skills/hardskills";

const Container = () => {
    return (
      <div id="main-container">
        <Header/>
        <Sobremim/>
        <Projetos />
        <Hardskills/>
      </div>
    );
    
};

export default Container
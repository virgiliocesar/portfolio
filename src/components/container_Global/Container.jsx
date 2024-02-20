import "./Container.css"
import Header from "../header/Header";
import Sobremim from "../Sobremim/Sobremim";
import Projetos from "../projetos/Projetos";

import Softskills from "../Soft_skills/Softskills";
import Hardskills from "../hard_skills/Hardskills";

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
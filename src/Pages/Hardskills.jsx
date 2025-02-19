import "./Hardskills.css"
import hardSkills from "../data/hardskill.json"
const Hardskills = () => {
    
    return (
      <section id="section-hard-skills">
        <h1>Hard skills</h1>
        <div id="container-hard-skills">
          <ul className="ul-skills">
            {hardSkills.map((item) => (
              <li key={item.id}>
                <img
                  className="img-hard-skills"
                  src={item.imagem}
                  alt={item.skill}
                />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
}

export default Hardskills
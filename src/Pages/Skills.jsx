import skills from "../data/skills.json"
import hardSkills from "../data/hardskill.json"
const Skills = () => {
  return (
    <section id="section-hard-skills">
      <h1>Hard skills</h1>
      <div id="container-hard-skills">
        <ul className="ul-skills">
          {skills.map((item) => (
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
    </section>
  );
}

export default Skills
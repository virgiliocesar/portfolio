import skills from "../data/skills.json"
import hardSkills from "../data/hardskill.json"
const Skills = () => {
  return (
    <section className="section__container">
      <div className="mb-20">
        <h1 className="text-3xl font-semibold text-center mb-10">Habilidades Comportamentais</h1>
      <div className="flex justify-center aline-items-center">
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
      </div>

      <div >
        <h1 className="text-3xl font-semibold text-center mb-10">Habilidades Técnicas</h1>
      <div className="flex justify-center">
        <div id="container-hard-skills">
          <ul className="ul-skills flex">
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
      </div>
      </div>
    </section>
  );
}

export default Skills
import "./Hardskills.css"

const Hardskills = () => {
    const hardskills = [
      { imagem: "", skill: "HTML5" },
      { imagem: "", skill: "CSS3" },
      { imagem: "", skill: "JavaScript" },
      { imagem: "", skill: "React" },
      { imagem: "", skill: "Git/ GitHub" },
      { imagem: "", skill: "Figman" },
      { imagem: "", skill: "Photoshop" },
      { imagem: "", skill: "" },
    ];
    return (
      <section id="hard-skills">
        <h1>Hard skills</h1>
        <ul>
          {hardskills.map((item) => (
            <li key={item.id}>
              <img src={item.imagem} alt={item.skill} />
              <p>{item.skill}</p>
            </li>
          ))}
        </ul>
      </section>
    );
}

export default Hardskills
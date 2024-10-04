import "./Hardskills.css"

const Hardskills = () => {
    const hardskills = [
      {
        name: "HTML 5",
        imagem:
          "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png",
        skill: "HTML5",
      },
      {
        name: "CSS 3",
        imagem:
          "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png",
        skill: "CSS3",
      },
      {
        name: "JavaScript",
        imagem:
          "	https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_official_icon_130509.png",
        skill: "JavaScript",
      },
      {
        name: "React",
        imagem:
          "	https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-64.png",
        skill: "React",
      },
      {
        name: "Typescript",
        imagem:
          "	https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
        skill: "React",
      },
      {
        name: "Node.JS",
        imagem:
          "	https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png",
        skill: "React",
      },
      {
        name: "MongoDB",
        imagem:
          "	https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
        skill: "React",
      },
      {
        name: "Docker",
        imagem: "	https://cdn-icons-png.flaticon.com/128/919/919853.png",
        skill: "Docker",
      },
      {
        name: "Tailwind",
        imagem:
          "	https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png",
        skill: "React",
      },
      {
        name: "styled-components",
        imagem:
          "	https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_styled_icon_130142.png",
        skill: "React",
      },
      {
        name: "Git",
        imagem:
          "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_git_icon_130581.png",
        skill: "Git",
      },
      {
        name: "GitHub",
        imagem:
          "https://cdn.icon-icons.com/icons2/2351/PNG/512/logo_github_icon_143196.png",
        skill: "GitHub",
      },
      {
        name: "Figma",
        imagem:
          "https://cdn.icon-icons.com/icons2/2699/PNG/512/figma_logo_icon_170157.png",
        skill: "Figma",
      },
      {
        name: "Photoshop",
        imagem:
          "	https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_photoshop_icon_130268.png",
        skill: "Photoshop",
      },
    ];
    return (
      <section id="section-hard-skills">
        <h1>Hard skills</h1>
        <div id="container-hard-skills">
          <ul className="ul-skills">
            {hardskills.map((item) => (
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
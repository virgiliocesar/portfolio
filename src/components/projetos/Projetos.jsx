import "./Projetos.css"
const Projetos = () => {
  const proj = [
    {
      id: 1,
      imagem: "../src/assets/img/mentor_class.webp",
      link: "https://projeto-de-conclusao-do-modulo-1-avaliacao.vercel.app/html/mentores/mentores.html",
      text: "Mentor Class, uma area de gestão de alunos e professores e turmas para ensino, possui registro de email alunos e professores.",
    },
    {
      id: 2,
      imagem: "../src/assets/img/codai.webp",
      link: "https://enjels.github.io/codai-2.0/",
      text: "Projeto Codai -2.0 Nikel, é uma carteira digital,que registra a entra e saída do saldo da conta, detalhes descrição da transação e data do processo tudo isso sendo salvo no Histórico, possui cadastro e login, usa local storage para salvar os dados.",
    },
    {
      id: 3,
      imagem: "../src/assets/img/coffe.webp",
      link: "https://enjels.github.io/Coffee-Shop/",
      text: "Coffe-shop criado apartir de uma referência do youtube CANAL: Danilo paixão.",
    },

    {
      id: 4,
      imagem: "../src/assets/img/doritos.webp",
      link: "https://enjels.github.io/Doritos/",
      text: "Site de doritos um dos primeiros projetos criado quando n tinha conhecimento em programação para usar ele como medida de evolução OBS: embreve uma nova versão melhorada.",
    },
    {
      id: 5,
      imagem: "../src/assets/img/relojo.webp",
      link: "https://enjels.github.io/relogio-digital/",
      text: "Lorem ipsum dolor sit amet consectetur adipisiciem voluptas r.",
    },
    {
      id: 6,
      imagem: "../src/assets/img/pj2.webp",
      link: "https://enjels.github.io/projeto-2/",
      text: "Landing page, projeto criado apartir do curso da rocketseat, objetivo aplicar e consolidar conhecimento basicas estudads do html e css.",
    },
    {
      id: 7,
      imagem: "../src/assets/img/pj3.webp",
      link: "https://enjels.github.io/projeto-3/",
      text: "Formulário projeto criado apartir do curso da rocketseat, objetivo aplicar e consolidar conhecimento em criação de formularios.",
    },
    {
      id: 8,
      imagem: "../src/assets/img/login cat.webp",
      link: "https://enjels.github.io/login-cat/",
      text: "Projeto login-cat criado apartir de uma referência do youtube CANAL: Markzuel.",
    },

    {
      id: 9,
      imagem: "../src/assets/img/pj4.webp",
      link: "https://enjels.github.io/projeto-4/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, cse officiis odit harum qui ea, natus dolores.",
    },
    {
      id: 10,
      imagem: "../src/assets/img/pj5.webp",
      link: "https://enjels.github.io/projeto-5/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, comendis es qui ea, natus dolores.",
    },
    {
      id: 11,
      imagem: "../src/assets/img/pj1.webp",
      link: "https://enjels.github.io/projeto-1/",
      text: "ambiente unico.",
    },
    {
      id: 11,
      imagem:"https://www.ccj.ufpb.br/dcx/contents/imagens/figuras/output_zvmmKf.gif/@@images/image.gif",
      link: "#",
      text: "",
    },
  ];
    return (
      <section id="section-pj">
        <h1>Projetos</h1>
        <div id="container-pj">
          <ul className="ul-pj">
            {proj.map((proj, i) => (
              <li key={i}>
                <a href={proj.link} target="_blank" rel="noreferrer">
                  <img className="img-pj" src={proj.imagem} alt={`projeto-${i}`} />
                </a>
                <p>{proj.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
};

export default Projetos

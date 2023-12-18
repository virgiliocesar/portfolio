import "./Projetos.css"
const Projetos = () => {
  const proj = [
    {
      id: 1,
      imagem:
        "https://i.pinimg.com/736x/72/0b/d6/720bd6b3460dd69e2650f1ccaaffb91f.jpg",
      link: "https://projeto-de-conclusao-do-modulo-1-avaliacao.vercel.app/html/mentores/mentores.html",
      text: "Mentor Class, uma area de gestão de alunos e professores e turmas para ensino, possui registro de email alunos e professores.",
    },
    {
      id: 2,
      imagem:
        "https://i.pinimg.com/736x/ed/3a/3a/ed3a3a925bd3c48b84736a9c14a2608c.jpg",
      link: "https://enjels.github.io/codai-2.0/",
      text: "Projeto Codai -2.0 Nikel, é uma carteira digital,que registra a entra e saída do saldo da conta, detalhes descrição da transação e data do processo tudo isso sendo salvo no Histórico, possui cadastro e login, usa local storage para salvar os dados.",
    },
    {
      id: 3,
      imagem:
        "https://i.pinimg.com/736x/db/c1/31/dbc1318f799988e3d8839231b2e5e92f.jpg",
      link: "https://enjels.github.io/Coffee-Shop/",
      text: "Coffe-shop criado apartir de uma referência do youtube CANAL: Danilo paixão.",
    },

    {
      id: 4,
      imagem:
        "https://i.pinimg.com/736x/06/2f/4f/062f4faf36c1c730e8037cbd77b87000.jpg",
      link: "https://enjels.github.io/Doritos/",
      text: "Site de doritos um dos primeiros projetos criado quando n tinha conhecimento em programação para usar ele como medida de evolução OBS: embreve uma nova versão melhorada.",
    },
    {
      id: 5,
      imagem:
        "https://i.pinimg.com/736x/95/4c/ee/954cee887f7a77d58e0c5bb62e5fa7d4.jpg",
      link: "https://enjels.github.io/relogio-digital/",
      text: "Relógio digital criado apartir de uma referencia no youtube.",
    },
    {
      id: 6,
      imagem:
        "https://i.pinimg.com/736x/1a/b4/ef/1ab4ef8a882dd49b5bb73788a196aaaf.jpg",
      link: "https://enjels.github.io/lading-page-treino-exclusivo",
      text: "Landing page, projeto criado apartir do curso da rocketseat, objetivo aplicar e consolidar conhecimento basicas estudads do html e css.",
    },
    {
      id: 7,
      imagem:
        "https://i.pinimg.com/736x/98/14/47/98144718b992bf509f3864aace65fc30.jpg",
      link: "https://enjels.github.io/formulario-Informacoes",
      text: "Formulário projeto criado apartir do curso da rocketseat, objetivo aplicar e consolidar conhecimento em criação de formularios.",
    },
    {
      id: 8,
      imagem:
        "https://i.pinimg.com/736x/52/46/6a/52466a0804d28db6eafba09fdc3db356.jpg",
      link: "https://enjels.github.io/login-cat/",
      text: "Projeto login-cat criado apartir de uma referência do youtube CANAL: Markzuel.",
    },

    {
      id: 9,
      imagem:
        "https://i.pinimg.com/736x/5c/87/73/5c877305897cc5f45b1edfe6b866d961.jpg",
      link: "https://enjels.github.io/responsivo-desktop-Mobile/",
      text: "Responsivo desktop Mobile.",
    },
    {
      id: 10,
      imagem:
        "https://i.pinimg.com/736x/c3/cd/3c/c3cd3c6dcda70b8671fb43bce8484916.jpg",
      link: "https://enjels.github.io/z-index-zoom/",
      text: "z-index-zoom.",
    },
    {
      id: 11,
      imagem:
        "https://i.pinimg.com/736x/40/dc/08/40dc08ab9b1978363efd27aded942052.jpg",
      link: "https://enjels.github.io/ambientes-unico/",
      text: "ambiente unico.",
    },
    {
      id: 11,
      imagem:
        "https://www.ccj.ufpb.br/dcx/contents/imagens/figuras/output_zvmmKf.gif/@@images/image.gif",
      link: "#",
      text: "",
    },
  ];
    return (
      <section id="projetos" className="section-pj">
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

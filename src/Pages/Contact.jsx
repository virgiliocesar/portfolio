import github from "../assets/image/contato/github.png";
import linkedin from "../assets/image/contato/linkedin.png";
import email from "../assets/image/contato/email.png";

const Contact = () => {
  return (
    <section className="section__container py-16 bg-gradient-to-b from-gray-50 to-white mt-14 mb-20.5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contato
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seção de Links de Contato */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Redes Sociais e Email
              </h3>

              {/* GitHub */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <img src={github} alt="GitHub" className="w-6 h-6" />
                </div>
                <a
                  href="https://github.com/virgiliocesar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  github.com/virgiliocesar
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                </div>
                <a
                  href="https://www.linkedin.com/in/virgilio-cesar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  linkedin.com/in/virgilio-cesar
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <img src={email} alt="Email" className="w-6 h-6" />
                </div>
                <a
                  href="mailto:virgilio_cesar.dev@outlook.com"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  virgilio_cesar.dev@outlook.com
                </a>
              </div>
            </div>
          </div>

          {/* Seção de Formulário de Contato */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Envie uma Mensagem
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="seuemail@exemplo.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Escreva sua mensagem..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import github from "../assets/image/contato/github.png";
import linkedin from "../assets/image/contato/linkedin.png";
import email from "../assets/image/contato/email.png";

const Contact = () => {
  return (
    <section className="section__container">
      <h2 className="text-3xl font-semibold text-center mb-10">Contato</h2>
      <div className="flex justify-center">
        <div className="space-y-4">
          {/* GitHub */}
          <div className="flex items-center space-x-4">
            <img src={github} alt="GitHub" className="w-8 h-8" />
            <a
              href="https://github.com/virgiliocesar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/virgiliocesar
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4">
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            <a
              href="https://www.linkedin.com/in/virgilio-cesar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/virgilio-cesar
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <img src={email} alt="LinkedIn" className="w-8 h-8" />
            <a
              href="https://www.linkedin.com/in/virgilio-cesar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              virgilio_cesar.dev@outlook.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

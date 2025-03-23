const Footer = () => {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 shadow-lg"></div>
      <div className="relative z-10 h-16 flex items-center justify-center text-white">
        <p className="text-sm">
          © {new Date().getFullYear()} Virgílio César. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
};

export default Footer;
import "./mockup.css";

const Mockup = () => {
  return (
    <div>
      mockup
      <div id="__next">
        {/* <div style="position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none"></div> */}
        <div>z
          <div className="w-full p-[100px] text-brand-beige bg-brand-coal">
            <div className="wrapper">
              <section className="display">
                <div className="mobile">
                  <div className="trim">
                    <iframe
                      id="mobile"
                      src="https://dev-burguer-dusky.vercel.app/"
                    ></iframe>
                  </div>
                </div>
                <div className="tablet">
                  <div className="trim">
                    <iframe
                      id="tablet"
                      src="https://dev-burguer-dusky.vercel.app/"
                    ></iframe>
                  </div>
                </div>
                <div className="laptop">
                  <div className="trim">
                    <iframe
                      id="laptop"
                      src="https://dev-burguer-dusky.vercel.app/"
                    ></iframe>
                  </div>
                </div>
                <div className="desktop">
                  <div className="trim">
                    <iframe
                      id="desktop"
                      src="https://dev-burguer-dusky.vercel.app/"
                    ></iframe>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockup;

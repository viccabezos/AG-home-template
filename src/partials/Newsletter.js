import React from "react";

function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative flex justify-center bg-blue-300 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Contactez-nous</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit nemo
                  expedita voluptas culpa sapiente.
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col space-y-2 justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input
                      type="email"
                      className="w-full appearance-none bg-blue-300 border border-white focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="Your email…"
                      aria-label="Your email…"
                    />
                    <input
                      type="message"
                      className="w-full appearance-none bg-blue-300 border border-white focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                      placeholder="message"
                      aria-label="Your email…"
                    />
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                      href="#0"
                    >
                      Envoyer
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

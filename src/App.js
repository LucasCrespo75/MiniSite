import * as FaIcon from "react-icons/fa";
import * as BsIcon from "react-icons/bs";
import * as AiIcon from "react-icons/ai";
import Logo from "./assets/images/LOGO.jpeg";

export default function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-[#ee9e86] to-[#f09ea8]">
      <main className="bg-gradient-to-r from-[#ee9e86] to-[#f09ea8]">
        <div className="p-4 m-auto max-w-2xl pt-20 pb-30 sm:pt-15">
          <div>
            <div>
              <button
                className="float-right -mt-10 mr-3"
                title="Compartilhar Site"
                onClick={() => {
                  navigator.share({
                    title: "B&B Brand",
                    text: "Veja esse novo site que eu Encontrei!!",
                    url: "https://brandnbrand.netlify.app/",
                  });
                }}>
                <BsIcon.BsShare className="text-white hover:scale-125 duration-300 text-[20px]" />
              </button>
              <img
                className="w-36 h-36 rounded-full mx-auto"
                src={Logo}
                alt="Logo"
              />
              <div className="space-y-2 ">
                <p className="mt-2 text-lg leading-9 text-white text-center text-2xl">
                  B&B Brand
                </p>
                <div className="space-y-8 ">
                  <h1 className="mt-1 text-center text-lg leading-6 text-white">
                    Aqui você adquire as melhores peças, conhece novos design's,
                    diferenciando e melhorando seu estilo. Tendo coleções
                    incriveis e incluindo você conosco.
                  </h1>
                  <div className="flex flex-col space-y-4 justify-center">
                    <a
                      title="Atendimento Barbara"
                      href="https://api.whatsapp.com/send/?phone=5581981498813&text=Que+bom+v%C3%AA-la+por+aqui%2C+em+que+posso+te+ajudar%3F&type=phone_number&app_absent=0"
                      className="text-lg text-center p-90 rounded-lg bg-pink-300 px-4 py-3
                                font-semibold leading-8 text-gray-600 shadow-block ring-1 ring-[#f7d1c6]
                                hover:ring-[#f7d1c6] h-14 bg-[#f7d1c6] hover:text-gray-700 hover:-translate-y-1 hover:scale-105
                                hover:bg-[#f7d1c6] duration-300">
                      Atendimento Barbara
                      <div className="-mt-6 flex justify-end">
                        <FaIcon.FaDirections />
                      </div>
                      <div className="-mt-5 -mt-5 flex justify-start">
                        <AiIcon.AiOutlineCustomerService />
                      </div>
                    </a>

                    <div className="flex flex-col space-y-4 sm:justify-center">
                      <a
                        title="Instagram"
                        href="https://www.instagram.com/bebbrand_/"
                        className="text-lg text-center p-90 rounded-lg bg-pink-300 px-4 py-3
                                  font-semibold leading-8 text-gray-600 shadow-block ring-1 ring-[#f7d1c6]
                                  hover:ring-[#f7d1c6] h-14 bg-[#f7d1c6] hover:text-gray-700 hover:-translate-y-1 hover:scale-105
                                  hover:bg-[#f7d1c6] duration-300">
                        Instagram
                        <div className="-mt-6 flex justify-end">
                          <FaIcon.FaDirections />
                        </div>
                        <div className="-mt-5 flex justify-start">
                          <BsIcon.BsInstagram />
                        </div>
                      </a>
                      <a
                        title="Grupo do WhatsApp B&B Brand"
                        href="https://chat.whatsapp.com/GDB6G1pBzYdFuWsbHIIHxP"
                        className="text-lg text-center p-90 rounded-lg bg-pink-300 px-4 py-3
                                  font-semibold leading-8 text-gray-600 shadow-block 
                                  h-14 bg-[#f7d1c6] hover:text-gray-700 hover:-translate-y-1 hover:scale-105
                                  hover:bg-[#f7d1c6] duration-300">
                        Grupo B&B Brand
                        <div className="-mt-5 flex justify-end">
                          <FaIcon.FaDirections />
                        </div>
                        <div className="-mt-6 flex justify-start">
                          <BsIcon.BsWhatsapp />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
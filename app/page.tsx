import Image from "next/image";
import back from "./public/back.jpg";
import person from "./public/male-music.png";
import { CardInfo } from "./components";

export default function Home() {
  return (
    <>
      <main>
        <div className=" relative bg-black w-full h-screen overflow-hidden">
          <Image
            src={back}
            alt="Imagem de Fundo"
            className="absolute w-full h-screen object-cover"
          ></Image>

          <div className="absolute bottom-0 bg-black/0 h-screen w-full flex flex-row justify-between">
            <div className=" basis-1/2 text-white  flex flex-col justify-center items-start ml-[5rem] ">
              <span className="leading-[5.5rem] text-[7rem] ">
                Som sem limites.
              </span>
              <span>A experiência mágica da música aqui.</span>
              <div className="flex flex-row bg-black space-x-2 mt-5">
                <CardInfo dadoNumerico={1.5} titulo="Assinantes ativos" />
                <CardInfo dadoNumerico={10} titulo="Artistas" />
                <CardInfo dadoNumerico={3} titulo="Playlists" />
              </div>
            </div>

            <div className="relative basis-1/2  static w-full h-full object-cover">
              <Image
                src={person}
                alt="Pessoa Ouvindo Musica"
                width={550}
                className="absolute bottom-0 right-0 shadow-lg mix-blend-plus-darker contrast-100"
              />
              <div className=" absolute w-[20rem] h-[20rem] bg-purple-900/50 blur-2xl bottom-0  flex rounded-full mix-blend-plus-lighter"></div>
              <div className=" absolute w-[20rem] h-[20rem] bg-yellow-400/20 blur-2xl top-0 right-0 flex rounded-full  mix-blend-plus-lighter"></div>

              
            </div>
          </div>
        </div>
        <div className="bg-stale-300 w-full h-screen text-black ">
          
        </div>
      </main>
    </>
  );
}

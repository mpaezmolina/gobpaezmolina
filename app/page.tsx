import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-2 pb-4 px-4 lg:pt-8 lg:pb-24 lg:px-24 bg-[#060b14]">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>

      <div className="relative w-full lg:w-auto">
        
        <Image
          className="relative w-full lg:w-auto"
          src="/gob.jpg"
          alt="Gobernador de Córdoba"
          width={1000}
          height={37}
          priority
        />
      </div>
      <hr className="border-1 border-gray-400 w-40 m-10" />
      <p className="left-0 top-0 flex w-full text-center justify-center border-b border-gray-300 bg-gradient-to-b from-white via-zinc-100 to-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-700/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-white lg:p-4 lg:dark:bg-zinc-700/30">
        Gobernador Justo Páez Molina. Nació en El Salto, el 7 de agosto de 1902. Político radical argentino y 52º Gobernador de Córdoba.
        <br/>
        Este sitio crecerá en contenido con el tiempo. Viene mucho mas, pronto.
      </p>

      <div className="flex flex-row justify-center items-center gap-8 w-full max-w-md my-8">
        <div className="flex-1 flex justify-center">
        <a 
          href="https://es.wikipedia.org/wiki/Justo_P%C3%A1ez_Molina" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity"
        >

          <Image
            src="/wik.png"
            alt="Imagen 1"
            width={60}
            height={60}
            className="rounded"
          />
          </a>
        </div>
        <div className="flex-1 flex justify-center">
        <a 
          href="https://www.instagram.com/justo.paez.molina/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity"
        >

          <Image
            src="/instagram.png"
            alt="Imagen 2"
            width={60}
            height={60}
            className="rounded"
          />
          </a>
        </div>
      </div>
    </main>
  );
}

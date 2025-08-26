import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-24 bg-[#060b14]">
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
      </p>

      <div className="mt-6 mb-8">
        <a 
          href="https://www.instagram.com/justo.paez.molina/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </a>
      </div>
    </main>
  );
}

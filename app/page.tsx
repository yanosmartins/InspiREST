export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-900 text-slate-100">
      <header className="flex items-center justify-between px-15 py-4 bg-slate-900/80 backdrop-blur-md w-full">

        <div className="flex-1 text-left">
          <a href="#doc" className="text-sm font-medium text-slate-400 hover:text-purple-400 transition-colors">
            Documentação
          </a>
        </div>

        <div className="flex-initial text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-purple-400">
            Inspirest
          </h1>
        </div>

        <div className="flex-1 text-right">
          <button className="text-sm font-medium bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-lg transition-colors">
            Menu 
          </button>
        </div>
      </header>
      <section className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="text-center bg-slate-800/40 border border-slate-700/40 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full">
          <p className="text-lg text-slate-300 italic">
            "O sucesso é a soma de pequenos esforços repetidos dia após dia."
          </p>
          <span className="block text-sm text-purple-400 mt-4 font-semibold">
            — Robert Collier
          </span>
        </div>
      </section>
    </main>
  );
}
const Navbar = () => {
  return (
    <header className="mt-2 py-3 container mx-auto px-40 grid w-full grid-cols-3 justify-between  rounded-2xl shadow-lg shadow-gray-50/10 border-2 border-white/20">
      <div>
        <h1 className="text-xl tracking-wider font-bold">TaTeTi - Tailwind</h1>
      </div>
      <div className="text-center">
        <a href="https://github.com/marcosarias21" target="blank">Mas Proyectos
        </a>
      </div>
      <div className="text-end flex gap-4">
      <a href="https://github.com/marcosarias21" target="blank">
        <svg className="w-6 h-6 text-white transition-transform hover:scale-150" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/> <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>        
      </a>
      <a href="https://www.linkedin.com/in/marcos-ar/"    target="blank">
        <svg className="w-6 h-6 bg-blue-900 px-1 rounded transition-transform hover:scale-150" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /> <rect x="2" y="9" width="4" height="12" /> <circle cx="4" cy="4" r="2" /></svg>       
      </a>
     </div>
    </header>
  )
}

export default Navbar
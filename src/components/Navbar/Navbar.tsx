const Navbar = () => {
  return (
    <header className="mt-2 py-3 container mx-auto px-40 grid w-full grid-cols-3 justify-between  rounded-2xl shadow-lg shadow-gray-50/10 border-2 border-white/20">
      <div>
        <h1 className="text-xl tracking-wider font-bold">TaTeTi - Tailwind</h1>
      </div>
      <div className="text-center">
        <a href="">Mas Proyectos</a>
      </div>
      <div className="text-end">
        GitHub
        Linkedin
      </div>
    </header>
  )
}

export default Navbar
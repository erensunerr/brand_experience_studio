import {useState} from 'react'

const links = [
  {
    label: "Design",
    url: "/design",
  },
  {
    label: "Strategy",
    url: "/strategy",
  },
  {
    label: "Cases",
    url: "/cases",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Why work with us?",
    url: "/why",
  }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="container p-6 mx-auto flex justify-between mt-6 font-semibold text-sm items-baseline">
      <div className="font-bold text-3xl">Ollie</div>
      {/* Desktop nav */}
      <nav className="hidden md:block lg:space-x-4">
        {
          links.map(
            (link, id) => <a href={link.url} key={id} className="p-2 md:p-4">{link.label}</a>
          )
        }
      </nav>
      <div className="hidden md:block">
        <a href="/contact" className="p-2 border-neutral-800 border-b-2">Let's work together</a>
      </div>

      {/* Hamburger */}
      <div className="block md:hidden">

        <button className="px-2" onClick={() => setIsMenuOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
      {/* Menu open */}
      <div className={`${isMenuOpen ? "fixed" : "hidden"} bg-neutral-900 inset-y-0 right-0 w-2/3 flex justify-center items-center`}>
        <button className="p-2 absolute top-10 right-6 text-neutral-100" onClick={
          () => setIsMenuOpen(false)
          }>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="text-neutral-100 flex flex-col space-between-2 gap-2">
          {
            links.map(
              (link, id) => <a href={link.url} key={id} className="p-4">{link.label}</a>
            )
          }
          <a href="/contact" className="p-4 bg-neutral-100 text-neutral-900">Let's work together</a>
        </nav>
      </div>
    </header>
)
}


export default Header;

import { NavLink, Link } from "react-router-dom"
import React from "react"
import { Navbar, Collapse, Typography, Button, IconButton } from "@material-tailwind/react"

import orcaLogo from "../assets/logos/orca.png"

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false))
  }, [])

  const navList = (
    // flex items-center rounded-full px-2 hover:bg-black hover:text-white
    <ul className="mr-48 flex flex-col gap-2 rounded-full px-2 py-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:bg-white/70">
      
    </ul>
  )

  return (
    <Navbar className="bg-glass-100 fixed z-50 h-24 min-w-full border-none bg-transparent px-4 py-2 shadow-none lg:px-8 lg:py-4">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img className="w-24 lg:ml-24" src={orcaLogo}></img>
        </Link>

        <div className="hidden lg:block">{navList}</div>
        <Link to="/login" className="-ml-48">
          <Button variant="gradient" size="sm" className="hidden text-base lg:inline-block">
            <span>Log in</span>
          </Button>
        </Link>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <div className="flex justify-center rounded-xl bg-black p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          ) : (
            <div className="flex justify-center rounded-xl bg-black p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 items-center"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          )}
        </IconButton>
      </div>
      
    </Navbar>
  )
}

export default NavbarDefault
const Nav = () => {
  return (
    <header className="bg-white bg-opacity-5 text-black shadow-lg">
      <div className="container mx-auto flex items-center h-24 justify-between">
        <a href="#" className="flex items-center justify-center">
          {/*image*/}
          <span className="ml-4 uppercase font-black">A Plus Taylor&apos;s Martial Arts and Fitness</span>
        </a>
        <nav className="contents font-semibold text-base lg:text-lg hidden md:block">
          <ul className="mx-auto flex item-center">
            <li className="p-5 xl:p-8 active">
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li className="p-5 xl:p-8 active">
              <a href="#">
                <span>Classes</span>
              </a>
            </li>
            <li className="p-5 xl:p-8 active">
              <a href="#">
                <span>Schedule</span>
              </a>
            </li>
            <li className="p-5 xl:p-8 active">
              <a href="#">
                <span>About Us</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="md:hidden sm:block">
        </nav>
        <button className="border border-black rounded-full font-bold px-8 py-2 hidden md:block">
          Sign Up
        </button>
      </div>
    </header>
  )
}

export default Nav;

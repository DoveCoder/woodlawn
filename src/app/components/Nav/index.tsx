import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.jpg";

const Nav = () => {
  return (
    <header className="bg-white bg-opacity-5 text-black shadow-lg">
      <div className="container mx-auto flex items-center h-24 justify-between">
        <a href="#" className="flex items-center justify-center ml-7">
          <Image src={logo} alt={'karate gym logo'} width={75}/>
          {/*<span className="ml-4 uppercase font-black">A Plus Taylor&apos;s Martial Arts and Fitness</span>*/}
        </a>
        <nav className="contents font-semibold text-base lg:text-lg hidden md:block">
          <ul className="mx-auto flex item-center">
            <li className="p-5 xl:p-8 active">
              <a href={'/'}>
                <span>Home</span>
              </a>
            </li>
            <li className="p-5 xl:p-8 active">
              <a href={'/classes'}>
                <span>Classes</span>
              </a>
            </li>
            <li className="p-5 xl:p-8 active">
              <Link href={'/schedule'}>
                <span>Schedule</span>
              </Link>
            </li>
            <li className="p-5 xl:p-8 active">
              <a href={'/about'}>
                <span>About Us</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="md:hidden sm:block flex justify-end mx-3.5">
          <ul>
            <li className="border border-gray-700 rounded-lg px-7 text-lg">Menu</li>
          </ul>
        </nav>
        {/*<button className="border border-black rounded-full font-bold px-8 py-2 hidden md:block">*/}
        {/*  Sign Up*/}
        {/*</button>*/}
      </div>
    </header>
  )
}

export default Nav;

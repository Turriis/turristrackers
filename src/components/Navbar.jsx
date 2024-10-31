const Navbar = () => {
  return (
    <header>
      <nav className="flex mx-auto justify-between items-center p-2 bg-main-color text-red-600 text-4xl">
        <div className="md:min-h-fit min-h-[60vh] left-0 top-[9%] md:w-auto w-full items-center px-5">
          <ul className="md:static flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-12 mx-9 md: justify-end">
          <img src="logo.png" alt="" className="container mx-9 md:h-40 h-72 pr-10"/>
            <li className="hover:text-gray-500 md:text-justify text-center md:pl-96">Cases</li>
            <li className="hover:text-gray-500 md:text-justify text-center">Prices</li>
            <li className="hover:text-gray-500 md:text-justify text-center">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
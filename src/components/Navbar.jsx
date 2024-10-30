const Navbar = () => {
  return (
    <header>
      <nav className="flex mx-auto justify-between items-center p-2 bg-main-color text-red-600 text-4xl">
      <img src="logo.png" alt="" className="flex mx-9 h-40"/>
        <div>
          <ul className="flex flex-row items-center gap-[4vw] mx-9">
            <li className="hover:text-gray-500">Cases</li>
            <li className="hover:text-gray-500">Prices</li>
            <li className="hover:text-gray-500">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

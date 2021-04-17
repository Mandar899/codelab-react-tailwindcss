import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const btn = document.querySelector(".mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);
  return (
    <div className="p-8">
      <nav className="bg-gray-50 h-15 top-0 fixed inset-x-0">
        <div className="max-w-7xl mx-auto px-6">
          {/* logo */}
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-3 text-blue-800"
                >
                  <svg
                    className="h-8 w-8 mr-2 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span className="font-inter font-bold text-lg">CodeLab</span>
                </a>
              </div>

              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className=" py-5 px-2 text-blue-600 font-inter font-bold hover:text-blue-900"
                >
                  Catalog
                </a>
                <a
                  href="#"
                  className=" py-5 px-3 text-blue-600 font-inter font-bold hover:text-blue-900"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className=" py-5 px-3 text-blue-600 font-inter font-bold hover:text-blue-900"
                >
                  Pro Pricing
                </a>
                <a
                  href="#"
                  className=" py-5 px-3 text-blue-600 font-inter font-bold hover:text-blue-900"
                >
                  For Business
                </a>
              </div>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="font-inter font-bold py-2 px-3 rounded-sm text-blue-700 hover:bg-gray-100 hover:shadow-sm"
              >
                Login
              </a>
            </div>
            <div className="md:hidden flex items-center space-x-3 text-blue-800">
              <a
                href="#"
                className="font-inter font-bold py-2 px-3 rounded-sm text-blue-700 hover:bg-gray-100 hover:shadow-sm"
              >
                Login
              </a>
              <button className="mobile-menu-button focus:outline-none">
                <svg
                  className=" w-6 h-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div className="absolute top-14 left-0 right-0  mobile-menu hidden md:hidden bg-gray-50">
          <a
            href="#"
            className="block  py-4 px-4 text-md font-inter font-bold text-blue-600 hover:bg-gray-100 rounded-sm hover:text-blue-900"
          >
            Catalog
          </a>
          <a
            href="#"
            className="block  py-4 px-4 text-md font-inter font-bold text-blue-600 hover:bg-gray-100 rounded-sm hover:text-blue-900"
          >
            Resources
          </a>
          <a
            href="#"
            className="block  py-4 px-4 text-md font-inter font-bold text-blue-600 hover:bg-gray-100 rounded-sm hover:text-blue-900"
          >
            Pro Pricing
          </a>
          <a
            href="#"
            className="block  py-4 px-4 text-md font-inter font-bold text-blue-600 hover:bg-gray-100 rounded-sm hover:text-blue-900"
          >
            For Business
          </a>
          <div className="flex flex-col items-center justify-center">
            <button className="mt-2 mb-3 py-2 px-3 font-inter font-bold bg-indigo-700 shadow-md text-white rounded-sm hover:bg-blue-300 hover:text-blue-900">
              SignUp
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

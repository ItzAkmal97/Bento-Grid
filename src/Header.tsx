import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-4 px-4 bg-gray-100">
      <nav className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-3xl font-bold">snap</a>
          </div>

          {/* Hamburger Menu Input (hidden) */}
          <input type="checkbox" id="nav-toggle" className="hidden peer" />
          <label htmlFor="nav-toggle" className="flex flex-col justify-center w-8 h-8 space-y-1.5 cursor-pointer md:hidden">
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
          </label>

          {/* Navigation Links */}
          <div className="fixed inset-y-0 right-0 w-64 bg-gray-100 shadow-lg transform translate-x-full 
                          peer-checked:translate-x-0 transition-transform duration-300 ease-in-out
                          md:static md:transform-none md:shadow-none md:w-auto md:flex md:items-center">
            <ul className="flex flex-col p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-8">
              <li className="group relative">
                <button className="flex items-center text-gray-500 hover:text-gray-900">
                  Features
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </li>
              <li className="group relative">
                <button className="flex items-center text-gray-500 hover:text-gray-900">
                  Company
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </li>
              <li>
                <a href="/careers" className="text-gray-500 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-500 hover:text-gray-900">
                  About
                </a>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="mt-4 flex flex-col space-y-2 p-4 border-t md:border-0
                          md:flex-row md:space-y-0 md:space-x-4 md:mt-0 md:ml-8">
              <button className="px-4 py-2 text-gray-500 hover:text-gray-900">
                Login
              </button>
              <button className="px-4 py-2 border-2 border-gray-900 rounded-lg 
                               hover:bg-gray-900 hover:text-white transition-colors">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
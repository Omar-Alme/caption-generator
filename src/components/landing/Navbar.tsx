export default function Navbar() {
    return (
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/70 backdrop-blur-sm rounded-full px-8 py-3 space-x-6 hidden md:flex">
        <a href="#" className="text-white hover:text-gray-400">
          Resources
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          Pricing
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          Blog
        </a>
      </nav>
    );
  }
  
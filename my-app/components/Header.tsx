import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Handcrafted Haven
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-300">Shop</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

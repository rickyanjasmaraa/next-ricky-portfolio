import { Span } from "next/dist/trace";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-white mr-1">Ricky</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .AJM
          </span>
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="">2</div>
    </div>
  );
};

export default Navbar;

import Link from 'next/link'; // Importing Link from next/link

const Navbar = () => {
  return (
    <div className="bg-[#FBEBB5] w-[1440px] h-[100px] flex justify-between items-center">

      {/* Navbar Links */}
      <span className="text-[#000000] w-[430px] h-[24px] mt-[10px] ml-[505px] flex justify-center items-center space-x-10">
        <Link href="/home" className="text-xl">Home</Link>
        <Link href="/shop" className="text-xl">Shop</Link>
        <Link href="/about" className="text-xl">About</Link>
        <Link href="/contact" className="text-xl">Contact</Link>
      </span>



    </div>
  );
};

export default Navbar;
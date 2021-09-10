import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.svg";
import { List } from "react-bootstrap-icons";
function navbar2() {
  return (
    <>
      <div className="bg-white border-b">
        <div className="">
          <div className="flex  justify-between items-center  px-5 py-3">
            <div>
              <Link href="/">
                <a>
                  <Image src={Logo} alt="logo" width="150" />
                </a>
              </Link>
            </div>
            <div>
              <button className="focus:outline-none block lg:hidden">
                <List size={30} />
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {/* 2 border-b-2 border-indigo-600 */}
              <Link href="login">
                <a className="py-4 px- text-black font-semibold hover:text-blue-900 transition duration-300">
                  Login
                </a>
              </Link>
              <Link href="register">
                <a className="py-4 px-2 text-black font-semibold hover:text-blue-900 transition duration-300">
                  Register
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default navbar2;

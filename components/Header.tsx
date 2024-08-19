import Image from "next/image";
import Link from "next/link";
// config
import config from "@/config/general";

const Header = () => {
  return (
    <header className="flex-col sm:flex-row flex justify-between items-start">
      <Image src={"/apple-style-logo.svg"} width={180} height={60} alt={config.title} priority />
      <nav>
        <ul className="flex sm:mt-0 mt-4 items-center lg:gap-7 gap-3 font-normal text-base sm:text-lg">
          <li className="text-black">
            <Link href={config.socials.twitter} passHref legacyBehavior>
              <a
                className="px-5 py-2 text-appleGray hover:text-black transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

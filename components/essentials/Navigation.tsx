import Image from "next/image";
import Link from "next/link";


type NavigationBarLinkProps = {
  linkTo: string;
  icon: string;
  alt: string;
};

function NavigationBarLink({ linkTo, icon, alt }: NavigationBarLinkProps) {
  return (
    <li>
      <Link href={linkTo}>
        <Image src={icon} alt={alt} width={30} height={30} />
      </Link>
    </li>
  );
}

export default function Navigation() {
  return (
    <nav className="fixed right-20 top-1/2 -translate-y-1/2">
      <ul className="bg-gray-600 w-fit h-fit rounded-full px-5 py-10 space-y-4">
        <NavigationBarLink linkTo="#home" icon="home-icon.svg" alt="Home" />
        <NavigationBarLink linkTo="#about" icon="user-icon.svg" alt="About me" />
        <NavigationBarLink linkTo="#projects" icon="grid-icon.svg" alt="Projects" />
        <NavigationBarLink linkTo="#reviews" icon="comment-icon.svg" alt="Reviews" />
        <NavigationBarLink linkTo="#contact" icon="email-icon.svg" alt="Contact me" />
      </ul>
    </nav>
  );
}

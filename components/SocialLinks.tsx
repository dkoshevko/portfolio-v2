import Image from "next/image";
import Link from "next/link";


type SingleSocialLinkProps = {
  linkTo: string;
  logo: string;
  alt: string;
};

function SingleSocialLink({ linkTo, logo, alt }: SingleSocialLinkProps) {
  return (
    <li>
      <Link href={linkTo} target="blank">
        <Image src={logo} alt={alt} width={50} height={50} />
      </Link>
    </li>
  );
}

export default function SocialLinks() {
  // ADD STICKY HOVER EFFECT
  return (
    <ul className="flex">
      <SingleSocialLink
        linkTo="https://www.linkedin.com/in/denys-koshevko"
        logo="linkedin-logo.svg"
        alt="LinkedIn"
      />
      <SingleSocialLink
        linkTo="https://www.malt.fr/profile/denyskoshevko"
        logo="malt-logo.svg"
        alt="Malt"
      />
      <SingleSocialLink
        linkTo="https://github.com/dkoshevko"
        logo="github-logo.svg"
        alt="GitHub"
      />
    </ul>
  );
}

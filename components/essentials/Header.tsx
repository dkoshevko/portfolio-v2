import SocialLinks from "./SocialLinks";
import { headingFont } from "@/fonts/fonts";


export default function Header() {
  return (
    <header className="w-full h-28">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <h1
            className={`${headingFont.className} uppercase text-5xl text-white font-light`}
          >
            <span className="font-medium">Denys</span> Koshevko
          </h1>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
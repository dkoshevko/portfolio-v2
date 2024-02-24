import { headingFont } from "@/fonts/fonts";
import { ButtonLink } from "../essentials/Button";

export default function HomeSection() {
  return (
    <section id="home" className="h-screen">
      <div className="h-full flex flex-col justify-center">
        <div className="w-1/3 space-y-2 mb-14">
          <h2
            className={`${headingFont.className} uppercase text-3xl font-medium`}
          >
            Lorem ipsum dolor sit
            <br />
            <span className="text-yellow-400">
              amet consectetur adipisicing
            </span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            reiciendis neque beatae recusandae quis iste non consectetur eveniet
            ratione nisi, ipsam in eum maiores, tempora fugit laboriosam cumque
            unde voluptas!
          </p>
        </div>
        <ButtonLink clicPath="#projects" text="My projects" />
      </div>
    </section>
  );
}

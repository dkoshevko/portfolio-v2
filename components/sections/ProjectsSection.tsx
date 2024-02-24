import { headingFont } from "@/fonts/fonts";
import Image from "next/image";
import Button from "../essentials/Button";

export default function ProjectsSection() {
  return (
    <section id="projects" className="h-screen">
      <div className="h-full flex justify-center items-center">
        <div className="flex justify-start gap-14">
          <div className="project-shadow rounded-md shadow-yellow-400">
            <Image src="user-icon.svg" alt="" width={500} height={500} />
          </div>
          <div className="w-1/3 space-y-10">
            <div className="space-y-2">
              <h2
                className={`${headingFont.className} uppercase text-3xl font-medium text-yellow-400`}
              >
                My project
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae reiciendis neque beatae recusandae quis iste non
                consectetur eveniet ratione nisi, ipsam in eum maiores, tempora
                fugit laboriosam cumque unde voluptas!
              </p>
            </div>
            <div className="space-y-10">
              <h3
                className={`${headingFont.className} uppercase text-xl font-semibold`}
              >
                Technologies
              </h3>
              <span>React, SASS</span>
              <Button clicPath="" text="Live project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

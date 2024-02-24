import { headingFont } from "@/fonts/fonts";

export default function AboutSection() {
  return (
    <section id="about" className="h-screen">
      <div className="h-full flex flex-col justify-center">
        <div className="w-1/3 space-y-2 mb-14">
          <h2
            className={`${headingFont.className} uppercase text-3xl font-medium`}
          >
            About
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
      </div>
    </section>
  );
}

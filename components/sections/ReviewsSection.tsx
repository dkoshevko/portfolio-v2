import { headingFont } from "@/fonts/fonts";
import Image from "next/image";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="h-screen">
      <div className="h-full flex flex-col justify-center items-center gap-10">
        <h2
          className={`${headingFont.className} uppercase text-3xl font-medium`}
        >
          What clients say
        </h2>
        <div className="w-2/3 flex flex-col rounded-md border-2 border-yellow-400 p-8">
          <Image
            src="quote-icon.svg"
            alt="quotemark"
            width={45}
            height={45}
            className="rotate-180"
          />
          <p className="text-lg px-14">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            mollitia alias maxime porro dolorum. Neque consequuntur dolorum
            veniam reiciendis aliquam placeat tenetur reprehenderit recusandae,
            quidem corrupti id incidunt veritatis fugit!
          </p>
          <Image
            src="quote-icon.svg"
            alt="quotemark"
            width={45}
            height={45}
            className="self-end"
          />
          <span className="self-center mt-10">Lorem Ipsum</span>
        </div>
      </div>
    </section>
  );
}

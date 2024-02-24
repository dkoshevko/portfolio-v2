import { headingFont } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { ButtonForm } from "../essentials/Button";

type ContactCardProps = {
  icon: string;
  title: string;
  adress: string;
  href: string;
  action: string;
};

function ContactCard({ icon, title, adress, href, action }: ContactCardProps) {
  return (
    <div className="flex flex-col items-center bg-gray-600 rounded-xl p-4">
      <Image src={icon} alt="Email icon" width={30} height={30} />
      <span className="text-lg font-semibold">{title}</span>
      <span>{adress}</span>
      <Link href={href} className="text-yellow-400 mt-10">
        {action}
      </Link>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="h-screen">
      <div className="h-full flex justify-center items-center gap-32">
        <div className="w-1/4 space-y-10">
          <ContactCard
            icon="email-icon.svg"
            title="Email"
            adress="dkoshevko@gmail.com"
            href="mailto:dkoshevko@gmail.com"
            action="Send a message"
          />
          <ContactCard
            icon="cv-icon.svg"
            title="Curriculum vitæ"
            adress=""
            href=""
            action="Download CV"
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <h2
            className={`${headingFont.className} uppercase text-3xl font-medium`}
          >
            Contact me
          </h2>
          <form action="" method="post" className="flex flex-col gap-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your full name"
              required={true}
              className="bg-gray-800 text-gray-100 rounded-md border-2 border-yellow-400 p-2 focus:outline-none focus:ring focus:ring-yellow-400"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              required={true}
              className="bg-gray-800 text-gray-100 rounded-md border-2 border-yellow-400 p-2 focus:outline-none focus:ring focus:ring-yellow-400"
            />
            <textarea
              name=""
              id=""
              rows={6}
              placeholder="Your Message"
              required={true}
              className="bg-gray-800 text-gray-100 rounded-md border-2 border-yellow-400 p-2 focus:outline-none focus:ring focus:ring-yellow-400"
            ></textarea>
            <ButtonForm text="Send message" />
          </form>
        </div>
      </div>
    </section>
  );
}

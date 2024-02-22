import ScrollLink from "./ScrollLink";

type ButtonProps = {
  clicPath: string;
  text: string;
};

export default function Button({ clicPath, text }: ButtonProps) {
  return (
    <div className="mt-3">
      <ScrollLink
        href={clicPath}
        className="
          border-2 border-yellow-400 text-yellow-400 font-medium rounded-md py-3 px-6 z-10 relative duration-300 
          after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:-z-10 after:bg-yellow-400 after:transition-all after:ease-in-out after:duration-300 
          hover:text-gray-800 
          hover:after:left-0 hover:after:w-full
        "
      >
        {text}
      </ScrollLink>
    </div>
  );
}

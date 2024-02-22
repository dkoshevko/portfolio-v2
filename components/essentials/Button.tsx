import Link from "next/link";


type ButtonProps = {
  clicPath: string;
  text: string;
};

export default function Button({ clicPath, text }: ButtonProps) {
  return (
    <div className="mt-3">
      <Link
        href={clicPath}
        className="border-2 border-yellow-400 text-yellow-400 rounded-lg py-3 px-6"
      >
        {text}
      </Link>
    </div>
  );
}

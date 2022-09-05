import Image from "next/image";

interface Props {
  packshot: string;
}

function Packshot({ packshot }: Props) {
  return (
    <div className="flex items-center justify-center border rounded-md bg-secondary border-borderSecondary h-packshot w-packshot">
      <Image
        alt="packshot"
        priority
        src={require(`../public/assets/${packshot}.svg`)}
      />
    </div>
  );
}

export default Packshot;

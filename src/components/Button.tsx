export const Button = ({ label, handleClick }: ButtonProps) => {
  return (
    <button className="bg-primary h-12 text-white font-bold font-secondaryFont text-fontXS rounded-radiusXs" onClick={handleClick}>
      <span className="mx-16">{label}</span>
    </button>
  );
};
interface ButtonProps {
  label: String;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

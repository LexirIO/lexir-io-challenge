import { BiUserCircle, BiShoppingBag } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { BsBoxSeam, BsPlusLg } from "react-icons/bs";

export const User = ({ className }) => {
  return <BiUserCircle className={className} />;
};

export const ShoppingBag = ({ className }) => {
  return <BiShoppingBag className={className} />;
};

export const Location = ({ className }) => {
  return <GrLocation className={className} />;
};

export const CardBoardBox = ({ className }) => {
  return <BsBoxSeam className={className} />;
};

export const Add = ({ className }) => {
  return <BsPlusLg className={className} />;
};

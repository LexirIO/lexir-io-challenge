import { useState } from "react";


export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen)

  return (
    <div 
      className="space-y-2"
      onClick={menuHandler}
    >
      <span className="block w-8 h-0.5 bg-gray-600"></span>
      <span className="block w-8 h-0.5 bg-gray-600"></span>
      <span className="block w-5 h-0.5 bg-gray-600"></span>
    </div>
  )
}

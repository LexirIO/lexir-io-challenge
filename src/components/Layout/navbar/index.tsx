import Image from 'next/image';
import LogoImg from 'src/assets/imgs/logo.svg';
import CartIco from 'src/assets/icons/cartico.svg';

const NavBar = () => {
    return (
        <div className="p-10 mx-auto bg-white rounded-xl shadow-md flex items-center justify-between">
            <div className="flex shrink-0">
                <Image className="w-26 h-6" src={LogoImg} alt="logo" />
            </div>
            <div className="flex items-center space-x-10 uppercase">
                <span>Products</span>
                <span>Brands</span>
                <span>Hello, Leandro</span>
                <div className="flex flex-center"> 
                    <Image className="w-6 h-6" src={CartIco} alt="cartico" />
                    <span>cart</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
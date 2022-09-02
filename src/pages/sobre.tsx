import Image from "next/image";

const Sobre = () => {
    return (
        <div>
            <Image src="/test.png" 
                alt="teste" 
                width={500}
                height={500}
                priority />
        </div>
    )
}

export default Sobre;
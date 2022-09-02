import { Brand, Category } from "src/Models";
import baldorianLogo from "../assets/images/Brands/baldoriaLogo.png";
import novoFogoLogo from "../assets/images/Brands/novoFogo.png";

const baldoria = {
    id: 1,
    name: "Baldoria",
    fullName: "Baldoria Vermounth",
    logo: baldorianLogo,
    description: "Badoria rosso is a red vermouth that balances fresh, herby bitter notes against. Kiss My Rhubarb takes its origins from an old handwritten recipe from co-creators Niels’ and Wouters’ rebellious grandparents.",
    location: "London, United Kindom",
    categories: [Category.Gin, Category.Vodka],
}
const novoFogo = {
    id: 2,
    name: "novoFogo",
    fullName: "Novo Fogo",
    logo: novoFogoLogo,
    description: "100%-organic, zero-waste cachaças from the Brazilian rainforest that are made with the best ingredients and the best quality.",
    location: "Morretes, Brazil",
    categories: [Category.Cachaca],
}

function getBrandByName(name: string): Brand{
    if(name == "novoFogo"){
        return novoFogo
    }else{
        return baldoria
    }
}
function getAllBrands(): Brand[]{
    return [baldoria, novoFogo]
}

export default {getBrandByName, getAllBrands}
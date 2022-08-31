// This is a fake api for testing purposes

//Import Baldoria images
import branneri from "../assets/images/Products/branneri.jpg";
import gaston from "../assets/images/Products/gaston.jpg";
import silentPool from "../assets/images/Products/silentPool.jpg";
import umami from "../assets/images/Products/umami.jpg";
import { Category, Product } from "src/Models";

// Import novoFogo images
import chameleon from "../assets/images/Products/chameleon1.jpg";
import tanager from "../assets/images/Products/tanager1.jpg";
import barrelAged from "../assets/images/Products/barrelAged1.jpg";
import silver from "../assets/images/Products/silver1.jpg";
 

const baldoriaProducts =
    [
        {
            id: 1,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: umami,
        }, {
            id: 2,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: silentPool,
        }, {
            id: 3,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: branneri,
        }, {
            id: 4,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: gaston,
        },
        // second
        {
            id: 5,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: umami,
        }, {
            id: 6,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: silentPool,
        }, {
            id: 7,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: branneri,
        }, {
            id: 8,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: gaston,
        },
        // third
        {
            id: 9,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: umami,
        }, {
            id: 10,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: silentPool,
        }, {
            id: 11,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: branneri,
        }, {
            id: 12,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: gaston,
        },
        // fourth
        {
            id: 13,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: umami,
        }, {
            id: 14,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: silentPool,
        }, {
            id: 15,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: branneri,
        }, {
            id: 16,
            name: "gaston",
            fullName: "MR GASTON",
            price: 32,
            category: Category.Brandy,
            image: gaston,
        }
    ]
const novoFogoProducts =[
    {
        id: 1,
        name: "chameleon",
        fullName: "Chameleon",
        price: 41,
        category: Category.Cachaca,
        image: chameleon,
    },
    {
        id: 2,
        name: "tanager",
        fullName: "Tanager",
        price: 49,
        category: Category.Cachaca,
        image: tanager,
    },
    {
        id: 3,
        name: "barrelAged",
        fullName: "Barrel-Aged",
        price: 48,
        category: Category.Cachaca,
        image: barrelAged,
    },
    {
        id: 4,
        name: "silver",
        fullName: "Silver",
        price: 36,
        category: Category.Cachaca,
        image: silver,
    },
]

function getProductsByBrand(name: string): Product[] {
    if(name == "novoFogo"){
        return novoFogoProducts
    }else{
        return baldoriaProducts
    }
}

export default { getProductsByBrand }
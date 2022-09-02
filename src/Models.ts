export const enum Category {
    Gin = "Gin", Vodka = "Vodka", Brandy = "Brandy", Cachaca ="Cachaça"
}

export interface Brand{
    id: number;
    name: string;
    fullName: string;
    logo: any;
    description: string;
    location: string;
    categories: Category[];
}

export interface Product{
    id: number;
    name: string;
    fullName: string;
    price: number;
    image: any;
    category: Category;
}

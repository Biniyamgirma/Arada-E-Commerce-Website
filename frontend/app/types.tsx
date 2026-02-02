export interface NavItem{
    label:string;
    href:string;
    icon?:string;
    children?:NavItem[];
}

export interface Product{
     id: number
    name: string,
    category: string,
    price: string,
    image: string
}
export interface IinitialState{
    categories: Icategory[],
    billboard : Ibillboard | null ,
    products : Iproducts[],
    product: Iproducts | null,
    cartProducts : Iproducts[] ,
    openSidebar : boolean,
    searchProducts : Iproducts[],
    brands : Ibrand[],
    filteredProducts:[],
}
export interface Ibrand{
    name:string,
    id:string,
    storeId:string,
}
export interface Icategory{
    name:string,
    billboardId:string,
    createdAt:string,
    id:string,
    storeId:string,
}
export interface Ibillboard{
    label: string,
    images : {
        url:string
    }[],
    id: string,
    storeId : string,
    createdAt : string
}
export interface Iproducts{
    images : {
        url:string
    }[] ,
    id:string,
    name:string,
    colorId:string,
    size:string,
    categoryId: string,
    price:number,
    isFeatured : boolean,
    isArchived : boolean,
    date : string,
    description: string[],
    ratings: number,
    brandId:string,
}

export interface IinitialState{
    categories: Icategory[],
    billboard : Ibillboard | null ,
    products : Iproducts[],
    product: Iproducts | null,
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
    imageUrl : string,
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
}
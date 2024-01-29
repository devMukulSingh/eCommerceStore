export interface IinitialState{
    categories: Icategory[],
    billboard : Ibillboard |  null,
    products : Iproducts[]
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
    imageUrl : string,
    id:string,
    name:string,
    color:string,
    size:string,
    isFeatured : boolean,
    isArchived : boolean,
    date : string,
}


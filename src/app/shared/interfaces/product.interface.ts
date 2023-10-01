export interface IProduct {
    id: number,
    category: string
    description: string 
    image: string
    price: number
    title: string
    rating: IProductRating
}

export interface IProductRating {
    count:  number
    rate: number
}
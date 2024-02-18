"use client"
import { Iproducts } from "@/types";
//@ts-ignore
import ReactStars from "react-rating-stars-component";

interface RatingsProps{
    product:Iproducts
}
const Ratings:React.FC<RatingsProps> = ({
    product
}) => {
    return (
        <div className="flex items-center gap-2">
            <h1 className="font-semibold text-neutral-400">Ratings</h1>
            <ReactStars
                count={5}
                value={product.ratings}
                edit={false}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
        </div>
    )
}

export default Ratings
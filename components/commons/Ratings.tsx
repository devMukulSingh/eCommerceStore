"use client"
//@ts-ignore
import ReactStars from "react-rating-stars-component";

interface RatingsProps{
    value:number
}
const Ratings:React.FC<RatingsProps> = ({
    value
}) => {
    return (
        <div className="flex items-center gap-2">
            <h1 className="font-semibold text-neutral-400">Ratings</h1>
            <ReactStars
                count={5}
                value={value}
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
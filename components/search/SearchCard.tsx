import { Iproducts } from '@/types'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
//@ts-ignore
import ReactStars from "react-rating-stars-component";

interface SearchCardProps {
    product: Iproducts
}

const SearchCard: React.FC<SearchCardProps> = ({
    product
}) => {

    return (
        <Link href={`/product/${product.id}`}>
            <main className='flex gap-5 p-5 border '>
                <figure className='relative w-52 h-52'>
                    <Image src={product.images[0].url} alt='productImg' fill className='object-contain object-center' />
                </figure>
                <section className='flex flex-col gap-3'>
                    <h1 className='text-xl'>{product.name}</h1>
                    <h1 className='text-3xl text-semi-bold'>₹{product.price}</h1>
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
                </section>
            </main>
        </Link>
    )
}

export default SearchCard
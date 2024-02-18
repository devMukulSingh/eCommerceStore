"use client"
import { Iproducts } from '@/types'

interface DetailsSectionProps {
    product:Iproducts
}
const DetailsSection: React.FC<DetailsSectionProps> = ({
    product
}) => {
    return (
        <main>
            <h1 className="font-semibold text-xl">Details</h1>
            <div className="space-y-2 ml-5 basis-1/2">
                {
                    product?.description.map((desc) => (
                        <ul className="list-disc">
                            <li className="">{desc}</li>
                        </ul>
                    ))
                }
            </div>
        </main>
    )
}

export default DetailsSection
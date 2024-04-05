import React from 'react'

const Filters = () => {
    return (
        <main className='border py-5 pl-5 pr-20 flex-shrink h-fit lg:flex flex-col md:flex sm:flex  hidden  '>

            <section className='mt-3 flex flex-col gap-5'>
                <div>
                    <p className='text-xl font-semibold mb-2'>Brands</p>
                    <ul className='space-y-2'>
                        <li>Samsung</li>
                        <li>Redmi</li>
                        <li>Apple</li>
                        <li>OnePlus</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-semibold mb-2'>Price</p>
                    <ul className='whitespace-nowrap space-y-2'>
                        <li>Under ₹10000</li>
                        <li>Under ₹20000</li>
                        <li>Under ₹50000</li>
                        <li>Under ₹100000</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Filters
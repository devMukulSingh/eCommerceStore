import { Loader2Icon } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div className='w-full mt-10 flex justify-center'>
        <Loader2Icon size={30} className='animate-spin'/>
    </div>
  )
}

export default loading
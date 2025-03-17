import Link from 'next/link'
import React from 'react'

const CustomGetFundedBtn = () => {
  return (
    <div className="text-center py-6">
        <Link href={"get-funded"} className="bg-green-500 py-2 px-4 rounded-full text-slate-950">
            Get Funded
        </Link>
    </div>
  )
}

export default CustomGetFundedBtn
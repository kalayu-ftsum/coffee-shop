import React from 'react'
import { ReactComponent as Bean } from "../assets/Bean.svg";

export default function Banner() {
  return (
    <div className="relative h-[100px] bg-primary flex px-8 items-center gap-x-12 mt-14">
        <div className="px-4 rounded-[100px] py-6 bg-primary border-4 border-dashed border-secondary  absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-x-4">
            <h1 className="text-[40px] font-butler font-normal text-white">Since</h1>
            <h1 className="text-6xl font-butler font-normal text-white">1945</h1>
            <Bean className="w-12 h-12" />

        </div>
    <Bean width={90} height={90} />
    <p className="text-5xl text-white font-butler font-normal ">
      Cappuccino
    </p>

    <Bean width={90} height={90} />
    <p className="text-5xl text-white font-butler font-normal ">Expresso</p>

    <Bean width={90} height={90} />
    <p className="text-5xl text-white font-butler font-normal ">Moca</p>

    <Bean width={90} height={90} />
    <p className="text-5xl text-white font-butler font-normal ">Latte</p>

    <Bean width={90} height={90} />
    <p className="text-5xl text-white font-butler font-normal ">
      Americano
    </p>

    <Bean width={90} height={90} />
  </div>
  )
}

import React from 'react'
import { ReactComponent as Bean } from "../assets/Bean.svg";

export default function Banner() {
  return (
    <div className="h-[100px] bg-primary flex px-8 items-center gap-x-12">
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

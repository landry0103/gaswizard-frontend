import React from "react"
import { Button } from "@material-tailwind/react"

/* ----------------------------------------------------------- */

export default function HeroSection() {
  return (
    <div className="hero_bg max-w-screen h-[720px] relative">
      <div className="hero_overlay absolute top-0 left-0 w-full h-full" />
      <div className="w-1/2 h-full pl-80 pr-16 flex justify-center relative">
        <div className="h-full flex flex-col justify-center gap-8">
          <h1 className="text-6xl text-[#232323] font-extrabold">
            Welcome To <br />
            <span className="text-[#1DB0c0]">
              GAS WIZARD
            </span>
          </h1>

          <div className="flex flex-col gap-4">
            <p className="text-[#555555] tracking-wider">
              A crypto fueled GAS & EV payment and savings solution that is becoming the 1st on or off chain platform rewarding token holders with FREE gas and EV charges.
            </p>
            <p className="text-[#555555] tracking-wider">
              Gas Wizard is a Web 3 oriented crypto utility token that also has a multi faceted rewards plan.
            </p>
          </div>

          <div>
            <p className="uppercase text-[#555555] font-semibold text-lg">
              Smart contract address:
            </p>
            <p className="uppercase text-[#1DB0c0] font-semibold text-lg">
              XXXXXXXXXXXXXXXXXXXXXXXXXXX
            </p>
          </div>

          <div className="flex jusitfy-start">
            <Button variant="text" className="bg-[#9EC51E] rounded-none text-white text-lg capitalize">
              How To Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
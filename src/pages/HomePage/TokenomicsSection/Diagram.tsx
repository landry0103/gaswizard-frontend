import React, { useEffect } from "react";

/* ----------------------------------------------------------- */

interface IData {
  percentage: string;
  title: string;
  description: string;
  bgColorClassName: string;
}

const DATA: Array<IData> = [
  {
    percentage: '7%',
    title: 'Community',
    description: 'Community rewards, lottery & (FREE GAS ⛽)',
    bgColorClassName: 'bg-primary'
  },
  {
    percentage: '3%',
    title: 'Marketing & Advertising',
    description: 'Helps to expand awareness, plus attracts more investors and consumers to the ecosystem!',
    bgColorClassName: 'bg-[#0085AB]'
  },
  {
    percentage: '1%',
    title: 'Auto Liquidity',
    description: 'Adds additional liquidity to increase price more!',
    bgColorClassName: 'bg-[#005A8F]'
  },
]

/* ----------------------------------------------------------- */

export default function Diagram() {
  return (
    <div className="container max-w-5xl mx-auto">
      <div className="grid grid-cols-2 flex-row-reverse items-center gap-12">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex flex-col gap-0 lg:gap-4">
            {DATA.map(dataItem => (
              <div key={dataItem.title} className={`flex flex-col gap-4 p-8 ${dataItem.bgColorClassName}`}>
                <p className="text-4xl lg:text-8xl font-black text-white text-center">
                  {dataItem.percentage}
                </p>
                <p className="text-lg lg:text-xl font-bold text-white text-center">
                  {dataItem.title}
                </p>
                <p className="text-base lg:text-xl text-white text-center">
                  {dataItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 flex justify-center">
          <div>
            <img src="/assets/images/chart.png" alt="chart" />
          </div>
        </div>
      </div>
    </div>
  )
}
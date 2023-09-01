import React from 'react'
import { Progress } from "@nextui-org/react";


function Skillsright() {
  const Backend=
  [{skill:"NodeJs",value:"80"},
  {skill:'ExpressJs',value:"75"},
  {skill:"Typescript" ,value:"50"},
  {skill:"Mongodb" ,value:"70"},
  {skill:"Javascript" ,value:"85",}]
  return (
    <div className="flex gap-6 flex-col">
    {Backend.map((data,index)=>(
     <Progress
     key={index}
      size="md"
      radius="sm"
      classNames={{
        base: "max-w-md",
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-[#ffdfe9] to-[#ff185f]",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }}
      label={data.skill}
      value={data.value}
      showValueLabel={true}
    />
    ))}
  </div>
        
    

  )
}

export default Skillsright
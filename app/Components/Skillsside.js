import React from "react";
import { Progress } from "@nextui-org/react";


function Skillsside() {
  const frontend=
      [{skill:"ReactJs",value:"80"},
      {skill:'NextJs',value:"70"},
      {skill:"ReactNative" ,value:"50"},
      {skill:"Bootstrap" ,value:"85"},
      {skill:"Tailwind" ,value:"90",}]
  
  return (
    
    <div className="flex gap-6 flex-col">
    {frontend.map((data,index)=>(
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
        
       
        
  );
}

export default Skillsside;

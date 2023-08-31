import React from "react";
import { Progress } from "@nextui-org/react";

export default function Skillbar() {
  return (
    <Progress
      size="md"
      radius="sm"
      classNames={{
        base: "max-w-md",
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-[#ffdfe9] to-[#ff185f]",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }}
      label="Lose weight"
      value={65}
      showValueLabel={true}
    />
  );
}

"use client";
import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";
import { Switch } from "@nextui-org/react";
import { useState } from "react";

const ThemeSwitcher = () => {
  const [isSelected, setIsSelected] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (isSelected) {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  const ondark = () => {
    setIsSelected(!isSelected);
  };

  return (
    <>
      <Switch
        isSelected={isSelected}
        onValueChange={setIsSelected}
        size="md"
        color="danger"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <BiSun className="text-yellow-500" />
          ) : (
            <BsMoonStarsFill className={className} />
          )
        }
      ></Switch>
    </>
  );
};

export default ThemeSwitcher;

"use client";
import { useTheme } from "next-themes";
import {BiSun} from 'react-icons/bi';
import { BsMoonStarsFill } from 'react-icons/bs';
import {Switch} from "@nextui-org/react";
import { useState } from "react";



const ThemeSwitcher = () => {
  const [isSelected,setIsSelected]=useState(false)
 
  const {systemTheme, theme, setTheme } = useTheme();
 
    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(isSelected){
      setTheme('dark')
    }

    else {
      setTheme('light') 
    }     

 const ondark=()=>{
    setIsSelected(!isSelected)
 }

  return (
    <>
     <Switch
     isSelected={isSelected} onValueChange={setIsSelected} 
     size="md"
      color="default"
      startContent={<BiSun />}
      endContent={<BsMoonStarsFill />}
    >
    </Switch>
    </>
  );
};

export default ThemeSwitcher;
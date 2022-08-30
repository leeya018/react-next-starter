import { useState, useEffect } from "react";
import icon1 from "@/images/cube_game/1.png";
import icon2 from "@/images/cube_game/2.png";
import icon3 from "@/images/cube_game/3.png";
import icon4 from "@/images/cube_game/4.png";
import icon5 from "@/images/cube_game/5.png";
import icon6 from "@/images/cube_game/6.png";

// this is the game of cube
export default function Game({}) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  // useEffect(() => {
  //   fetch("/portal/1/projects/1/tasks").then((res) => {
  //     console.log(res.json());
  //   });
  // }, []);

  const spin = () => {
    spinCube(setNumber1);
    spinCube(setNumber2);
  };
  let counter = 1;
  const spinCube = (updateNum) => {
    counter += 50;
    const inter = setInterval(() => {
      updateNum(Math.floor(Math.random() * 6));
    }, 300 - counter);
    setTimeout(() => {
      clearInterval(inter);
    }, 2000);
  };

  return (
    <div className="w-full h-full flex flex-col gap2 justify-center items-center">
      <button
        className=" border-2 border-black bg-green-300 font-bold text-lg w-20 rounded-md hover:bg-green-500"
        onClick={spin}
      >
        spin
      </button>
      <div className="flex gap-4 justify-center">
        <Cube number={number1} />
        <Cube number={number2} />
      </div>
    </div>
  );
}

const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

function Cube({ number }) {
  return (
    <div className="flex justify-center items-center w-10 h-10 rounded-md  ">
      <img src={icons[number].src} alt={`number ${number}`} className="" />
    </div>
  );
}

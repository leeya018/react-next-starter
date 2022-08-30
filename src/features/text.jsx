import { useState, useEffect } from "react";

let time = 0;
export default function Text({}) {
  const [text, setText] = useState("hteisnteinreitnsiola");

  useEffect(() => {
    // func();
  }, []);

  const later = (delay) => {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  };

  //   const func = async () => {
  //     return text.split("").map(async (letter, ind) => {
  //       setTimeout(() => {
  //         return <Letter key={ind} letter={letter} />;
  //       }, 1000);
  //     });
  //   };
  //   const func = async () => {
  //     return text.split("").map(async (letter, ind) => {
  //       await later(1000);
  //       const l = <Letter key={ind} letter={letter} />;
  //       console.log(l);
  //       return l;
  //     });
  //   };

  return (
    <div className="flex flex-col items-center">
      <button className="border-2 border-black hover:bg-gray-400">
        start animation
      </button>
      <div>
        {text.split("").map((letter, ind) => {
          time += 200;
          return <Letter key={ind} letter={letter} time={time} />;
        })}
      </div>
      {/* {isShow && <p className="flex justify-center">{text}</p>} */}
    </div>
  );
}

function Letter({ letter, time }) {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        setIsShow((prev) => !prev);
      }, 1000);
    }, [time]);
  }, []);

  return (
    <>
      {isShow && (
        <span className="h-1 w-1 border-2 border-black">{letter}</span>
      )}
    </>
  );
}

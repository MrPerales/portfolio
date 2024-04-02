import { useState } from "react";
import ArrowLeft from "../Icons/ArroyLeft";
import ArrowRight from "../Icons/ArroyRight";

export default function Slider({ screens, desktop }) {
  const [actualPosition, setAcutalPosition] = useState(0);
  const arrayLength = screens.length;
  const styleDesktop = "w-full";
  const styleMobile = "sm:w-44 w-20  ";
  const styleDesktopArrow =
    "w-48 sm:w-48 opacity-50 hover:opacity-100 cursor-pointer";
  const styleMobileArrow =
    "sm:w-14  w-6 h-10 opacity-50 hover:opacity-100 cursor-pointer";
  const stylesImg = desktop ? styleDesktop : styleMobile;
  const stylesArrows = desktop ? styleDesktopArrow : styleMobileArrow;

  // return para evitar que nos manden otra cosa que nos ea array
  if (!Array.isArray(screens) || arrayLength === 0) return;
  const next = () => {
    setAcutalPosition(
      actualPosition === arrayLength - 1 ? 0 : actualPosition + 1
    );
  };
  const before = () => {
    console.log(arrayLength);
    console.log(actualPosition, "actualPositon");
    setAcutalPosition(
      actualPosition === 0 ? arrayLength - 1 : actualPosition - 1
    );
  };

  return (
    <div className="flex items-center">
      <div onClick={before} className={stylesArrows}>
        <ArrowLeft />
      </div>
      {screens.map((screen, index) => {
        return (
          actualPosition === index && (
            <div className="object-cover h-auto">
              <img src={screen} alt={index} className={stylesImg} />
            </div>
          )
        );
      })}
      <div onClick={next} className={stylesArrows}>
        <ArrowRight />
      </div>
    </div>
  );
}

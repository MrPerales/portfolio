import { useState } from "react";
import ArrowLeft from "../Icons/ArroyLeft";
import ArrowRight from "../Icons/ArroyRight";

export default function Slider({ screens, desktop, alt }) {
  const [actualPosition, setAcutalPosition] = useState(0);
  const arrayLength = screens.length;

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
      <div
        onClick={before}
        className="w-48 sm:w-48 opacity-50 hover:opacity-100 cursor-pointer"
      >
        <ArrowLeft />
      </div>
      {screens.map((screen, index) => {
        return (
          actualPosition === index && (
            <div className="object-cover h-auto">
              <img src={screen} alt={alt} className="w-full" />
            </div>
          )
        );
      })}
      <div
        onClick={next}
        className="w-48 sm:w-48 opacity-50 hover:opacity-100 cursor-pointer"
      >
        <ArrowRight />
      </div>
    </div>
  );
}

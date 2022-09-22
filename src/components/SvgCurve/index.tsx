import { useRef, useEffect, useState } from "react";
import { Curve, formatCurveCoordinates } from "./Curve";

type SvgCurveProps = {
  curve: Curve;
}

const SvgCurve = ({ curve }: SvgCurveProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [curveCoordinates, setCurveCoordinates] = useState<string>(formatCurveCoordinates(curve));

  useEffect(() => {
    const resizeListener = () => {
      const elementWidth = ref.current ? ref.current.offsetWidth : 0;

      curve.control2.x = curve.control2.x / Math.sqrt(elementWidth);
      curve.end.x = elementWidth;

      setCurveCoordinates(formatCurveCoordinates(curve));
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return (
    <div ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%">
        <path
          d={`M 0 0 ${curveCoordinates}`}
          stroke="black"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default SvgCurve;

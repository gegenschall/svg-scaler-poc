export interface Point {
    x: number;
    y: number;
}

export interface Curve {
    control1: Point;
    control2: Point;
    end: Point;
}

const formatPointCoordinates = (point: Point) => {
    const x = Math.trunc(point.x);
    const y = Math.trunc(point.y)
    return `${x} ${y}`;
}

const formatCurveCoordinates = (curve: Curve) => {
    const c1 = formatPointCoordinates(curve.control1);
    const c2 = formatPointCoordinates(curve.control2);
    const end = formatPointCoordinates(curve.end);

    return `C ${c1}, ${c2}, ${end}`;
}

export { formatPointCoordinates, formatCurveCoordinates };
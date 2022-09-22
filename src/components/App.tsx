import React from 'react';
import SvgCurve from './SvgCurve';
import { Curve } from './SvgCurve/Curve';

const DEFAULT_CURVE: Curve = {
  control1: { x: 200, y: 200},
  control2: { x: 40, y: 30},
  end: { x: 500, y: 10},
}

function App() {
  return (
    <SvgCurve curve={DEFAULT_CURVE} />
  );
}

export default App;

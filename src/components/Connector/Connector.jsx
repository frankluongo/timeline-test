import { useEffect, useState } from "react";

import * as Styled from "./Connector.styled";

export function Connector({ start, end }) {
  const [startCoords, setStartCoords] = useState({ x: 0, y: 0 });
  const [endCoords, setEndCoords] = useState({ x: 0, y: 0 });
  const boundConnector = plotConnection.bind(this, {
    start,
    end,
    setStartCoords,
    setEndCoords,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(boundConnector, [start, end]);

  return (
    <>
      <Styled.StartLine $x={startCoords.x} $y={startCoords.y} />
      <Styled.Midline
        $startX={startCoords.x}
        $endX={endCoords.x}
        $y={startCoords.y}
      />
      <Styled.EndLine $x={endCoords.x} $y={endCoords.y} />
    </>
  );
}

function plotConnection({ start, end, setStartCoords, setEndCoords }) {
  init();
  return destroy;

  function destroy() {
    window.removeEventListener("resize", plot);
  }

  function init() {
    plot();
    window.addEventListener("resize", plot);
  }

  function plot() {
    const startBubble = document.querySelector(`#${start}-bubble`);
    const endBubble = document.querySelector(`#${end}-bubble`);

    const startPosition = {
      x: startBubble.offsetLeft + startBubble.getBoundingClientRect().width / 2,
      y: startBubble.offsetTop + startBubble.getBoundingClientRect().height,
    };

    const endPosition = {
      x: endBubble.offsetLeft + endBubble.getBoundingClientRect().width / 2,
      y: endBubble.offsetTop,
    };

    setEndCoords(endPosition);
    setStartCoords(startPosition);
  }
}

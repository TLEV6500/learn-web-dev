import { dia, shapes } from "@joint/core";
import { MathNode } from "./custom-shapes/MathNode.js";

const root = document.querySelector<HTMLDivElement>("#root");
if (!root) throw new Error("Root div element unavailable");
root.replaceChildren();

export default function main() {
  const namespace = shapes;
  const graph = new dia.Graph({}, { cellNamespace: namespace });

  const paper = new dia.Paper({
    el: root,
    model: graph,
    width: 300,
    height: 300,
    background: { color: "#f5f5f5" },
    cellViewNamespace: namespace,
  });

  const mathNode1 = new MathNode();
  mathNode1.position(25, 25);
  // mathNode1.resize(180, 50);
  mathNode1.addTo(graph);

  const rect2 = new shapes.standard.Rectangle();
  rect2.position(95, 225);
  rect2.resize(180, 50);
  rect2.addTo(graph);

  const r = 8;
  rect2.attr("body", { stroke: "#B97A46", rx: r, ry: r });

  rect2.attr("label", { text: "World!", fill: "#353535" });

  const link = new shapes.standard.Link({
    source: mathNode1,
    target: rect2,
  });
  link.addTo(graph);

  link.appendLabel({
    attrs: {
      text: {
        text: "to the",
      },
    },
  });
  link.router("orthogonal");
  link.connector("straight", { cornerType: "line" });
}

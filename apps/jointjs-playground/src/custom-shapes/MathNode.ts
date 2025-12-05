import { dia, shapes, util } from "@joint/core";

export class MathNode extends dia.Element {
  defaults(): Partial<dia.Element.Attributes> {
    return {
      ...super.defaults,
      type: "html.MathNode",
      size: { width: 100, height: 80 },
      attrs: {
        body: {
          //   stroke: "#333",
          //   "stroke-width": 2,
          fill: "#fff",
          width: "calc(w)",
          height: "calc(h)",
        },
        foreignObject: {
          width: "calc(w-12)",
          height: "calc(h-12)",
          x: 6,
          y: 6,
        },
      },
    };
  }

  math: Element | undefined = MathJax?.tex2svg!("\\Omega_\\infty") as Element;

  markup: string | dia.MarkupJSON = util.svg`
    <rect @selector="body"/>
    <foreignObject @selector="foreignObject">
        <p namespaceURI="http://www.w3.org/1999/xhtml" @selector="math-container">${this.math}</p>
    </foreignObject>
    `;
  test(): void {
    console.log(`A prototype method test for ${this.get("type")}`);
  }
}

Object.assign(shapes, {
  html: {
    MathNode,
  },
});

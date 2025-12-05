// Minimal ambient module declarations for importing MathJax (npm/ESM).
// Adjust module names to the package you install (mathjax, mathjax-full, etc).
// Place this file in the same folder as mathjax-global.d.ts (and include in tsconfig).

declare module "mathjax" {
  // The top-level mathjax export (adjust if your package exports differently)
  export const mathjax: any;
  export default mathjax;
}

declare module "mathjax/js/mathjax.js" {
  export const mathjax: any;
}

declare module "mathjax/js/input/tex.js" {
  export const TeX: any;
  export default TeX;
}

declare module "mathjax/js/output/chtml.js" {
  export const CHTML: any;
  export default CHTML;
}

declare module "mathjax/js/handlers/html.js" {
  export function RegisterHTMLHandler(handler: any): void;
}

declare module "mathjax-full/js/mathjax.js" {
  export const mathjax: any;
}

declare module "mathjax-full/js/input/tex.js" {
  export const TeX: any;
}

declare module "mathjax-full/js/output/chtml.js" {
  export const CHTML: any;
}

declare module "mathjax-full/js/handlers/html.js" {
  export function RegisterHTMLHandler(handler: any): void;
}

// Types for MathJax global (v4) including typed tex2svg.
//
// Place this file in a folder included by tsconfig.json (e.g. "types").
// Extend these interfaces further if you use more MathJax APIs.

declare global {
  /**
   * Options commonly accepted by small helper converters like tex2svg.
   * Add fields you need from your build.
   */
  interface Tex2SvgOptions {
    display?: boolean;
    em?: number;
    ex?: number;
    containerWidth?: number;
    // 'fontCache' is used in some builds (none|local|global or custom)
    fontCache?: "none" | "local" | "global" | string;
    // allow any additional options without breaking typing
    [k: string]: any;
  }

  /**
   * A typed signature for the small tex->svg helper if present in the build:
   * MathJax.tex2svg("...") => Element | DocumentFragment
   */
  interface Tex2SvgFunction {
    (math: string, options?: Tex2SvgOptions): Element | DocumentFragment;
  }

  interface MathDocument {
    convert(input: string | Element, options?: any): Element | DocumentFragment;
    typeset?: (elements?: Element | Element[] | NodeListOf<Element>) => void;
    typesetPromise?: (
      elements?: Element | Element[] | NodeListOf<Element>
    ) => Promise<void>;
    clear?: () => void;
    findMath?: (node: Node) => any[];
    [k: string]: any;
  }

  interface LoaderObject {
    load?: (...modules: string[]) => Promise<any>;
    [k: string]: any;
  }

  interface StartupObject {
    promise?: Promise<void>;
    ready?: () => void;
    defaultPageReady?: () => void;
    [k: string]: any;
  }

  interface MathJaxStatic {
    // Small convenience converters (present in many distributions when included)
    tex2svg?: Tex2SvgFunction;
    tex2chtml?: (math: string, options?: any) => Element;

    // Generic factory to create a MathDocument for a DOM document/element
    document?: (doc: Document | HTMLElement, options?: any) => MathDocument;

    // startup/configuration
    startup?: StartupObject;

    // module loader (v4 commonly exposes loader.load)
    loader?: LoaderObject;

    // minimal typeset helpers
    typeset?: (elements?: Element | Element[] | NodeListOf<Element>) => void;
    typesetPromise?: (
      elements?: Element | Element[] | NodeListOf<Element>
    ) => Promise<void>;

    [k: string]: any;
  }

  var MathJax: MathJaxStatic | undefined;
  interface Window {
    MathJax?: MathJaxStatic;
  }
}

export {};

/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="styled-jsx" />

// This file contains custom type declarations for your project
// It's recommended to keep this file minimal and only add types that aren't provided by Next.js

// CSS Modules
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// SVG
interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

declare module '*.svg' {
  const ReactComponent: React.FC<SVGComponentProps>;
  export default ReactComponent;
}

// Image formats
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

// Extend the Window interface if you need to add custom properties to window
declare global {
  interface Window {
    // Example of how to add custom window properties:
    // myCustomFunction: () => void;
    [key: string]: unknown;
  }
}

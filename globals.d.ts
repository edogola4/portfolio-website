// globals.d.ts
import type { Engine } from "@tsparticles/engine";

declare global {
  interface Window {
    tsParticles: Engine;
  }
}

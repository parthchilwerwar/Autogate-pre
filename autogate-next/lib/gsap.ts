import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register every plugin exactly once, here, before any component imports gsap.
// TextPlugin powers the `text:` tweens in the phone demo (e.g. the rule-engine label).
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export { gsap, ScrollTrigger, TextPlugin };

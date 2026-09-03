import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function useSmoothScroll(containerRef) {
  useEffect(() => {
    const pageContainer = containerRef.current;
    if (!pageContainer) return;

    const scroller = new LocomotiveScroll({
      el: pageContainer,
      smooth: true,
    });

    scroller.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(pageContainer, {
      scrollTop(value) {
        return arguments.length
          ? scroller.scrollTo(value, 0, 0)
          : scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: pageContainer.style.transform ? "transform" : "fixed",
    });

    let pinTween;

    const setupPin = () => {
      const pinWrap = document.querySelector(".pin-wrap");
      if (!pinWrap) return;

      const pinWrapWidth = pinWrap.offsetWidth;
      const horizontalScrollLength = pinWrapWidth - window.innerWidth;

      pinTween = gsap.to(".pin-wrap", {
        scrollTrigger: {
          scroller: pageContainer,
          scrub: true,
          trigger: "#sectionPin",
          pin: true,
          start: "top top",
          end: pinWrapWidth,
        },
        x: -horizontalScrollLength,
        ease: "none",
      });
    };

    window.addEventListener("load", setupPin);

    const refreshListener = () => scroller.update();
    ScrollTrigger.addEventListener("refresh", refreshListener);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("load", setupPin);
      ScrollTrigger.removeEventListener("refresh", refreshListener);
      if (pinTween) pinTween.kill();
      scroller.destroy();
      ScrollTrigger.killAll();
    };
  }, [containerRef]);
}
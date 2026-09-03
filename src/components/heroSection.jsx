function HeroSection() {
  return (
    <section data-bgcolor="#bcb8ad" data-textcolor="#032f35">
      <div>
        <h1 data-scroll data-scroll-speed="1">
          <span>Horizontal</span> <span>scroll</span> <span>section</span>
        </h1>
        <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
          with GSAP ScrollTrigger &amp; Locomotive Scroll
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
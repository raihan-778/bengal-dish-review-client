import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Testimonial.css";

const Testimonial = ({ testimonial }) => {
  const [flip, setFlip] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flip ? 1 : 0,
    transform: `rotateX(${flip ? 360 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="testimonial-container" onClick={() => setFlip(!flip)}>
      <animated.div className="testimonial-card" style={{ opacity, transform }}>
        {testimonial.text}
      </animated.div>
    </div>
  );
};

export default Testimonial;

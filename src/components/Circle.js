import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import InView, { useInView } from "react-intersection-observer";

const Circle = () => {
  const { ref, inView } = useInView();
  const Animation = useAnimation();
  useEffect(() => {
    if (inView) {
      Animation.start({
        pathLength: 1,
        opacity: 1,
        strokeWidth: 0,
        transition: { duration: 1.5, ease: "easeIn" },
      });
    }
    if (!inView) {
      Animation.start({
        pathLength: 0,
        opacity: 0,
        strokeWidth: 50,
      });
    }
  });
  return (
    <div className="svg">
      <svg
        width="388"
        height="388"
        viewBox="0 0 388 388"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          ref={ref}
          animate={Animation}
          d="M388 194C388 301.143 301.143 388 194 388C86.8568 388 0 301.143 0 194C0 86.8568 86.8568 0 194 0C301.143 0 388 86.8568 388 194ZM52.5786 194C52.5786 272.105 115.895 335.421 194 335.421C272.105 335.421 335.421 272.105 335.421 194C335.421 115.895 272.105 52.5786 194 52.5786C115.895 52.5786 52.5786 115.895 52.5786 194Z"
          fill="#001940"
        />
      </svg>
    </div>
  );
};

export default Circle;

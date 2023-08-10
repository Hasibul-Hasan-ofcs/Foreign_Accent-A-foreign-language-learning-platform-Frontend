import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const BoxScale = ({ children, delayProp }) => {
  const delayTime = parseFloat(delayProp);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animeControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animeControl.start("visible");
    }
  }, [isInView]);

  return (
    <div className="relative" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.1 },
          visible: { opacity: 1, scale: 1.0 },
        }}
        initial="hidden"
        animate={animeControl}
        transition={{ duration: 0.7, delay: delayTime }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default BoxScale;

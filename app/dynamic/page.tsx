"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Page() {
  const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale, { stiffness: 20 });
  const opacity = useTransform(scale, [1, 5], [0, 1]);

  return (
    <div className="w-full h-screen grid place-items-center">
      <button className="text-4xl" onClick={() => scale.set(scale.get() + 0.2)}>
        +
      </button>
      <motion.div
        style={{ opacity, scale: scaleSpring }}
        className="rounded-full w-32 h-12 bg-yellow-400"
      />
      <button
        className="text-4xl"
        onClick={() => scale.set(scale.get() <= 0 ? 0 : scale.get() - 0.2)}
      >
        -
      </button>
    </div>
  );
}

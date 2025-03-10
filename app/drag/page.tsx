"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Page() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [1, 1, 1.5]);
  const borderRadius = useTransform(x, [-100, 0, 100], ["50%", "0%", "50%"]);
  const backgroundColor = useTransform(
    x,
    [-100, 0, 100],
    ["#114acf", "#066aff", "#ccc"]
  );
  return (
    <div className="w-full h-screen grid place-items-center">
      <motion.div
        drag
        dragConstraints={{ left: 100, right: 100, top: 100, bottom: 200 }}
        style={{ x, scale, borderRadius, backgroundColor }}
        className="bg-fuchsia-500 size-[150px]  px-3 py-2 rounded-md cursor-pointer"
      ></motion.div>
    </div>
  );
}

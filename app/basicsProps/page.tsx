"use client";
import { motion } from "framer-motion";

export default function basicsPage() {
  return (
    <div className="h-screen bg-[#181818] flex justify-center items-center">
      <motion.div
        animate={{
          scale: [1.2, 1.3, 1.4, 1.5, 0.3, 1, 1.3], // like key framers it will go from 1.5 TO 1.7 ...
          rotate: [0, 0, 180, 160, 90, 0, 0],
          borderRadius: ["0%", "0%", "50%", "0%", "0%", "0%", "50%"],
        }}
        transition={{
          ease: "easeInOut",
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          times: [0, 1, 0.2, 0.3, 0.4, 0.8, 0.9, 1],
        }}
        className="border  text-gray-950 py-4 px-10 size-[100px]  rounded-md text-[19px] font-bold"
      ></motion.div>
    </div>
  );
}

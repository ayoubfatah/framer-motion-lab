"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Component() {
  const [visible, setVisible] = useState(true);
  return (
    // Main hero section container
    <motion.section
      animate={{
        backgroundImage: [
          "radial-gradient(rgba(222, 222, 222, 0.01) 2px, transparent 2px)",
          "radial-gradient(rgba(222, 222, 222, 0.01) 2px, transparent 2px)",
          "radial-gradient(rgba(222, 222, 222, 0.01) 4px, transparent 4px)",
          "radial-gradient(rgba(222, 222, 222, 0.01) 4px, transparent 4px)",
          "radial-gradient(rgba(222, 222, 222, 0.01) 2px, transparent 2px)",
          "radial-gradient(rgba(222, 222, 222, 0.01) 2px, transparent 2px)",
        ],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse",
      }}
      style={{
        backgroundImage:
          "radial-gradient(rgba(222, 222, 222, 0.01) 2px, transparent 2px)",
        backgroundSize: "17px 17px",
        backgroundColor: " #181818",
      }}
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#181818] text-white"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <div className="text-center space-y-8">
          {/* Eyebrow text */}
          <p className="relative text-sm font-semibold tracking-widest uppercase text-zinc-400">
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: 230 }}
              transition={{
                duration: 1,
                ease: "linear",
              }}
              onAnimationComplete={() => {
                setVisible(false);
              }}
              className={`absolute h-full w-[330px] top-0 left-1/3 bg-[#181818] after:bottom-1 after:absolute after:block  after:w-[2px] after:h-[13px] after:bg-white ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            ></motion.span>
            Welcome to the future
          </p>

          {/* Main headline */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <motion.span
              style={{
                background:
                  "linear-gradient(to right, #2d2d31, #ffffff, #373737)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="block"
            >
              Elevate Your
            </motion.span>
            <motion.span className="block bg-gradient-to-r from-white to-zinc-500 text-transparent bg-clip-text">
              Digital Presence
            </motion.span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto max-w-2xl text-xl text-zinc-400 sm:text-2xl">
            Empower your brand with cutting-edge solutions that drive growth,
            engage audiences, and redefine industry standards.
          </p>

          {/* Call-to-action button */}
          <div>
            <motion.button
              style={{
                background:
                  "linear-gradient(to right, #a7a7a7, #ffffff, #7f7f7f)",
                backgroundSize: "200% auto",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
                repeatType: "reverse",
              }}
              whileHover={{
                scale: 1.1,
              }}
              className="bg-white text-black hover:bg-zinc-200 rounded-md text-lg py-4 px-10 inline-flex items-center overflow-hidden"
            >
              <motion.span
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.4,
                  repeatType: "reverse",
                }}
              >
                Start Your Journey
              </motion.span>
              <motion.span
                initial={{}}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 0.4,
                  ease: "linear",
                  repeatType: "reverse",
                }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.span>
            </motion.button>
          </div>

          {/* Additional information */}
          <p className="mt-8 text-sm text-zinc-500">
            Join thousands of satisfied clients who have transformed their
            digital landscape
          </p>
        </div>
      </div>
    </motion.section>
  );
}

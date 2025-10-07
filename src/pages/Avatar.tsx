import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

type Props = {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | number;
  className?: string;
  onEditClick?: () => void;
};

const sizeMap = {
  sm: 96, // 24rem? actually px
  md: 160,
  lg: 220,
};

const Avatar: React.FC<Props> = ({
  src = "/profile.jpg", // replace with your default path
  alt = "Profile photo of Ramkumar",
  size = "md",
  className = "",
  onEditClick,
}) => {
  const pxSize = typeof size === "number" ? size : sizeMap[size || "md"];
  const containerStyle = { width: pxSize, height: pxSize };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      style={containerStyle}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
      aria-hidden={false}
    >
      {/* Glowing background ring */}
      <div
        className="absolute inset-0 rounded-full -z-10 blur-3xl opacity-30 animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.25), transparent 20%), radial-gradient(circle at 70% 70%, rgba(16,185,129,0.18), transparent 30%)",
        }}
        aria-hidden
      />

      {/* outer ring */}
      <div
        className="rounded-full p-1"
        style={{
          boxShadow:
            "0 8px 24px rgba(16,24,40,0.12), inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="rounded-full w-full h-full object-cover block border border-border/40"
          whileHover={{ scale: 1.03, rotate: 0.5 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          draggable={false}
        />
      </div>

      {/* small badge / edit button */}
      <motion.button
        type="button"
        onClick={onEditClick}
        aria-label="Edit profile photo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 bg-surface border border-border/30 shadow-sm rounded-full p-2 flex items-center justify-center"
      >
        <Camera size={14} />
      </motion.button>
    </motion.div>
  );
};

export default Avatar;

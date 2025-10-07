import React from "react";
import { motion, Variants } from "framer-motion";
import { Camera } from "lucide-react";

type Props = {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | number | "fill";
  className?: string;
  onEditClick?: () => void;
  fullHeight?: boolean;
  enableAnimations?: boolean;
};

const sizeMap: Record<string, number> = {
  sm: 120,
  md: 200,
  lg: 320,
};

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] },
  },
};

const floatVariants: Variants = {
  float: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const ringPulse: Variants = {
  idle: { scale: 1, opacity: 0.28 },
  pulse: {
    scale: [1, 1.12, 1],
    opacity: [0.28, 0.45, 0.28],
    transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
  },
};

const badgeVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 500, damping: 28 } },
  tap: { scale: 0.92 },
};

const ProfilePhoto: React.FC<Props> = ({
  src = "/profile.png",
  alt = "Profile photo",
  size = "md",
  className = "",
  onEditClick,
  fullHeight = false,
  enableAnimations = true,
}) => {
  const isFill = size === "fill" || fullHeight;
  const pxSize = typeof size === "number" ? size : sizeMap[size as string] ?? sizeMap.md;
  const containerStyle: React.CSSProperties = isFill
    ? { width: "100%", height: "100%", maxWidth: pxSize }
    : { width: pxSize, height: pxSize };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "9999px",
    display: "block",
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      style={containerStyle}
      variants={enableAnimations ? containerVariants : undefined}
      initial={enableAnimations ? "hidden" : false}
      animate={enableAnimations ? "visible" : undefined}
      aria-hidden={false}
    >
      {/* Animated glow ring (behind image) */}
      <motion.div
        className="absolute inset-0 rounded-full -z-10"
        aria-hidden
        variants={enableAnimations ? ringPulse : undefined}
        animate={enableAnimations ? "pulse" : undefined}
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.18), transparent 18%), radial-gradient(circle at 70% 70%, rgba(16,185,129,0.12), transparent 28%)",
          filter: "blur(22px)",
        }}
      />

      {/* Optional slow float effect wrapper */}
      <motion.div
        className="rounded-full overflow-hidden mx-auto"
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: isFill ? undefined : "1/1",
          boxShadow: "0 18px 40px rgba(16,24,40,0.18), inset 0 1px 0 rgba(255,255,255,0.03)",
          borderRadius: "9999px",
        }}
        animate={enableAnimations ? "float" : undefined}
        variants={enableAnimations ? floatVariants : undefined}
      >
        <motion.img
          src={src}
          alt={alt}
          style={imgStyle}
          className="block"
          initial={{ scale: 1 }}
          whileHover={enableAnimations ? { scale: 1.04, rotate: 0.5 } : undefined}
          whileTap={enableAnimations ? { scale: 0.98 } : undefined}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          draggable={false}
          loading="lazy"
        />
      </motion.div>

      {/* subtle rotating accent ring (top layer) */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full -z-20"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.06), rgba(16,185,129,0.04), transparent 40%)",
          mixBlendMode: "screen",
        }}
        animate={enableAnimations ? { rotate: [0, 360] } : undefined}
        transition={enableAnimations ? { duration: 18, repeat: Infinity, ease: "linear" } : undefined}
      />

      {/* Edit / camera badge */}
      {onEditClick && (
        <motion.button
          type="button"
          onClick={onEditClick}
          aria-label="Edit profile photo"
          className="absolute bottom-3 right-3 md:bottom-6 md:right-6 bg-surface border border-border/30 shadow-sm rounded-full p-2 flex items-center justify-center"
          variants={badgeVariants}
          initial="hidden"
          animate="visible"
          whileTap="tap"
        >
          <motion.span
            whileHover={enableAnimations ? { y: -3, scale: 1.06 } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 16 }}
            className="flex items-center justify-center"
          >
            <Camera size={14} />
          </motion.span>
        </motion.button>
      )}
    </motion.div>
  );
};

export default ProfilePhoto;

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "./cc.css";

function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  

  const smoothCursorX = useSpring(cursorX, { stiffness: 8000, damping: 800 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 8000, damping: 800 });

  const [cursorSize, setCursorSize] = useState(30); // Giảm kích thước con trỏ
    
    const variants = {
      default: {
        scale: 0.25,
      },
      cursorEnter: {
        scale: 1.5, 
      },
      cursorLeave: {
        scale: 0.5, 
      },
      buttonHover: {
        scale: 1.2,
      },
      click: {
        scale: 2,
      },
    };
  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - cursorSize / 2);
      cursorY.set(e.clientY - cursorSize / 2);
    };

    const handleClick = () => {
      setCursorSize(25); 
      setTimeout(() => setCursorVariant("default"), 150); // Thu nhỏ lại
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{
        translateX: smoothCursorX,
        translateY: smoothCursorY,
        width: cursorSize,
        height: cursorSize,
        backgroundColor: "rgba(255, 255, 255, 0.6)", // Màu trắng xám
        borderRadius: "50%",
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none", // Không ảnh hưởng đến các phần tử khác
        zIndex: 9999, // Luôn hiển thị trên cùng
      }}
    />
  );
}

export default CustomCursor;

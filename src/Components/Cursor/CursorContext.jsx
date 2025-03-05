import React, { createContext, useState, useContext } from "react";

// 1️⃣ Tạo context với giá trị mặc định là null
const CursorContext = createContext(null);

// 2️⃣ Hook để dùng context
export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (!context) {
    console.error("❌ Error: useCursorContext() must be used within CursorContextProvider");
    return {}; // Trả về object trống để tránh lỗi undefined
  }
  return context;
};

// 3️⃣ Provider để bọc toàn bộ ứng dụng
export const CursorContextProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const animateCursor = (variant) => {
    setCursorVariant(variant);
  };

  return (
    <CursorContext.Provider value={{ cursorVariant, animateCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

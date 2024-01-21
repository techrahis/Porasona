import React, { useEffect, useState } from "react";

const isMobile = () => {
  const [mobile, setMobile] = useState(false);
  const handleMobile = () => {
    setMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleMobile();
    window.addEventListener("resize", handleMobile);

    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);
  return mobile;
};

export default isMobile;

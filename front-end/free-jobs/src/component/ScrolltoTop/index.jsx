// import { useState, useEffect } from "react";
// import { MdOutlineKeyboardArrowUp } from "react-icons/md";
// export default function index() {
//   const [isVisible, setIsVisible] = useState(false);

//   // Function to scroll to the top of the page
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // Optional smooth scrolling animation
//     });
//   };

//   // Function to handle scroll event
//   const handleScroll = () => {
//     // Show the button when user scrolls down
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   // Add scroll event listener when component mounts
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <div className="fixed bottom-10 right-6">
//       <button className="w-[50px] h-[50px] rounded-full bg-theme-color text-white flex items-center justify-center">
//         <MdOutlineKeyboardArrowUp className="text-3xl" />
//       </button>
//     </div>
//   );
// }
import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling animation
    });
  };

  // Function to handle scroll event
  const handleScroll = () => {
    // Show the button when user scrolls down
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-6">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-[50px] h-[50px] rounded-full bg-theme-color text-white flex items-center justify-center"
        >
         <MdOutlineKeyboardArrowUp className="text-3xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

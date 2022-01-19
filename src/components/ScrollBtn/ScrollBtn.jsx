import { useState, useEffect } from "react";
import { ScrollBtn } from "./ScrollBtnstyle";

import { IoIosArrowDropupCircle } from "react-icons/io";

const Scrollbtn = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const scrollButton = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;

    setScrollTop(winScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  return (
    <>
      {scrollTop && (
        <ScrollBtn onClick={scrollButton}>
          <IoIosArrowDropupCircle
            style={{
              // color: "linear-gradient(270deg,#13ADC7 0%,#945DD6 100%)",
              width: "50px",
              height: "50px",
              marginTop: "50%",
              opacity: "50%",
            }}
          />
        </ScrollBtn>
      )}
    </>
  );
};

export default Scrollbtn;

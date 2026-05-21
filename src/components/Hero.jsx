import { useEffect, useRef, useState } from "react";

function Hero() {

  const images = [

    "https://www.giva.co/cdn/shop/files/Explore_All_Collection_Web_6.jpg?v=1778565926&width=3000",

    "https://www.giva.co/cdn/shop/files/Fresh_Drop_Collection_Web_2.webp?v=1769086512&width=3000",

    "https://www.giva.co/cdn/shop/files/Ark_Collection_Web_Banner_with_offer.jpg?v=1778826640&width=3000"

  ];

  const [current, setCurrent] = useState(0);

  const startX = useRef(0);

  // Auto Slide
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  // Mouse Down
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  // Mouse Up
  const handleMouseUp = (e) => {

    const endX = e.clientX;

    // Left Swipe
    if (startX.current - endX > 50) {

      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }

    // Right Swipe
    if (endX - startX.current > 50) {

      setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );

    }
  };

  return (

    <section className="px-6 py-6">

      <div
        className="relative overflow-hidden rounded-xl cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >

        <img
          src={images[current]}
          alt="banner"
          className="w-full h-[350px] object-cover select-none duration-500"
          draggable="false"
        />

      </div>

      {/* Dots */}

      <div className="flex justify-center gap-2 mt-4">

        {images.map((_, index) => (

          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full cursor-pointer transition-all duration-300
            ${current === index
                ? "bg-gray-700 w-6"
                : "bg-gray-300 w-3"
              }`}
          ></div>

        ))}

      </div>

    </section>
  );
}

export default Hero;
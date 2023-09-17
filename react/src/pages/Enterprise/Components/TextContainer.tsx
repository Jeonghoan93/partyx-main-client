import { useEffect, useState } from "react";

const TextContainer = () => {
  const isClient = typeof window === "object";
  const initialWidth = isClient ? window.innerWidth : 1200;
  const [windowWidth, setWindowWidth] = useState(initialWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth < 700) {
    return (
      <section className="mt-2">
        <div className="bg-gray-120 p-5 rounded-lg shadow-md space-y-6 mb-10">
          <h2 className="text-[15pt] font-semibold">Festivals</h2>
          <p className="text-[12pt] text-gray-800 font-medium font-serif">
            Connect directly with eager attendees. Boost ticket sales, shine
            brighter, and create unforgettable moments with PartyX.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-2" style={{ maxWidth: "400px" }}>
      <div className="bg-gray-120 p-5 rounded-lg shadow-md space-y-6 mb-10">
        <h2 className="text-[15pt] font-semibold">Festivals</h2>
        <p className="text-[12pt] text-gray-800 font-medium font-serif">
          Connect directly with eager attendees. Boost ticket sales, shine
          brighter, and create unforgettable moments with PartyX.
        </p>
      </div>
    </section>
  );
};

export default TextContainer;

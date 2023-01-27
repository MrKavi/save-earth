import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image:
        "https://www.pngall.com/wp-content/uploads/2017/05/Save-Earth-PNG-Picture.png",
      caption: "Save Earth. Save natural resources",
    },
    {
      id: 2,
      image:
        "https://www.pngall.com/wp-content/uploads/2017/05/Save-Earth-Free-PNG-Image.png",
      caption: "There is no place to live other than Earth; save the Earth!",
    },
    {
      id: 3,
      image:
        "https://www.pngall.com/wp-content/uploads/2017/05/Save-Earth-Free-Download-PNG.png",
      caption: "Our planet has no alternative; please save it.",
    },
  ]);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(nextItem, 3000);
    return () => clearInterval(intervalId);
  }, [currentItem]);

  const prevItem = () => {
    if (currentItem === 0) {
      setCurrentItem(items.length - 1);
    } else {
      setCurrentItem(currentItem - 1);
    }
  };

  const nextItem = () => {
    if (currentItem === items.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem(currentItem + 1);
    }
  };

  return (
    <div className="carousel-container w-[400px]">
      <button className="prev-button" onClick={prevItem}>
        &lt;
      </button>
      <div className="carousel-item">
        <img src={items[currentItem].image} alt="alt" />
        <h4 className="text-white">{items[currentItem].caption}</h4>
      </div>
      <button className="next-button" onClick={nextItem}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;

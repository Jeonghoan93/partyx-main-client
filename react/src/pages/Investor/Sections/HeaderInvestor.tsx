import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  { url: "images/office1.jpg", text: "Stockholm " },
  { url: "images/office2.jpg", text: "Berlin " },
  { url: "images/office3.jpg", text: "Amsterdam " },
];

const HeaderInvestor = () => {
  const handleOnChange = (index) => {
    // Handle the change event if required
  };

  const handleClickItem = (index, item) => {
    // Handle the item click event if required
  };

  const handleClickThumb = (index) => {
    // Handle the thumbnail click event if required
  };

  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <div
        style={{
          maxWidth: "700px",
        }}
        className="py-3"
      >
        <Carousel
          showArrows={true}
          onChange={handleOnChange}
          onClickItem={handleClickItem}
          onClickThumb={handleClickThumb}
          infiniteLoop={true}
          showThumbs={false}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img className="h-[200pt]" src={image.url} alt={image.text} />
              <p className="legend">{image.text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeaderInvestor;

interface PhotoSectionProps {
  img: string;
}

const PhotoSection: React.FC<PhotoSectionProps> = ({ img }) => {
  return (
    <section
      className="
          w-full
          h-[50vh]
          overflow-hidden 
          rounded-xl
          relative
        "
    >
      <img
        src={img}
        style={{ width: "100%", height: "100%" }}
        className="object-cover w-full"
        alt="Image"
      />
    </section>
  );
};

export default PhotoSection;

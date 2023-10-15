interface UserPhotoProps {
  img: string;
}

const UserPhoto: React.FC<UserPhotoProps> = ({ img }) => {
  return (
    <section className="w-full h-[40vh] overflow-hidden border-[1px] border-neutral-200 shadow relative rounded-lg">
      <div className="w-full h-[40vh] overflow-hidden relative">
        <img
          src={img}
          style={{ width: "100%", height: "100%" }}
          className="object-cover w-full"
          alt="Image"
        />
      </div>
    </section>
  );
};

export default UserPhoto;

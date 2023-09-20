import TextContainer from "src/components/TextContainer";

const mockedText1 = {
  title: "why PartyX?",
  desc: "It's about going to parties that matches your vibe, and the people that has similar interests as you. We believe that you can find your best friends in a party, and we want to make it easier for you to find them.",
  user: {
    img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
    name: "Jimmy",
    role: "Developer",
  },
};

const NotificationClient: React.FC = () => {
  return (
    <section className="">
      <div className="mb-6">
        <h2 className="text-[16pt] mb-2 font-bold">Notifications</h2>
        <span className="text-[11pt] text-gray-600 font-semibold">
          Explore parties and make new friends
        </span>
      </div>
      <TextContainer {...mockedText1} />
      <TextContainer {...mockedText1} />
      <TextContainer {...mockedText1} />
    </section>
  );
};

export default NotificationClient;

import TextContainer from "src/components/TextBox/TextContainer";

const mockedText1 = {
  title: "Welcome to PartyPlanner!",
  desc: "Explore parties and make new friends",
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

import About from "./Cards/About";
import Messages from "./Cards/Messages";
import PaymentPayout from "./Cards/PaymentPayout";
import Safety from "./Cards/Safety";
import Security from "./Cards/Security";
import Tax from "./Cards/Tax";

const RightSide: React.FC = () => {
  return (
    <section className="flex flex-col gap-3">
      <Messages />
      <Safety />
      <Tax />
      <Security />
      <PaymentPayout />
      <About />
    </section>
  );
};

export default RightSide;

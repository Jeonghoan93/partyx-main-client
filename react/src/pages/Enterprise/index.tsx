import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import Container from "src/components/Container";
import LargeImgCard from "src/components/LargeImgCard";

const Enterprise = () => {
  return (
    <Container>
      {/* Header */}
      <section className="flex flex-col gap-3">
        <span
          className="
          text-[20pt]
          lg:text-[25pt] font-semibold"
          style={{
            maxWidth: "500px",
          }}
        >
          Why Choose PartyX?
        </span>
        <div className="flex flex-row justify-between gap-12">
          <span
            className="text-[13pt] lg:text-[15pt] font-normal"
            style={{
              maxWidth: "600px",
            }}
          >
            For enterprises like festival organizers, club owners, and large
            event hosts, PartyX offers a unique gamified discovery process,
            monetary incentives for users, and a robust platform ensuring safety
            and trustworthiness.
          </span>
          <button
            onClick={() => alert("zldwkd93.business@gmail.com")}
            style={{ maxWidth: "300px", height: "fit-content" }}
            className="hidden lg:block bg-blue-700 text-neutral-50 px-6 py-3 rounded text-[12pt] font-mono"
          >
            Start the conversation
          </button>
        </div>
        <button
          onClick={() => alert("zldwkd93.business@gmail.com")}
          style={{ maxWidth: "300px", height: "fit-content" }}
          className="mt-5 block lg:hidden bg-blue-700 text-neutral-50 px-4 py-3 rounded text-[12pt] font-mono"
        >
          Start the conversation
        </button>
      </section>

      {/* Body */}
      <section
        style={{ marginTop: "50pt" }}
        className="flex flex-row justify-between"
      >
        <div className="hidden lg:block">
          <span className="font-semibold text-lg lg:text-xl mb-2 block text-gray-700">
            Our ambition
          </span>
          <p style={{ maxWidth: "300px" }} className="text-light text-gray-500">
            is to be your best partner, Earn attending/promoting. Secure,
            trustworthy platform for hosts.
          </p>
        </div>

        <LargeImgCard
          style={{ maxWidth: "600px" }}
          img={"/images/house.jpeg"}
        ></LargeImgCard>
      </section>

      <section
        style={{ marginTop: "50pt" }}
        className="lg:grid lg:grid-cols-3 lg:gap-4"
      >
        <div
          style={{ maxWidth: "350px" }}
          className="flex flex-col gap-4 p-2 my-5 w-full"
        >
          <span>
            <MdExplore size={50} />
          </span>
          <span className="font-semibold text-gray-800">
            Amplify Your Reach
          </span>
          <span className="text-[11pt] text-gray-600">
            Tap into a gamified event discovery platform, putting your events at
            the fingertips of eager attendees. With PartyX, your events stand
            out, drawing young adults and professionals seamlessly.
          </span>
        </div>

        <div
          style={{ maxWidth: "350px" }}
          className="flex flex-col gap-4 p-2 my-5 w-full"
        >
          <span>
            <RiShieldCheckLine size={50} />
          </span>
          <span className="font-semibold text-gray-800">
            Safe and Verified Events
          </span>
          <span className="text-[11pt] text-gray-600">
            Ensure participants' confidence with our robust event verification
            system, from necessary permits to physical inspections. High ratings
            and user feedback elevate your event's credibility.
          </span>
        </div>

        <div
          style={{ maxWidth: "350px" }}
          className="flex flex-col gap-4 p-2 my-5 w-full"
        >
          <span>
            <AiOutlineMoneyCollect size={50} />
          </span>
          <span className="font-semibold text-gray-800">
            Earning Opportunities Galore
          </span>
          <span className="text-[11pt] text-gray-600">
            Empower users and event organizers with our unique monetary
            incentive model. From ticket sales, referrals to affiliate
            marketing, we turn every engagement into a potential earning
            opportunity.
          </span>
        </div>
      </section>
    </Container>
  );
};

export default Enterprise;

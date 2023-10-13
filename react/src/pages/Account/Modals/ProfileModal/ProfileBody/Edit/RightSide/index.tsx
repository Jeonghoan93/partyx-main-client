import ControlWho from "./Cards/ControlWho";

const EditRightSide: React.FC = () => {
  return (
    <section className="flex flex-col gap-3">
      <ControlWho />

      <div className="border-[1px] rounded-lg shadow p-2 flex justify-center items-center">
        <span className="font-semibold cursor-pointer text-[11pt]">Logout</span>
      </div>

      <div className="border-[1px] rounded-lg shadow p-2 flex justify-center items-center">
        <span className="font-semibold cursor-pointer text-[11pt]">
          Delete or pause account
        </span>
      </div>
    </section>
  );
};

export default EditRightSide;

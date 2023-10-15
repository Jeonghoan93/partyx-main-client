import { PiUploadSimpleLight } from "react-icons/pi";

const TransactionItem = () => {
  return (
    <section className="flex flex-row items-center justify-between p-2">
      <div className="flex flex-row items-center gap-3">
        <div>
          <span>
            <PiUploadSimpleLight size={30} />
          </span>
        </div>
        <div className="flex flex-col">
          <span>user name</span>
          <span>date</span>
        </div>
      </div>

      <div>Money</div>
    </section>
  );
};

export default TransactionItem;

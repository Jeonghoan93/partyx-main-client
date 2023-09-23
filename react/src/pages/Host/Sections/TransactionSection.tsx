import TransactionItem from "../Components/TransactionItem";

const TransactionSection = () => {
  return (
    <section className="mt-4">
      <div className="mb-2">
        <h2 className="text-[13pt] font-bold">Transactions</h2>
      </div>
      <div className="flex flex-col gap-3">
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </div>
    </section>
  );
};

export default TransactionSection;

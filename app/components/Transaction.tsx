import TransactionCard from "./common/TransactionCard";

const TransactionSection = () => {
  return (
    <section className="flex items-center md:gap-24 gap-12 flex-col w-full bg-cover bg-center bg-[#F3F3F3] py-20 lg:py-28" style={{ backgroundImage: `url('/images/transaction-bg.png')` }}>
      <div className="center flex-col gap-6">
        <h1 className="inter lg:text-xl md:text-lg text-[22px] text-center font-bold">
          Safe & Convenient Transaction
        </h1>
        <p className="inter font-medium md:text-[22px] text-[14px] text-grey md:max-w-[698px] w-[90%] text-center">
          Want to pay anything so easy with the touch of a finger. Through
          UNINE, you can make practically any transaction.
        </p>
      </div>
      <div className="flex items-center justify-between flex-wrap w-[85%] lg:gap-[3rem] gap-[2rem]">
        <TransactionCard image="/icons/protect.png" title="Always Protected" description="Shopping with UNINE is even more secure thanks to Buyer Protection."/>
        <TransactionCard image="/icons/reward.png" title="Get Rewards" description="You can keep using your favorite card and keep getting rewards."/>
        <TransactionCard image="/icons/fee.png" title="No Hidden fees" description="You will only be charged when selling goods or requesting payment."/>
        <TransactionCard image="/icons/ship.png" title="Get Rewards" description="Changed your mind after buying? Send back the item you purchased."/>
      </div>
    </section>
  );
};

export default TransactionSection;

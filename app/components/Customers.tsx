import ReviewSlider from "./common/Reviews";

const CustomerSection = () => {
  return (
    <section
      className="flex items-center md:gap-24 gap-12 flex-col w-full bg-cover bg-center bg-[#F3F3F3] py-20 lg:py-28"
      style={{ backgroundImage: `url('/images/transaction-bg.png')` }}
    >
      <div className="center flex-col gap-6">
        <h1 className="inter lg:text-xl md:text-lg text-[22px] text-center font-bold">
          Our Customer Says
        </h1>
        <div className="center w-[90%]">
          <ReviewSlider />
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;

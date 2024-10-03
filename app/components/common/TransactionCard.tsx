interface transactionCardType {
  image: string;
  title: string;
  description: string;
}

const TransactionCard = ({
  image,
  title,
  description,
}: transactionCardType) => {
  return (
    <div className="xl:w-[23%] lg:w-[47%] md:w-[47.5%] w-full rounded-xl px-8 py-12 flex flex-col lg:items-start items-center lg:justify-start justify-center gap-6 shadow-sm bg-white hover:bg-green transition-all duration-300 ease-in-out">
      <div className="w-[60px] h-[60px]">
        <img src={image} alt="reward" />
      </div>
      <h3 className="font-bold text-[22px]">{title}</h3>
      <p className="font-medium text-[18px] max-w-[230px] lg:text-left text-center">{description}</p>
    </div>
  );
};

export default TransactionCard;

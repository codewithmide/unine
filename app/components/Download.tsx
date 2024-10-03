const DownloadSection = () => {
  return (
    <section className="flex items-center md:gap-24 gap-12 flex-col w-full bg-green py-20 lg:py-28">
      <div className="lg:w-[507px] w-[90%] center flex-col gap-6">
        <h1 className="inter lg:text-xl lg:leading-[55px] md:text-lg text-[22px] text-center font-bold">
          Get Unine App on Google play or App store
        </h1>
        <p className="text-sm text-center w-[80%]">
          Build your financial literacy within a transparent community. Follow
          other investors, share insights with people.
        </p>
        <div className="flex items-center gap-5 w-fulljustify-center">
          <div>
            <img src="/icons/apple.png" alt="appstore" />
          </div>
          <div>
            <img src="/icons/google.png" alt="googleplay" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;

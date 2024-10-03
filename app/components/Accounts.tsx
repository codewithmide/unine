"use client";

import { Button } from "./common/Button";

const AccountSection = () => {
  return (
    <section className="flex items-center md:gap-24 lg:gap-40 gap-12 flex-col w-full bg-white py-20 lg:py-28">
      <div className="w-[85%] center md:flex-row flex-col gap-6 md:gap-0">
        <div className="md:w-[55%] w-full">
          <img src="/images/account.svg" alt="account" />
        </div>
        <div className="lg:w-[45%] md:w-[55%] w-[90%] flex flex-col md:items-start items-center xl:gap-10 gap-6 md:pl-6 xl:pl-0">
          <div className="flex flex-col md:tems-start items-center">
            <h1 className="inter xl:text-xl lg:text-[26px] text-[18px] text-center md:text-left font-bold w-full">
              Keep your cash flow clear 🚀
            </h1>
            <h1 className="inter xl:text-xl lg:text-[26px] text-[18px] text-center md:text-left font-bold w-full">
              and keep increasing 🚀
            </h1>
          </div>
          <p className="text-grey inter xl:text-[20px] text-[14px] md:max-w-[400px] text-center md:text-left">
            See it all at a glance when you link your cash accounts, credit
            cards, investment, and bills.
          </p>
          <Button
            link={() => {}}
            postIcon="/icons/arrow.png"
            children="Try for now"
            classname="inter center gap-3 bg-green px-5 rounded-lg"
          />
        </div>
      </div>

      <div className="w-[85%] center md:flex-row flex-col-reverse gap-6 md:gap-0">
        <div className="lg:w-[40%] md:w-[55%] w-[90%] flex flex-col md:items-start items-center gap-12">
          <div className="flex flex-col md:items-start items-center">
            <h1 className="inter xl:text-xl lg:text-[26px] text-[20px] text-center md:text-left font-bold">
              Manage regular
            </h1>
            <h1 className="inter xl:text-xl lg:text-[26px] text-[20px] text-center md:text-left font-bold">
              payments easily😜
            </h1>
          </div>
          <div className="flex md:items-start items-center flex-col md:flex-row gap-10">
            <div className="flex md:items-start items-center flex-col gap-6">
              <div className="w-[31px] h-[31px]">
                <img src="/svgs/globe.svg" alt="globe" />
              </div>
              <h3 className="font-bold lg:text-[22px]">Globality</h3>
              <p className="font-normal lg:text-[14px] text-[12px] lg:max-w-[220px] md:text-left text-center">
                Send payments to the person in front of you and the rest of the
                world.
              </p>
            </div>
            <div className="flex md:items-start items-center flex-col gap-6">
              <div className="w-[31px] h-[31px]">
                <img src="/svgs/integrate.svg" alt="bank" />
              </div>
              <h3 className="font-bold lg:text-[22px]">Integrate</h3>
              <p className="font-normal lg:text-[14px] text-[12px] lg:max-w-[220px] md:text-left text-center">
                We work with local banks and overseas banks so you don’t have to
                world.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[55%] w-full flex md:items-end md:justify-end">
          <img src="/images/payments.svg" alt="account" />
        </div>
      </div>
    </section>
  );
};

export default AccountSection;

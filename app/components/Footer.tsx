import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <section className="bg-black center flex-col text-grey lg:px-20 pt-10 between w-full pb-6">
      <div className="flex items-center justify-center lg:justify-between lg:flex-row flex-col w-full pb-6 lg:gap-0 gap-10">
        <div className="flex lg:flex-col flex-row gap-10 justify-between lg:justify-start lg:w-fit w-[90%]">
          <Link href="/">
            <Image src="/icons/logo.png" alt="logo" width={124} height={25} />
          </Link>
          <div className="flex items-start gap-3">
            <Image
              src="/icons/twitter.png"
              alt="logo"
              width={24}
              height={24}
              className="my-auto"
            />
            <Image
              src="/icons/instagram.png"
              alt="logo"
              width={24}
              height={24}
              className="my-auto"
            />
            <Image
              src="/icons/discord.png"
              alt="logo"
              width={24}
              height={24}
              className="my-auto"
            />
          </div>
        </div>
        <div className="flex inter font-semibold gap-16 md:flex-row flex-col w-[90%] md:w-fit">
          <div className="flex flex-col items-start">
            <ul>
              <li>Technology Park 8-14</li>
              <li>Marie Curie Street</li>
              <li>08042 Barcelona</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-10">
            <ul className="flex flex-col items-start gap-3">
              <li>Learn</li>
              <li>Apps</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <ul className="flex flex-col items-start gap-3">
              <li>Legal Mentions</li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-grey mt-10 mb-3"></div>
      <p>©2022 COPYRIGHT BY UNINE</p>
    </section>
  );
};

export default FooterSection;

import AccountSection from "./components/Accounts";
import CustomerSection from "./components/Customers";
import DownloadSection from "./components/Download";
import FooterSection from "./components/Footer";
import HeroSection from "./components/Hero";
import TransactionSection from "./components/Transaction";

export default function Home() {
  return (
    <main className="center flex-col w-screen">
      <HeroSection />
      <TransactionSection />
      <AccountSection />
      <CustomerSection />
      <DownloadSection />
      <FooterSection />
    </main>
  );
}

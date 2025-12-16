import { useState } from "react";
import Tabs from "../components/Tabs";
import CryptoToCash from "../ui/CryptoToCash";
import CashToCrypto from "../ui/CashToCrypto";
import CashtoFlatLoan from "../ui/CashtoFlatLoan";

export type TabType = "cryptoToCash" | "cashToCrypto" | "cryptoToFlatLoan";

const CryptoPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("cryptoToCash");
  return (
    <>
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "cryptoToCash" && <CryptoToCash />}
      {activeTab === "cashToCrypto" && <CashToCrypto />}
      {activeTab === "cryptoToFlatLoan" && <CashtoFlatLoan />}
    </>
  );
};

export default CryptoPage;

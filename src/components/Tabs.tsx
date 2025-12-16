import type { TabType } from "../pages/CryptoPage";

interface TabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabList: { label: string; value: TabType }[] = [
  { label: "Crypto to cash", value: "cryptoToCash" },
  { label: "Cash to crypto", value: "cashToCrypto" },
  { label: "Crypto to flat loan", value: "cryptoToFlatLoan" },
];

const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="flex sm:mb-16 mb-10 items-center bg-surface-muted rounded-[3rem]">
      {tabList.map(({ label, value }) => (
        <button
          key={value}
          type="button"
          className={`sm:py-[.8rem] sm:px-[1.6rem] sm:text-[1.6rem] text-[1.4rem] py-2 px-4 ${
            activeTab === value ? "bg-primary-dark text-surface-light" : ""
          } cursor-pointer rounded-[3rem] transition duration-300`}
          onClick={() => onTabChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

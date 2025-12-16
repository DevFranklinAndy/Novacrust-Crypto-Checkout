import { PiCopy } from "react-icons/pi";
import Navigation from "../components/Navigation";
import { BsInfoCircle } from "react-icons/bs";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ethDetails: { label: string; copy: boolean; text: string }[] = [
  { label: "Amount to send", copy: true, text: "100 ETH" },
  { label: "Network", copy: false, text: "ETH" },
  { label: "Wallet", copy: false, text: "Other" },
];

const SendEthPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const completeCryptoPaymentSimulation = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/confirm");
    }, 2000);
  };
  return (
    <>
      <Navigation label="Send ETH to the address below" />

      <button className="bg-accent-lighter border border-accent-light py-[.8rem] px-[1.6rem] rounded-[3rem] text-primary-dark flex items-center gap-[1.1rem] cursor-pointer mt-[.8rem]">
        <span className="font-medium">4LiV4YjbxsL6739MKghUd</span>
        <PiCopy className="text-[2.4rem]" />
      </button>

      <div className="card-list">
        {ethDetails.map(({ label, text, copy }) => (
          <div key={label} className="flex justify-between items-center">
            <p className="text-[1.4rem] text-text-dark-subtle">{label}</p>
            <div className="text-primary-dark space-x-[.8rem] flex items-center">
              <span>{text}</span>
              {copy && <PiCopy className="text-[2.4rem]" />}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-[.8rem] mb-auto">
        <BsInfoCircle className="text-[2.4rem] text-primary-dark" />
        <span className="text-[1.4rem] text-text-dark-subtle">
          Only send {"{USDT}"} to this address. Ensure the sender is on the{" "}
          {"{CELO}"} network otherwise you might lose your deposit
        </span>
      </div>

      <Button
        label={loading ? "Processing..." : "I have sent it"}
        onClick={completeCryptoPaymentSimulation}
      />
    </>
  );
};

export default SendEthPage;

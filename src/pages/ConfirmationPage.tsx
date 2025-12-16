import { PiCopy } from "react-icons/pi";
import novacrustLogo from "../assets/Novacrust_Full_Logo.png";
import { GoCheckCircleFill } from "react-icons/go";
import Button from "../components/Button";
import { Link, useLocation } from "react-router-dom";
import type { BankState, ContactState } from "./RecipientDetailPage";

interface LocationState {
  bank: BankState;
  contact: ContactState;
}

const ConfirmList = ({
  label,
  text,
  copy,
}: {
  label: string;
  text: string;
  copy?: boolean;
}) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-[1.4rem] text-text-dark-subtle">{label}</p>
      <div className="text-primary-dark space-x-[.8rem] flex items-center">
        <span className="text-right">{text}</span>
        {copy && <PiCopy className="text-[2.4rem]" />}
      </div>
    </div>
  );
};

const ConfirmationPage = () => {
  const location = useLocation();
  const state = location.state as LocationState | null;

  if (!state)
    return (
      <div className="text-center space-y-10 mt-36">
        <p className="text-5xl">❌</p>
        <h2 className="font-semibold text-rose-600 uppercase text-[2rem]">
          You are not permitted to view this page
        </h2>
        <Link
          to="/"
          className="border px-[1.6rem] py-[1.4rem] rounded-[3rem] mt-10 inline-block hover:border-rose-500 hover:text-rose-500 transition duration-300"
        >
          Return home
        </Link>
      </div>
    );

  const { bank, contact } = state;
  return (
    <>
      <img
        src={novacrustLogo}
        alt="Novacrust Logo"
        className="h-[2.4rem] mb-[6.6rem]"
      />
      <div className="flex flex-col items-center w-full">
        <GoCheckCircleFill className="text-[8rem] text-[#219653]" />
        <h2 className="text-text-dark text-[2.4rem] font-medium mt-[3.2rem] mb-[.8rem]">
          Your Transaction is processing.
        </h2>
        <span className="text-[2rem] text-text-dark-subtle">
          The recipient will receive it shortly.
        </span>

        <div className="card-list mt-16">
          <ConfirmList label="Transaction" text="NC123456789" copy />
          <ConfirmList label="Phone" text={`(+234) ${contact.phone}`} />
          <ConfirmList label="Email" text={contact.email} />
          <ConfirmList label="Account Number" text={bank.accountNumber} />
          <ConfirmList label="Account Name" text={bank.accountName} />
          <ConfirmList label="Bank" text={bank.bankName} />
        </div>

        <Link to="/" className="w-full">
          <Button
            label="Go back home"
            btnStyle="bg-white text-primary-dark hover:underline transition duration-300"
          />
        </Link>
      </div>
    </>
  );
};

export default ConfirmationPage;

import { HiOutlineChevronDown } from "react-icons/hi";
import { type Item } from "../utils/data";
import Option from "./Options";
import { useState } from "react";

const PaymentSelector = ({
  label,
  array,
}: {
  label: string;
  array: Item[];
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="input-holder">
      <p>Pay {label}</p>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`input-holder__dropdown ${
          isOpen ? "ring-offset-2 ring-primary-dark/70" : "ring-transparent"
        }`}
      >
        <div className="input-holder__select">
          <p className="truncate">Select an option</p>
          <HiOutlineChevronDown className={`input-holder__icon`} />
          {isOpen && <Option array={array} parentStyle="dropdown" />}
        </div>
      </div>
    </div>
  );
};

export default PaymentSelector;

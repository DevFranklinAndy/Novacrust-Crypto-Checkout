import { HiOutlineChevronDown } from "react-icons/hi";
import { type Item } from "../utils/data";
import Option from "./Options";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";

interface TransactionSelectorProps {
  label: string;
  array: Item[];
}

const TransactionSelector = ({ label, array }: TransactionSelectorProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="w-full border-border-default border rounded-[3rem] p-[2.4rem] flex items-end">
        <div className="mr-auto h-full flex flex-col gap-4">
          <p className="font-medium">You {label}</p>
          <h3 className="text-[2.4rem] mt-auto font-semibold text-text-dark">
            1.00
          </h3>
        </div>
        <div
          className="border border-border-default flex items-center rounded-4xl py-[.8rem] px-[1.2rem] gap-2 bg-surface-lightest cursor-pointer relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={array[0].image}
            alt="Ethereum Logo"
            className="w-8 h-8 object-cover rounded-full"
          />
          <p className="text-primary-dark font-clash font-medium">
            {array[0].abbrTitle}
          </p>
          <HiOutlineChevronDown
            className={`${
              isOpen ? "rotate-180" : ""
            } transition duration-300 text-[2rem] text-primary-dark`}
          />

          {isOpen && (
            <Option
              array={array}
              parentStyle="px-[1.2rem] z-50 py-[1.6rem] border border-border-default rounded-4xl space-y-[.8rem] absolute bg-white top-[110%] right-0"
            >
              <div className="border border-border-default rounded-4xl px-[1.6rem] py-[1.2rem] flex items-center gap-[.8rem]">
                <HiMagnifyingGlass size={20} />
                <input
                  type="text"
                  placeholder="Search"
                  className="text-[1.4rem] outline-0"
                />
              </div>
            </Option>
          )}
        </div>
      </div>
    </>
  );
};

export default TransactionSelector;

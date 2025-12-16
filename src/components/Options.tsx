import { type ReactNode } from "react";
import type { Item } from "../utils/data";

const Option = ({
  array,
  children,
  parentStyle,
  onSelect,
}: {
  array: Item[];
  children?: ReactNode;
  parentStyle: string;
  onSelect?: (item: Item) => void;
}) => {
  return (
    <ul className={parentStyle} onClick={(e) => e.stopPropagation()}>
      {children}
      {array.map((data) => {
        return (
          <li
            key={data.id}
            onClick={() => onSelect?.(data)}
            className={`rounded-[1.2rem] p-[1.2rem] flex items-center gap-[.8rem] cursor-pointer hover:bg-surface-subtle transition duration-300`}
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-[2.4rem] h-[2.4rem] rounded-full object-cover border border-accent-light"
            />
            <p className="text-primary-dark text-[1.4rem] font-medium truncate">
              {data.title}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Option;

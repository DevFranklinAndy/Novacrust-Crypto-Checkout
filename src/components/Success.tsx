import { GoCheckCircle } from "react-icons/go";

const Success = ({ success }: { success: string }) => {
  return (
    <div className="text-accent-lighter bg-primary-dark flex items-center gap-5 px-4 py-2 rounded-3xl">
      <GoCheckCircle className="text-[4rem]" /> <span>{success}</span>
    </div>
  );
};

export default Success;

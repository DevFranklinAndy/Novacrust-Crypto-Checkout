import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Navigation = ({ label }: { label: string }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full relative text-center">
      <GoArrowLeft
        onClick={() => navigate(-1)}
        className="text-[2.4rem] col-span-1 text-black cursor-pointer hover:text-gray-700 transition duration-300 inline absolute top-1/2 -translate-y-1/2 left-0"
      />
      <h2 className="font-medium text-primary-dark text-[2rem]">{label}</h2>
    </div>
  );
};

export default Navigation;

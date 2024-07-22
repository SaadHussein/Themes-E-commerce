import { Dispatch } from "react";
import { IoGift, IoCheckmarkCircleOutline } from "react-icons/io5";

const Categories = ({
	category,
	setCategory,
}: {
	category: string;
	setCategory: Dispatch<string>;
}) => {
	return (
		<div className="flex items-center justify-center gap-5">
			<div
				onClick={() => {
					setCategory("Free");
				}}
				className={`duration-300 w-[200px] max-[500px]:w-[125px] border-solid border-[3px] border-[#b0b0b0] flex items-center justify-center gap-2 py-4 rounded-xl cursor-pointer hover:border-[#ea4023] hover:text-[#ea4023] font-semibold ${
					category === "Free" ? "border-[#ea4023] text-[#ea4023]" : ""
				}`}
			>
				<IoGift size={24} /> Free
			</div>
			<div
				onClick={() => {
					setCategory("Premium");
				}}
				className={`duration-300 w-[200px] max-[500px]:w-[125px] border-solid border-[3px] border-[#b0b0b0] flex items-center justify-center gap-2 py-4 rounded-xl cursor-pointer hover:border-[#ea4023] hover:text-[#ea4023] font-semibold ${
					category === "Premium" ? "border-[#ea4023] text-[#ea4023]" : ""
				}`}
			>
				<IoCheckmarkCircleOutline size={24} /> Premium
			</div>
		</div>
	);
};

export default Categories;

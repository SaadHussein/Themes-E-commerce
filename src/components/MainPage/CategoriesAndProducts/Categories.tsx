import { Dispatch } from "react";

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
				className={`duration-300 w-[200px] max-[500px]:w-[125px] border-solid border-[1px] border-[#b0b0b0] flex items-center justify-center py-4 rounded-xl cursor-pointer hover:border-[#ea4023] hover:text-[#ea4023] font-semibold ${
					category === "Free" ? "border-[#ea4023] text-[#ea4023]" : ""
				}`}
			>
				Free
			</div>
			<div
				onClick={() => {
					setCategory("Premium");
				}}
				className={`duration-300 w-[200px] max-[500px]:w-[125px] border-solid border-[1px] border-[#b0b0b0] flex items-center justify-center py-4 rounded-xl cursor-pointer hover:border-[#ea4023] hover:text-[#ea4023] font-semibold ${
					category === "Premium" ? "border-[#ea4023] text-[#ea4023]" : ""
				}`}
			>
				Premium
			</div>
		</div>
	);
};

export default Categories;

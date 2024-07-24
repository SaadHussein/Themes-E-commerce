import { ProductDetailsSchema } from "@/utils/types";
import { useState } from "react";
import Reviews from "./Reviews";
import Description from "./Description";

const DescriptionAndReviews = ({
	productDetails,
}: {
	productDetails: ProductDetailsSchema | null;
}) => {
	const [selectedTap, setSelectedTap] = useState<string>("Description");
	return (
		<div className="w-full">
			<div className="flex items-center justify-center gap-5">
				<div
					onClick={() => {
						setSelectedTap("Description");
					}}
					className={`duration-300 w-[200px] max-[500px]:w-[125px] border-solid border-[3px] border-[#b0b0b0] flex items-center justify-center gap-2 py-4 rounded-xl cursor-pointer hover:border-[#ea4023] hover:text-[#ea4023] font-semibold ${
						selectedTap === "Description"
							? "border-[#ea4023] text-[#ea4023]"
							: ""
					}`}
				>
					Description
				</div>
				<div
					onClick={() => {
						setSelectedTap("Reviews");
					}}
					className={`duration-300 w-[200px] max-[500px]:w-[125px] border-solid border-[3px] border-[#b0b0b0] flex items-center justify-center gap-2 py-4 rounded-xl cursor-pointer hover:border-[#ea4023] hover:text-[#ea4023] font-semibold ${
						selectedTap === "Reviews" ? "border-[#ea4023] text-[#ea4023]" : ""
					}`}
				>
					Reviews
				</div>
			</div>
			{selectedTap === "Description" && (
				<Description productDetails={productDetails} />
			)}
			{selectedTap === "Reviews" && <Reviews productDetails={productDetails} />}
		</div>
	);
};

export default DescriptionAndReviews;

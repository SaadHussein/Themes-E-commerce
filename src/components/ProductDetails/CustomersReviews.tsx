import { ProductDetailsSchema } from "@/utils/types";
import { IoStar } from "react-icons/io5";

const CustomersReviews = ({
	productDetails,
}: {
	productDetails: ProductDetailsSchema | null;
}) => {
	return (
		<div>
			<p className="text-[24px] font-medium mb-5">Customers Reviews</p>
			{productDetails?.reviews.length === 0 && (
				<p className="text-[20px] font-medium">Sorry, New Reviews Until Now.</p>
			)}
			{productDetails?.reviews.length !== 0 && (
				<div className="w-full flex items-start justify-between flex-wrap gap-3">
					{productDetails?.reviews.map((review) => (
						<div className="flex items-start justify-start flex-col w-[300px] p-3 border-solid border-[3px] rounded-lg duration-300 cursor-pointer hover:border-[#ea4023]">
							<div className="w-full flex items-center justify-between">
								<h2 className="font-medium text-[20px]">{review.user}</h2>
								<div className="flex items-center justify-end">
									{review.rating >= 1 && <IoStar color="gold" />}
									{review.rating >= 2 && <IoStar color="gold" />}
									{review.rating >= 3 && <IoStar color="gold" />}
									{review.rating >= 4 && <IoStar color="gold" />}
									{review.rating >= 5 && <IoStar color="gold" />}
								</div>
							</div>
							<p className="text-[18px] mt-4">{review.comment}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CustomersReviews;

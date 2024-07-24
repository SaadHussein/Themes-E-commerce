import { ProductDetailsSchema } from "@/utils/types";
import { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";

const ProductDetailsHeader = ({
	productDetails,
}: {
	productDetails: ProductDetailsSchema | null;
}) => {
	const [averageRating, setAverageRatings] = useState<number>(0);

	useEffect(() => {
		if (productDetails?.reviews.length === 0) {
			return;
		}

		const sum = productDetails?.reviews
			? productDetails?.reviews.reduce((acc, rating) => acc + rating.rating, 0)
			: 0;

		const average = productDetails?.reviews.length
			? sum / productDetails?.reviews.length
			: 0;
		setAverageRatings(average);
	}, [productDetails]);
	return (
		<div className="flex items-start justify-center gap-16 my-20 max-[850px]:flex-col max-[850px]:gap-2">
			<div className="w-[500px] h-[400px] max-[550px]:w-[325px] max-[550px]:h-[325px] max-[360px]:w-[300px] max-[360px]:h-[300px]">
				<img
					className="w-full h-full object-cover"
					src={productDetails?.images[0].url}
					alt={productDetails?.images[0].image_name}
				/>
			</div>
			<div className="flex items-start justify-start flex-col mt-10 max-[850px]:mt-2">
				<h1 className="text-[36px] font-bold">{productDetails?.name}</h1>
				<div className="flex items-start justify-start flex-col my-2">
					<p className="text-[20px] font-medium">
						Number Of Reviews: {productDetails?.reviews.length}
					</p>
					<div className="flex items-center justify-center gap-2">
						<IoStar
							size={20}
							className="cursor-pointer"
							color={averageRating >= 1 ? "gold" : "gray"}
						/>
						<IoStar
							size={20}
							className="cursor-pointer"
							color={averageRating >= 2 ? "gold" : "gray"}
						/>
						<IoStar
							size={20}
							className="cursor-pointer"
							color={averageRating >= 3 ? "gold" : "gray"}
						/>
						<IoStar
							size={20}
							className="cursor-pointer"
							color={averageRating >= 4 ? "gold" : "gray"}
						/>
						<IoStar
							size={20}
							className="cursor-pointer"
							color={averageRating >= 5 ? "gold" : "gray"}
						/>
						{<p className="text-[20px] font-medium">{averageRating}</p>}
					</div>
				</div>
				<p className="text-[20px] font-medium mb-2">
					Price: ${productDetails?.price}
				</p>
				<p className="text-[20px] font-medium mb-2">
					Product Category: {productDetails?.category}
				</p>
				{productDetails?.category === "For Free" && (
					<a
						href={productDetails?.download_url}
						download={true}
						className="p-2 duration-300 bg-[#ea4023] hover:bg-[#ff694f] text-white rounded-md"
					>
						Download Theme For Free
					</a>
				)}
				{productDetails?.category !== "For Free" && (
					<div className="p-2 duration-300 bg-[#ea4023] hover:bg-[#ff694f] text-white rounded-md">
						Buy Theme
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductDetailsHeader;

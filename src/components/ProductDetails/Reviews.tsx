import { ProductDetailsSchema } from "@/utils/types";
import CustomersReviews from "./CustomersReviews";
import AddReview from "./AddReview";

const Reviews = ({
	productDetails,
}: {
	productDetails: ProductDetailsSchema | null;
}) => {
	return (
		<div className="w-full px-20 max-[500px]:px-5 mt-8">
			<AddReview productDetails={productDetails} />
			<CustomersReviews productDetails={productDetails} />
		</div>
	);
};

export default Reviews;

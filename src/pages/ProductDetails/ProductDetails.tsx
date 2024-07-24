import DescriptionAndReviews from "@/components/ProductDetails/DescriptionAndReviews";
import ProductDetailsHeader from "@/components/ProductDetails/ProductDetailsHeader";
import { ProductDetailsSchema, State } from "@/utils/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
	const params = useParams();
	const token = useSelector((state: State) => state.Global.token);
	const [loading, setLoading] = useState<boolean>(true);
	const [productDetails, setProductDetails] =
		useState<ProductDetailsSchema | null>(null);

	useEffect(() => {
		const getProductDetails = async () => {
			try {
				const productDetails = await fetch(
					`http://mohamedahmed124-001-site1.ltempurl.com/api/products/${params.id}`,
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const result = await productDetails.json();
				setLoading(false);
				setProductDetails(result);
				console.log(result);
			} catch (error) {
				throw new Error("Error Happened While Fetch Data.");
			}
		};

		getProductDetails();
	}, [params.id, token]);
	return (
		<>
			{loading ? (
				<div className="w-full flex items-center justify-center my-20 h-[800px]">
					<p className="text-[24px] font-semibold">Loading Product Details</p>
				</div>
			) : (
				<div className="w-full flex items-center justify-center flex-col">
					<ProductDetailsHeader productDetails={productDetails} />
					<DescriptionAndReviews productDetails={productDetails} />
				</div>
			)}
		</>
	);
};

export default ProductDetails;

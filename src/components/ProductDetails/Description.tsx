import { FreeProduct, ProductDetailsSchema, State } from "@/utils/types";
import ProductItem from "../MainPage/CategoriesAndProducts/ProductItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Description = ({
	productDetails,
}: {
	productDetails: ProductDetailsSchema | null;
}) => {
	const freeProducts = useSelector((state: State) => state.Global.freeProducts);

	return (
		<div className="w-full px-20 max-[500px]:px-5 mt-8">
			<div>
				<h1 className="text-[28px] font-medium">Product Description</h1>
				<p className="text-[21px] mt-2">{productDetails?.description}</p>
			</div>
			<div>
				<h1 className="text-[28px] font-medium mt-8">Support</h1>
				<p className="text-[21px] mt-2">
					Need support ? Through us an email at support@devstore.com we’re
					always glad to help you.
				</p>
			</div>
			<div>
				<h1 className="text-[28px] font-medium mt-8">Related Products</h1>
				{productDetails?.category === "For Free" && (
					<div className="grid grid-cols-3 gap-8 max-[1250px]:grid-cols-2 max-[850px]:grid-cols-1 pt-8">
						{freeProducts.slice(5, 8).map((product: FreeProduct) => (
							<ProductItem
								price={product.price}
								name={product.name}
								category_id={product.category_id}
								description={product.description}
								id={product.id}
								images={product.images}
								key={product.category_id + product.id + product.description}
							/>
						))}
					</div>
				)}
				{productDetails?.category !== "For Free" && (
					<p className="text-[20px] font-normal">
						If You Want To See More Premium Products, We Recommend For You To Go
						To Premium Products Page.{" "}
						<Link to={"/premium-products"} className="text-[#ea4023]">
							Click Here To See More Premium Products
						</Link>
					</p>
				)}
			</div>
		</div>
	);
};

export default Description;

import { Product, State } from "@/utils/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { setAllProductsInRedux } from "@/app/Global";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PremiumProducts = () => {
	const token = useSelector((state: State) => state.Global.token);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState<boolean>(true);
	const [premiumProducts, setPremiumProducts] = useState<Product[]>([]);
	const allProductsFromRedux = useSelector(
		(state: State) => state.Global.allProducts
	);

	useEffect(() => {
		const getPremiumProducts = async () => {
			if (allProductsFromRedux.length !== 0) {
				setPremiumProducts([...allProductsFromRedux]);
				setLoading(false);
			} else {
				const premiumProducts = await fetch(
					"http://mohamedahmed124-001-site1.ltempurl.com/api/products",
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const result = await premiumProducts.json();
				setPremiumProducts([...result.data]);
				dispatch(setAllProductsInRedux({ value: result.data }));
				setLoading(false);
				console.log(result);
			}
		};
		getPremiumProducts();
	}, [token, allProductsFromRedux, dispatch]);
	return (
		<>
			{token === "" ? (
				<div className="mt-20 mb-10" data-aos="fade-up">
					<p className="text-[24px] font-semibold text-center">
						You Should Login First To See Products
					</p>
				</div>
			) : loading ? (
				<div className="w-full">
					<p className="text-center w-full flex items-center justify-center font-semibold text-[24px] mt-10">
						Loading Products...
					</p>
				</div>
			) : (
				<>
					<div className="grid grid-cols-3 gap-8 max-[1250px]:grid-cols-2 max-[850px]:grid-cols-1 pt-8">
						{premiumProducts.slice(0, 21).map((product: Product) => (
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
					<div className="flex items-center justify-center w-full mt-10">
						<Button
							className="bg-[#ea4023] hover:bg-[#ff6c53]"
							onClick={() => {
								navigate("/premium-products");
							}}
						>
							Show More
						</Button>
					</div>
				</>
			)}
		</>
	);
};

export default PremiumProducts;

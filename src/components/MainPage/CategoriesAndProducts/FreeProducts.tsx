import { FreeProduct, State } from "@/utils/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const FreeProducts = () => {
	const token = useSelector((state: State) => state.Global.token);
	const [freeProducts, setFreeProducts] = useState<FreeProduct[]>([]);

	useEffect(() => {
		const getFreeProducts = async () => {
			const freeProducts = await fetch(
				"http://mohamedahmed124-001-site1.ltempurl.com/api/categories/13/products",
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			const result = await freeProducts.json();
			setFreeProducts([...result.data]);
			console.log(result);
		};

		getFreeProducts();
	}, [token]);
	return (
		<>
			{token === "" ? (
				<div className="mt-20 mb-10">
					<p className="text-[24px] font-semibold">
						You Should Login First To See Products
					</p>
				</div>
			) : (
				<div className="grid grid-cols-3 gap-8 max-[1250px]:grid-cols-2 max-[850px]:grid-cols-1 pt-8">
					{freeProducts.map((product) => (
						<ProductItem
							price={product.price}
							name={product.name}
							category_id={product.category_id}
							description={product.description}
							id={product.id}
							images={product.images}
							key={product.category_id + product.id}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default FreeProducts;

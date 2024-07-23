import { setFreeProductsInRedux } from "@/app/Global";
import { FreeProduct, State } from "@/utils/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../MainPage/CategoriesAndProducts/ProductItem";
import { Input } from "../ui/input";

const ProductsFree = () => {
	const token = useSelector((state: State) => state.Global.token);
	const [search, setSearch] = useState<string>("");
	const dispatch = useDispatch();
	const [loading, setLoading] = useState<boolean>(true);
	const [freeProducts, setFreeProducts] = useState<FreeProduct[]>([]);
	const FreeProductsFromRedux = useSelector(
		(state: State) => state.Global.freeProducts
	);

	useEffect(() => {
		const getFreeProducts = async () => {
			if (FreeProductsFromRedux.length !== 0) {
				setFreeProducts([...FreeProductsFromRedux]);
				setLoading(false);
			} else {
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
				dispatch(setFreeProductsInRedux({ value: result.data }));
				setLoading(false);
				console.log(result);
			}
		};

		getFreeProducts();
	}, [token, FreeProductsFromRedux, dispatch]);

	const handleProductSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === "") {
			setFreeProducts([...FreeProductsFromRedux]);
		} else {
			const searchedProducts = freeProducts.filter((product: FreeProduct) =>
				product.name.toLowerCase().startsWith(e.target.value.toLowerCase())
			);
			setFreeProducts([...searchedProducts]);
		}
		setSearch(e.target.value);
	};
	return (
		<>
			<Input
				type="text"
				data-aos="fade-up"
				placeholder="Search By Name..."
				value={search}
				onChange={handleProductSearch}
				className="w-[25%] max-[1100px]:w-[50%] max-[550px]:w-[100%] border-[3px] outline-none"
			/>
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
				<div className="grid grid-cols-3 gap-8 max-[1250px]:grid-cols-2 max-[850px]:grid-cols-1 pt-8">
					{freeProducts.map((product: FreeProduct) => (
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
		</>
	);
};

export default ProductsFree;

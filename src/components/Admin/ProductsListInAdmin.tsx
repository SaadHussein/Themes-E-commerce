import { Product, State } from "@/utils/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductItemInAdmin from "./ProductItemInAdmin";
import { Input } from "../ui/input";

const ProductsListInAdmin = () => {
	const token = useSelector((state: State) => state.Global.token);
	const [loading, setLoading] = useState<boolean>(true);
	const allProductsFromRedux = useSelector(
		(state: State) => state.Global.allProducts
	);
	const [products, setProducts] = useState<Product[]>([]);
	const [search, setSearch] = useState<string>("");
	const [searchByDescription, setSearchByDescription] = useState<string>("");

	useEffect(() => {
		setProducts([...allProductsFromRedux]);
		setLoading(false);
	}, [allProductsFromRedux]);

	const handleProductSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === "") {
			setProducts([...allProductsFromRedux]);
			setSearchByDescription("");
		} else {
			const searchedProducts = products.filter((product: Product) =>
				product.name.toLowerCase().startsWith(e.target.value.toLowerCase())
			);
			setProducts([...searchedProducts]);
		}
		setSearch(e.target.value);
	};

	const handleProductSearchByDescription = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		if (e.target.value === "") {
			setProducts([...allProductsFromRedux]);
			setSearch("");
		} else {
			const searchedProducts = products.filter((product: Product) =>
				product.description.toLowerCase().includes(e.target.value.toLowerCase())
			);
			setProducts([...searchedProducts]);
		}
		setSearchByDescription(e.target.value);
	};
	return (
		<div className="w-full my-12 border-solid border-b-[3px] border-black pb-8">
			<h1 className="w-full flex items-center justify-start text-[32px] font-bold mb-4">
				Update and Delete Product
			</h1>
			<>
				<div className="w-full flex items-center justify-center flex-col">
					<Input
						type="text"
						data-aos="fade-up"
						placeholder="Search By Name..."
						value={search}
						onChange={handleProductSearch}
						className="w-[25%] max-[1100px]:w-[50%] max-[550px]:w-[100%] border-[3px] outline-none"
					/>
					<Input
						type="text"
						data-aos="fade-up"
						placeholder="Search By Description..."
						value={searchByDescription}
						onChange={handleProductSearchByDescription}
						className="w-[25%] max-[1100px]:w-[50%] max-[550px]:w-[100%] border-[3px] outline-none mt-2"
					/>
				</div>
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
						{products.map((product: Product) => (
							<ProductItemInAdmin
								price={product.price}
								name={product.name}
								category_id={product.category_id}
								id={product.id}
								images={product.images}
								key={product.category_id + product.id + product.name}
							/>
						))}
					</div>
				)}
			</>
		</div>
	);
};

export default ProductsListInAdmin;

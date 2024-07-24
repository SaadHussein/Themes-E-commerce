import { Input } from "../ui/input";
import { useSelector } from "react-redux";
import { Product, State } from "@/utils/types";
import ProductItem from "../MainPage/CategoriesAndProducts/ProductItem";
import { Button } from "../ui/button";
import { Dispatch } from "react";

const ProductsPremium = ({
	search,
	loading,
	premiumProducts,
	handleProductSearch,
	searchByDescription,
	handleSearchProductsByDescription,
	setMaxPrice,
	setMinPrice,
	maxPrice,
	minPrice,
	handleSearchByPrice,
	ResetSearch,
}: {
	search: string;
	searchByDescription: string;
	loading: boolean;
	premiumProducts: Product[];
	handleProductSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSearchProductsByDescription: (
		e: React.ChangeEvent<HTMLInputElement>
	) => void;
	minPrice: number;
	maxPrice: number;
	setMinPrice: Dispatch<number>;
	setMaxPrice: Dispatch<number>;
	handleSearchByPrice: () => void;
	ResetSearch: () => void;
}) => {
	const token = useSelector((state: State) => state.Global.token);

	return (
		<>
			<div className="flex items-center justify-between w-full max-[1000px]:flex-col">
				<div className="flex items-center justify-center gap-2 max-[650px]:flex-col">
					<Input
						type="text"
						data-aos="fade-up"
						placeholder="Search By Name..."
						value={search}
						onChange={handleProductSearch}
						className="w-[300px] max-[350px]:w-[250px] border-[3px] outline-none"
					/>
					<Input
						type="text"
						data-aos="fade-up"
						placeholder="Search By Description..."
						value={searchByDescription}
						onChange={handleSearchProductsByDescription}
						className="w-[300px] max-[350px]:w-[250px] border-[3px] outline-none"
					/>
				</div>
				<div className="flex items-center justify-center gap-3 flex-col mt-3">
					<p className="font-semibold text-[18px]">Search By Price:</p>
					<div>
						<Input
							type="number"
							data-aos="fade-up"
							placeholder="From"
							value={minPrice}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setMinPrice(+e.target.value);
							}}
							className="w-full border-[3px] outline-none mt-2"
						/>
						<Input
							type="number"
							data-aos="fade-up"
							placeholder="To"
							value={maxPrice}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setMaxPrice(+e.target.value);
							}}
							className="w-full border-[3px] outline-none mt-2"
						/>
					</div>
					<div className="flex items-center justify-center gap-2">
						<Button
							className="bg-[#ea4023] hover:bg-[#ff6b51]"
							onClick={handleSearchByPrice}
						>
							Search By Price
						</Button>
						<Button
							className="bg-[#ea4023] hover:bg-[#ff6b51]"
							onClick={ResetSearch}
						>
							Reset All Search
						</Button>
					</div>
				</div>
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
					{premiumProducts.map((product: Product) => (
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

export default ProductsPremium;

import { Input } from "../ui/input";
import { useSelector } from "react-redux";
import { Product, State } from "@/utils/types";
import ProductItem from "../MainPage/CategoriesAndProducts/ProductItem";

const ProductsPremium = ({
	search,
	loading,
	premiumProducts,
	handleProductSearch,
}: {
	search: string;
	loading: boolean;
	premiumProducts: Product[];
	handleProductSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	const token = useSelector((state: State) => state.Global.token);

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

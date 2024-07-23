import FreeProductsTitle from "@/components/FreeProductsPage/FreeProductsTitle";
import ProductsFree from "@/components/FreeProductsPage/ProductsFree";
import Subscribe from "@/components/MainPage/Subscribe";

const FreeProductsPage = () => {
	return (
		<div className="flex items-center justify-center flex-col px-20 max-[500px]:px-8">
			<FreeProductsTitle />
			<ProductsFree />
			<Subscribe />
		</div>
	);
};

export default FreeProductsPage;

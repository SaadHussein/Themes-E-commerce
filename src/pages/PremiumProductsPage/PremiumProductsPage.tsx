import Subscribe from "@/components/MainPage/Subscribe";
import PremiumProductsTitleAndCategories from "@/components/PremiumProductsPage/PremiumProductsTitleAndCategories";
import ProductsPremium from "@/components/PremiumProductsPage/ProductsPremium";
import { useState } from "react";

const PremiumProductsPage = () => {
	const [categoryItem, setCategoryItem] = useState<string>("All");
	return (
		<div className="flex items-center justify-center flex-col px-20 max-[500px]:px-8">
			<PremiumProductsTitleAndCategories
				categoryItem={categoryItem}
				setCategoryItem={setCategoryItem}
			/>
			<ProductsPremium />
			<Subscribe />
		</div>
	);
};

export default PremiumProductsPage;

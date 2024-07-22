import { useState } from "react";
import Categories from "./Categories";
import FreeProducts from "./FreeProducts";
import PremiumProducts from "./PremiumProducts";

const CategoriesAndProducts = () => {
	const [category, setCategory] = useState<string>("Free");
	return (
		<div className="flex items-center justify-center flex-col w-full py-10">
			<div data-aos="fade-up" data-aos-duration="500">
				<Categories category={category} setCategory={setCategory} />
			</div>
			{category === "Free" && <FreeProducts />}
			{category === "Premium" && <PremiumProducts />}
		</div>
	);
};

export default CategoriesAndProducts;

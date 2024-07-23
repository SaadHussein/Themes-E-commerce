// import { setAllProductsInRedux, setFreeProductsInRedux } from "@/app/Global";
import CategoriesAndProducts from "@/components/MainPage/CategoriesAndProducts/CategoriesAndProducts";
import HeroSection from "@/components/MainPage/HeroSection";
import Subscribe from "@/components/MainPage/Subscribe";
// import { State } from "@/utils/types";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
	// const token = useSelector((state: State) => state.Global.token);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	const getFreeProducts = async () => {
	// 		const freeProducts = await fetch(
	// 			"http://mohamedahmed124-001-site1.ltempurl.com/api/categories/13/products",
	// 			{
	// 				method: "GET",
	// 				headers: {
	// 					Authorization: `Bearer ${token}`,
	// 				},
	// 			}
	// 		);

	// 		const result = await freeProducts.json();
	// 		console.log(result);
	// 		dispatch(setFreeProductsInRedux({ value: result.data }));
	// 	};

	// 	if (token !== "") {
	// 		getFreeProducts();
	// 	}
	// }, [token, dispatch]);

	// useEffect(() => {
	// 	const getPremiumProducts = async () => {
	// 		const premiumProducts = await fetch(
	// 			"http://mohamedahmed124-001-site1.ltempurl.com/api/products",
	// 			{
	// 				method: "GET",
	// 				headers: {
	// 					Authorization: `Bearer ${token}`,
	// 				},
	// 			}
	// 		);

	// 		const result = await premiumProducts.json();
	// 		console.log(result);
	// 		dispatch(setAllProductsInRedux({ value: result.data }));
	// 	};

	// 	if (token !== "") {
	// 		getPremiumProducts();
	// 	}
	// }, [token, dispatch]);
	return (
		<div className="flex items-center justify-center flex-col px-20 max-[500px]:px-8">
			<HeroSection />
			<CategoriesAndProducts />
			<Subscribe />
		</div>
	);
};

export default MainPage;

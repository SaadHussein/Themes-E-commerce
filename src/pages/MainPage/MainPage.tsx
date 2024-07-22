import CategoriesAndProducts from "@/components/MainPage/CategoriesAndProducts/CategoriesAndProducts";
import HeroSection from "@/components/MainPage/HeroSection";
import Subscribe from "@/components/MainPage/Subscribe";

const MainPage = () => {
	return (
		<div className="flex items-center justify-center flex-col px-20 max-[500px]:px-8">
			<HeroSection />
			<CategoriesAndProducts />
			<Subscribe />
		</div>
	);
};

export default MainPage;

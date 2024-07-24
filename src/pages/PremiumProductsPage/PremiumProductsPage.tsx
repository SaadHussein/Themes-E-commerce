import { setAllProductsInRedux } from "@/app/Global";
import Subscribe from "@/components/MainPage/Subscribe";
import PremiumProductsTitleAndCategories from "@/components/PremiumProductsPage/PremiumProductsTitleAndCategories";
import ProductsPremium from "@/components/PremiumProductsPage/ProductsPremium";
import { Product, State } from "@/utils/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PremiumProductsPage = () => {
	const [categoryItem, setCategoryItem] = useState<string>("All");
	const [categoryID, setCategoryID] = useState<number>(0);
	const allProductsFromRedux = useSelector(
		(state: State) => state.Global.allProducts
	);
	const [premiumProducts, setPremiumProducts] = useState<Product[]>([]);
	const token = useSelector((state: State) => state.Global.token);
	const [search, setSearch] = useState<string>("");
	const [searchByDescription, setSearchByDescription] = useState<string>("");
	const dispatch = useDispatch();
	const [loading, setLoading] = useState<boolean>(true);
	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(0);

	useEffect(() => {
		if (categoryID === 0) {
			const filteredProducts = allProductsFromRedux.filter(
				(product: Product) => product.category_id !== 13
			);
			setPremiumProducts([...filteredProducts]);
		} else {
			const filteredProducts = allProductsFromRedux.filter(
				(product: Product) => product.category_id === categoryID
			);
			setPremiumProducts([...filteredProducts]);
		}
		setMinPrice(0);
		setMaxPrice(0);
		setSearch("");
		setSearchByDescription("");
	}, [categoryID, allProductsFromRedux]);

	useEffect(() => {
		const getOremiumProducts = async () => {
			if (allProductsFromRedux.length !== 0) {
				const filteredProducts = allProductsFromRedux.filter(
					(product: Product) => product.category_id !== 13
				);
				setPremiumProducts([...filteredProducts]);
				setLoading(false);
			} else {
				const freeProducts = await fetch(
					"http://mohamedahmed124-001-site1.ltempurl.com/api/categories/products",
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const result = await freeProducts.json();
				const filteredProducts = result.data.filter(
					(product: Product) => product.category_id !== 13
				);
				setPremiumProducts([...filteredProducts]);
				dispatch(setAllProductsInRedux({ value: result.data }));
				setLoading(false);
				console.log(result);
			}
		};

		getOremiumProducts();
	}, [token, allProductsFromRedux, dispatch]);

	const handleProductSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === "") {
			if (categoryID === 0) {
				setPremiumProducts([...allProductsFromRedux]);
			} else {
				const filteredProducts = allProductsFromRedux.filter(
					(product: Product) => product.category_id === categoryID
				);
				setPremiumProducts([...filteredProducts]);
			}
			setSearchByDescription("");
		} else {
			const searchedProducts = premiumProducts.filter((product: Product) =>
				product.name.toLowerCase().startsWith(e.target.value.toLowerCase())
			);
			setPremiumProducts([...searchedProducts]);
		}
		setSearch(e.target.value);
	};

	const handleSearchProductsByDescription = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		if (e.target.value === "") {
			if (categoryID === 0) {
				setPremiumProducts([...allProductsFromRedux]);
			} else {
				const filteredProducts = allProductsFromRedux.filter(
					(product: Product) => product.category_id === categoryID
				);
				setPremiumProducts([...filteredProducts]);
			}
			setSearch("");
		} else {
			const searchedProducts = premiumProducts.filter((product: Product) =>
				product.description.toLowerCase().includes(e.target.value.toLowerCase())
			);
			setPremiumProducts([...searchedProducts]);
		}
		setSearchByDescription(e.target.value);
	};

	const handleSearchByPrice = () => {
		const filteredProducts = premiumProducts.filter(
			(product: Product) =>
				+product.price >= minPrice && +product.price <= maxPrice
		);

		setPremiumProducts([...filteredProducts]);
	};

	const ResetSearch = () => {
		setMaxPrice(0);
		setMinPrice(0);
		setSearch("");
		setSearchByDescription("");

		if (categoryID === 0) {
			const filteredProducts = allProductsFromRedux.filter(
				(product: Product) => product.category_id !== 13
			);
			setPremiumProducts([...filteredProducts]);
		} else {
			const filteredProducts = allProductsFromRedux.filter(
				(product: Product) => product.category_id === categoryID
			);
			setPremiumProducts([...filteredProducts]);
		}
	};
	return (
		<div className="flex items-center justify-center flex-col px-20 max-[500px]:px-8">
			<PremiumProductsTitleAndCategories
				categoryItem={categoryItem}
				setCategoryItem={setCategoryItem}
				setCategoryID={setCategoryID}
			/>
			<ProductsPremium
				handleProductSearch={handleProductSearch}
				handleSearchProductsByDescription={handleSearchProductsByDescription}
				searchByDescription={searchByDescription}
				loading={loading}
				premiumProducts={premiumProducts}
				search={search}
				minPrice={minPrice}
				maxPrice={maxPrice}
				setMinPrice={setMinPrice}
				setMaxPrice={setMaxPrice}
				handleSearchByPrice={handleSearchByPrice}
				ResetSearch={ResetSearch}
			/>
			<Subscribe />
		</div>
	);
};

export default PremiumProductsPage;

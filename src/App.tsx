import { Routes, Route } from "react-router-dom";
import "./App.css";
import PagesOutlet from "./pages/PagesOutlet/PagesOutlet";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import MainPage from "./pages/MainPage/MainPage";
import FreeProductsPage from "./pages/FreeProductsPage/FreeProductsPage";
import { State } from "@/utils/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllProductsInRedux, setFreeProductsInRedux } from "@/app/Global";
import PremiumProductsPage from "./pages/PremiumProductsPage/PremiumProductsPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MyOrders from "./pages/MyOrders/MyOrders";
import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import AdminUpdateProduct from "./pages/Admin/AdminUpdateProduct";

function App() {
	const token = useSelector((state: State) => state.Global.token);
	const dispatch = useDispatch();

	useEffect(() => {
		const getFreeProducts = async () => {
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
			console.log(result);
			dispatch(setFreeProductsInRedux({ value: result.data }));
		};

		if (token !== "") {
			getFreeProducts();
		}
	}, [token, dispatch]);

	useEffect(() => {
		const getPremiumProducts = async () => {
			const premiumProducts = await fetch(
				"http://mohamedahmed124-001-site1.ltempurl.com/api/products",
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			const result = await premiumProducts.json();
			console.log(result);
			dispatch(setAllProductsInRedux({ value: result.data }));
		};

		if (token !== "") {
			getPremiumProducts();
		}
	}, [token, dispatch]);
	return (
		<main className="w-full h-full">
			<Routes>
				<Route path="/" element={<PagesOutlet />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/free-products" element={<FreeProductsPage />} />
					<Route path="/premium-products" element={<PremiumProductsPage />} />
					<Route path="/products/:id" element={<ProductDetails />} />
					<Route path="/my-orders" element={<MyOrders />} />
					<Route path="/about" element={<About />} />
					<Route path="/admin" element={<Admin />} />
					<Route
						path="/admin/update-product/:id"
						element={<AdminUpdateProduct />}
					/>
				</Route>
			</Routes>
		</main>
	);
}

export default App;

import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";

const PagesOutlet = () => {
	return (
		<div className="w-full h-full">
			<Header />
			<Outlet />
			<Toaster />
			<Footer />
		</div>
	);
};

export default PagesOutlet;

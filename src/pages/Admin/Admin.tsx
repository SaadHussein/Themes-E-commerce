import CreateProduct from "@/components/Admin/CreateProduct";
import ProductsListInAdmin from "@/components/Admin/ProductsListInAdmin";
import { State } from "@/utils/types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Admin = () => {
	const navigate = useNavigate();
	const email = useSelector((state: State) => state.Global.email);
	useEffect(() => {
		if (email !== "amomo8227@gmail.com") {
			navigate("/");
		}
	}, [email, navigate]);
	return (
		<div className="flex items-center justify-center flex-col px-20 max-[500px]:px-8">
			<CreateProduct />
			<ProductsListInAdmin />
		</div>
	);
};

export default Admin;

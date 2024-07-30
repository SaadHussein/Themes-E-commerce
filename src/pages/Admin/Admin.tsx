import CreateProduct from "@/components/Admin/CreateProduct";
import ProductsListInAdmin from "@/components/Admin/ProductsListInAdmin";

const Admin = () => {
	return (
		<div className="flex items-center justify-center flex-col px-20 max-[500px]:px-8">
			<CreateProduct />
			<ProductsListInAdmin />
		</div>
	);
};

export default Admin;

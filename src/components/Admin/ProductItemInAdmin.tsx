import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { FreeProduct, Product, State } from "@/utils/types";
import { setAllProductsInRedux, setFreeProductsInRedux } from "@/app/Global";
import { Dispatch } from "react";

const ProductItemInAdmin = ({
	images,
	name,
	price,
	id,
	setSearch,
	setSearchByDescription,
}: {
	images: string[];
	name: string;
	price: string;
	id: number;
	setSearch: Dispatch<string>;
	setSearchByDescription: Dispatch<string>;
}) => {
	const navigate = useNavigate();
	const token = useSelector((state: State) => state.Global.token);
	const allProductsInRedux = useSelector(
		(state: State) => state.Global.allProducts
	);
	const allFreeInRedux = useSelector(
		(state: State) => state.Global.freeProducts
	);
	const dispatch = useDispatch();

	const handleDeleteItem = async () => {
		try {
			const deleteItemResponse = await fetch(
				`http://mohamedahmed124-001-site1.ltempurl.com/api/admin/delete/${id}?_method=delete`,
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${token}`,
						Accept: "application/json",
					},
				}
			);

			const result = await deleteItemResponse.json();
			console.log(result);
			const newAllProducts = allProductsInRedux.filter(
				(product: Product) => product.id !== id
			);
			const newFreeProducts = allFreeInRedux.filter(
				(product: FreeProduct) => product.id !== id
			);
			dispatch(setAllProductsInRedux({ value: [...newAllProducts] }));
			dispatch(setFreeProductsInRedux({ value: [...newFreeProducts] }));
			setSearch("");
			setSearchByDescription("");
		} catch (error) {
			console.log(error);
			throw new Error("Error Happened While Deleting Item");
		}
	};
	return (
		<div
			data-aos="fade-up"
			className="bg-white rounded-lg border-solid border-[3px]"
		>
			<div
				className={`h-[250px] ${
					images.length === 0 ? "flex items-center justify-center" : ""
				}`}
			>
				{images.length !== 0 && (
					<img
						src={images[0]}
						className="  object-cover h-full w-full rounded-t-lg cursor-pointer "
						alt="Product-Image"
					/>
				)}
				{images.length === 0 && (
					<p className="font-semibold text-[21px]">Sorry, No Image</p>
				)}
			</div>
			<div className="p-2">
				<div className="flex items-center justify-between">
					<p className="font-semibold text-[18px]">{name}</p>
					<p className="font-semibold text-[18px]">${price}</p>
				</div>
				<div className="w-full flex justify-end gap-2 max-[850px]:flex-col">
					<Button
						onClick={() => {
							navigate(`/products/${id}`);
						}}
						className="bg-[#ea4023] hover:bg-[#ff6b51] p-2 mt-2 max-[850px]:w-full"
					>
						Show Details
					</Button>
					<Button
						onClick={() => {
							navigate(`/admin/update-product/${id}`);
						}}
						className="bg-[#ea4023] hover:bg-[#ff6b51] p-2 mt-2 max-[850px]:w-full"
					>
						Update
					</Button>
					<Button
						onClick={handleDeleteItem}
						className="bg-[#ea4023] hover:bg-[#ff6b51] p-2 mt-2 max-[850px]:w-full"
					>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductItemInAdmin;

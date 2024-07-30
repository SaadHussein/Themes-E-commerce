import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { State } from "@/utils/types";

const ProductItemInAdmin = ({
	images,
	name,
	price,
	id,
	category_id,
}: {
	images: string[];
	name: string;
	price: string;
	id: number;
	category_id: number;
}) => {
	const navigate = useNavigate();
	const token = useSelector((state: State) => state.Global.token);
	console.log(category_id);

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

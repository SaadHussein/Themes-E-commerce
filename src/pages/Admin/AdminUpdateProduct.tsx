import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";
import { Product, State } from "@/utils/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdminUpdateProduct = () => {
	const params = useParams();
	const token = useSelector((state: State) => state.Global.token);
	const allProductsFromRedux = useSelector(
		(state: State) => state.Global.allProducts
	);
	// const [product, setProduct] = useState<Product>();
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	// const [description, setDescription] = useState<string>("");
	// const [categoryID, setCategoryID] = useState<number>(0);
	const [image, setImage] = useState<File | null>(null);
	const [file, setFile] = useState<File | null>(null);

	useEffect(() => {
		const selectedProduct = allProductsFromRedux.filter((product: Product) =>
			params.id ? product.id === +params.id : ""
		);

		setName(selectedProduct[0].name);
		setPrice(selectedProduct[0].price);
		// setDescription(selectedProduct[0].description);
		// setProduct(selectedProduct[0]);
		// setCategoryID(selectedProduct[0].category_id);
		// console.log(selectedProduct[0]);
	}, [allProductsFromRedux, params.id]);

	const handleUpdateProduct = async () => {
		const formData = new FormData();

		formData.append("name", name);
		formData.append("price", price);

		if (file) {
			formData.append("file", file);
		}
		if (image) {
			formData.append("image", image);
		}

		try {
			const createProductResponse = await axios.post(
				"http://mohamedahmed124-001-site1.ltempurl.com/api/admin/add",
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
						Accept: "application/json",
					},
				}
			);

			console.log(createProductResponse.data);
		} catch (error) {
			console.log(error);
			throw new Error("Error Happened While Creating Product");
		}
	};
	return (
		<div className="flex items-center justify-center flex-col px-20 max-[500px]:px-8">
			<div className="w-full my-12 border-solid border-b-[3px] border-black pb-8">
				<h1 className="w-full flex items-center justify-start text-[32px] font-bold mb-4">
					Update Product
				</h1>
				<div className="flex items-center justify-center flex-col w-full">
					<div className="w-full flex items-center justify-start gap-8 max-[670px]:flex-col max-[670px]:gap-2">
						<div className="w-full">
							<Label htmlFor="name">Name</Label>
							<Input
								type="text"
								id="name"
								placeholder="Product Name"
								value={name}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setName(e.target.value);
								}}
							/>
						</div>
						<div className="w-full">
							<Label htmlFor="price">Price</Label>
							<Input
								type="string"
								id="price"
								placeholder="Product Price"
								value={price}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setPrice(e.target.value);
								}}
							/>
						</div>
					</div>
					{/* <div className="w-full flex items-center justify-start gap-8 mt-4 max-[670px]:flex-col max-[670px]:gap-2">
						<div className="w-full">
							<Label htmlFor="name">Description</Label>
							<Input
								type="text"
								id="description"
								placeholder="Product Description"
								value={description}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setDescription(e.target.value);
								}}
							/>
						</div>
						<div className="w-full">
							<Label htmlFor="category">Category</Label>
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder={`Category ID: ${categoryID}`} />
								</SelectTrigger>
								<SelectContent>
									<SelectItem
										value={"1"}
										onClick={() => {
											setCategoryID(1);
										}}
									>
										front-end - 1
									</SelectItem>
									<SelectItem
										value={"2"}
										onClick={() => {
											setCategoryID(2);
										}}
									>
										back-end - 2
									</SelectItem>
									<SelectItem
										value={"3"}
										onClick={() => {
											setCategoryID(3);
										}}
									>
										ai - 3
									</SelectItem>
									<SelectItem
										value={"4"}
										onClick={() => {
											setCategoryID(4);
										}}
									>
										mobile-application - 4
									</SelectItem>
									<SelectItem
										value={"5"}
										onClick={() => {
											setCategoryID(5);
										}}
									>
										website - 5
									</SelectItem>
									<SelectItem
										value={"6"}
										onClick={() => {
											setCategoryID(6);
										}}
									>
										Desktop Application - 6
									</SelectItem>
									<SelectItem
										value={"13"}
										onClick={() => {
											setCategoryID(13);
										}}
									>
										For Free - 13
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div> */}
					<div className="w-full flex items-center justify-start gap-8 mt-4 max-[670px]:flex-col max-[670px]:gap-2">
						<div className="w-full">
							<Label htmlFor="image">Product Image</Label>
							<Input
								id="image"
								type="file"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									if (e.target.files) {
										setImage(e.target.files[0]);
									}
								}}
							/>
						</div>
						<div className="w-full">
							<Label htmlFor="file">Product File</Label>
							<Input
								id="file"
								type="file"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									if (e.target.files) {
										setFile(e.target.files[0]);
									}
								}}
							/>
						</div>
					</div>
					<div className="w-full flex items-center justify-start mt-4">
						<Button onClick={handleUpdateProduct}>Submit</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminUpdateProduct;

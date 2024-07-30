import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/utils/types";
import { setAllProductsInRedux, setFreeProductsInRedux } from "@/app/Global";
// import Select from "react-select";

// const selectCategoryOptions: { value: number; label: string }[] = [
// 	{ value: 1, label: "front-end - 1" },
// 	{ value: 2, label: "back-end - 2" },
// 	{ value: 3, label: "ai - 3" },
// 	{ value: 4, label: "mobile application - 4" },
// 	{ value: 5, label: "website - 5" },
// 	{ value: 6, label: "Desktop Application - 6" },
// 	{ value: 13, label: "For Free - 13" },
// ];

const CreateProduct = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [categoryID, setCategoryID] = useState<number>(0);
	const [image, setImage] = useState<File | null>(null);
	const [file, setFile] = useState<File | null>(null);
	const token = useSelector((state: State) => state.Global.token);

	const handleAddProduct = async () => {
		// const formData: {
		// 	name: string;
		// 	price: string;
		// 	description: string;
		// 	category: number;
		// 	image?: File | null;
		// 	file?: File | null;
		// } = {
		// 	name,
		// 	price,
		// 	description,
		// 	category: categoryID,
		// };

		// if (image) {
		// 	formData.image = image;
		// }
		// if (file) {
		// 	formData.file = file;
		// }

		const formData = new FormData();
		console.log(categoryID);

		formData.append("name", name);
		formData.append("price", price);

		if (file) {
			formData.append("file", file);
		}
		if (image) {
			formData.append("image", image);
		}
		formData.append("description", description);
		formData.append("category", categoryID.toString());

		console.log(formData);
		try {
			const createProductResponse = await axios.post(
				"http://mohamedahmed124-001-site1.ltempurl.com/api/admin/add",
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "multipart/form-data",
						Accept: "application/json",
					},
				}
			);

			console.log(createProductResponse.data);

			if (
				createProductResponse.data.message === "Product created successfully"
			) {
				const freeProducts = await fetch(
					"http://mohamedahmed124-001-site1.ltempurl.com/api/categories/13/products",
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const freeProductsResult = await freeProducts.json();
				console.log(freeProductsResult);
				dispatch(setFreeProductsInRedux({ value: freeProductsResult.data }));

				const premiumProducts = await fetch(
					"http://mohamedahmed124-001-site1.ltempurl.com/api/products",
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const premiumProductsResult = await premiumProducts.json();
				console.log(premiumProductsResult);
				dispatch(setAllProductsInRedux({ value: premiumProductsResult.data }));
			}
		} catch (error) {
			console.log(error);
			throw new Error("Error Happened While Creating Product");
		}
	};
	return (
		<div className="w-full my-12 border-solid border-b-[3px] border-black pb-8">
			<h1 className="w-full flex items-center justify-start text-[32px] font-bold mb-4">
				Create Product
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
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setPrice(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className="w-full flex items-center justify-start gap-8 mt-4 max-[670px]:flex-col max-[670px]:gap-2">
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
						<select
							className="w-full py-2 px-2"
							onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
								setCategoryID(+e.target.value);
							}}
						>
							<option
								onClick={() => {
									setCategoryID(1);
								}}
								value={1}
							>
								front-end - 1
							</option>
							<option
								onClick={() => {
									setCategoryID(2);
								}}
								value={2}
							>
								back-end - 2
							</option>
							<option
								onClick={() => {
									setCategoryID(3);
								}}
								value={3}
							>
								ai - 3
							</option>
							<option
								onClick={() => {
									setCategoryID(4);
								}}
								value={4}
							>
								mobile-application - 4
							</option>
							<option
								onClick={() => {
									setCategoryID(5);
								}}
								value={5}
							>
								website - 5
							</option>
							<option
								onClick={() => {
									setCategoryID(6);
								}}
								value={6}
							>
								Desktop Application - 6
							</option>
							<option
								onClick={() => {
									setCategoryID(13);
								}}
								value={13}
							>
								For Free - 13
							</option>
						</select>
						{/* <Select
							onChange={setCategoryID}
							defaultValue={categoryID}
							options={selectCategoryOptions}
						/> */}
						{/* <Select
							onValueChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
								setCategoryID(+e.target.value);
							}}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Product Category" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem
									value={"1"}
									onClick={() => {
										console.log("Hi");
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
						</Select> */}
					</div>
				</div>
				<div className="w-full flex items-center justify-start gap-8 mt-4 max-[670px]:flex-col max-[670px]:gap-2">
					<div className="w-full">
						<Label htmlFor="image">Product Image</Label>
						<Input
							id="image"
							type="file"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								if (e.target.files) {
									setImage(e.target.files[0]);
									console.log(e.target.files[0]);
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
					<Button onClick={handleAddProduct}>Submit</Button>
				</div>
			</div>
		</div>
	);
};

export default CreateProduct;

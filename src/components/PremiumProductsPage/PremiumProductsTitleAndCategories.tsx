import { setCategoriesInRedux } from "@/app/Global";
import { Category, State } from "@/utils/types";
import { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import star from "../../assets/star.png";

const PremiumProductsTitleAndCategories = ({
	setCategoryItem,
	categoryItem,
	setCategoryID,
}: {
	categoryItem: string;
	setCategoryItem: Dispatch<string>;
	setCategoryID: Dispatch<number>;
}) => {
	const token = useSelector((state: State) => state.Global.token);
	const dispatch = useDispatch();
	const categoriesInRedux = useSelector(
		(state: State) => state.Global.categories
	);
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		const getCategories = async () => {
			if (categoriesInRedux.length !== 0) {
				setCategories([...categoriesInRedux]);
				console.log("Hi");
			} else {
				const categoriesInDB = await fetch(
					"http://mohamedahmed124-001-site1.ltempurl.com/api/categories",
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const result = await categoriesInDB.json();
				dispatch(setCategoriesInRedux({ value: result.data }));
				setCategories(result.data);
				console.log("Hii");
			}
		};

		getCategories();
	}, [token, dispatch, categoriesInRedux]);
	return (
		<div className="w-full my-12">
			<div data-aos="fade-right">
				<h1 className="font-bold text-[32px]">Premium Products</h1>
				<p className="font-semibold text-[18px]">
					In This Page, You Can Find Our Premium Products and Themes and Choose
					One From Them, Buy and Download It and Try and Work on It.
				</p>
			</div>
			<div
				data-aos="fade-down"
				className="mt-10 flex items-center justify-center flex-col"
			>
				<p className="font-semibold text-[21px] mb-5">Categories</p>
				<div className="flex items-center justify-center gap-4 flex-wrap">
					<div
						className={`flex items-center justify-center gap-2 duration-300 border-[3px] hover:border-[#ea4023] ${
							categoryItem === "All" ? "border-[#ea4023]" : ""
						} rounded-3xl px-1 py-1 cursor-pointer`}
						onClick={() => {
							setCategoryItem("All");
							setCategoryID(0);
						}}
					>
						<img
							src={star}
							alt="Category"
							className="w-[50px] h-[50px] object-cover rounded-full"
						/>
						<p className="font-semibold text-[18px]">All</p>
					</div>
					{categories.slice(0, 6).map((category: Category) => (
						<CategoryItem
							key={category.id}
							image={category.image}
							name={category.name}
							id={category.id}
							setCategoryID={setCategoryID}
							categoryItem={categoryItem}
							setCategoryItem={setCategoryItem}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default PremiumProductsTitleAndCategories;

import { Dispatch } from "react";

const CategoryItem = ({
	name,
	image,
	categoryItem,
	setCategoryItem,
	id,
	setCategoryID,
}: {
	name: string;
	image: string;
	categoryItem: string;
	setCategoryItem: Dispatch<string>;
	id: number;
	setCategoryID: Dispatch<number>;
}) => {
	return (
		<div
			className={`flex items-center justify-center gap-2 duration-300 border-[3px] hover:border-[#ea4023] ${
				categoryItem === name ? "border-[#ea4023]" : ""
			} rounded-3xl px-1 py-1 cursor-pointer`}
			onClick={() => {
				setCategoryItem(name);
				setCategoryID(id);
			}}
		>
			<img
				src={image}
				alt="Category"
				className="w-[50px] h-[50px] object-cover rounded-full"
			/>
			<p className="font-semibold text-[18px]">{name}</p>
		</div>
	);
};

export default CategoryItem;

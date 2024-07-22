import { Button } from "@/components/ui/button";
import { FreeProduct } from "@/utils/types";

const ProductItem = ({ name, price, images }: FreeProduct) => {
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
				<div className="w-full flex justify-end">
					<Button className="bg-[#ea4023] hover:bg-[#ff6b51] mt-2 max-[850px]:w-full">
						Show Details
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;

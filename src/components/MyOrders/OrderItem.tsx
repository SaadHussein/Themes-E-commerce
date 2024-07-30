import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { UserOrder } from "@/utils/types";

const OrderItem = ({ name, price, id, image, download_link }: UserOrder) => {
	const navigate = useNavigate();
	return (
		<div
			data-aos="fade-up"
			className="bg-white rounded-lg border-solid border-[3px]"
		>
			<div className={`h-[250px]`}>
				<img
					src={image}
					className="  object-cover h-full w-full rounded-t-lg cursor-pointer "
					alt="Product-Image"
				/>
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

					<a
						href={download_link}
						download={true}
						className="p-2 mt-2 duration-300 bg-[#ea4023] hover:bg-[#ff694f] text-white rounded-md text-center"
					>
						Download Theme
					</a>
				</div>
			</div>
		</div>
	);
};

export default OrderItem;

import { setUserOrdersInRedux } from "@/app/Global";
import { State, UserOrder } from "@/utils/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "./OrderItem";

const MyOrdersProducts = () => {
	const token = useSelector((state: State) => state.Global.token);
	const [loading, setLoading] = useState<boolean>(true);
	const [userOrders, setUserOrders] = useState<UserOrder[]>([]);
	const dispatch = useDispatch();
	const userOrderesFromRedux = useSelector(
		(state: State) => state.Global.userOrders
	);
	useEffect(() => {
		const getUserOrders = async () => {
			if (userOrderesFromRedux.length !== 0) {
				setUserOrders([...userOrderesFromRedux]);
				setLoading(false);
			} else {
				try {
					const userOrders = await fetch(
						`http://mohamedahmed124-001-site1.ltempurl.com/api/orders`,
						{
							method: "GET",
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					);

					const result = await userOrders.json();
					console.log(result);
					if (result.length === 0) {
						setLoading(false);
						return;
					}
					setUserOrders([...result]);
					dispatch(setUserOrdersInRedux({ value: result }));
					setLoading(false);
				} catch (error) {
					throw new Error("Error While Getting User Orders");
				}
			}
		};

		getUserOrders();
	}, [token, dispatch, userOrderesFromRedux]);

	return (
		<>
			{token === "" ? (
				<div className="mt-20 mb-10" data-aos="fade-up">
					<p className="text-[24px] font-semibold text-center">
						You Should Login First To See Products
					</p>
				</div>
			) : loading ? (
				<div className="w-full">
					<p className="text-center w-full flex items-center justify-center font-semibold text-[24px] mt-10">
						Loading Products...
					</p>
				</div>
			) : (
				<div className="grid grid-cols-3 gap-8 max-[1250px]:grid-cols-2 max-[850px]:grid-cols-1 pt-8">
					{userOrders.map((product: UserOrder) => (
						<OrderItem
							price={product.price}
							name={product.name}
							download_link={product.download_link}
							id={product.id}
							image={product.image}
							key={product.download_link + product.id + product.image}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default MyOrdersProducts;

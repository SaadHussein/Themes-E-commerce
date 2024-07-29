import { setUserOrdersInRedux } from "@/app/Global";
import Subscribe from "@/components/MainPage/Subscribe";
import MyOrdersHeader from "@/components/MyOrders/MyOrdersHeader";
import { State, UserOrder } from "@/utils/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyOrders = () => {
	const token = useSelector((state: State) => state.Global.token);
	const [userOrders, setUserOrders] = useState<UserOrder[]>([]);
	const dispatch = useDispatch();
	const userOrderesFromRedux = useSelector(
		(state: State) => state.Global.userOrders
	);
	useEffect(() => {
		const getUserOrders = async () => {
			if (userOrderesFromRedux.length !== 0) {
				setUserOrders([...userOrderesFromRedux]);
			} else {
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
				setUserOrders([...result]);
				dispatch(setUserOrdersInRedux({ value: result }));
			}
		};

		getUserOrders();
	}, [token, dispatch, userOrderesFromRedux]);
	return (
		<div className="flex items-center justify-center flex-col px-20 max-[500px]:px-8">
			<MyOrdersHeader />
			<Subscribe />
		</div>
	);
};

export default MyOrders;

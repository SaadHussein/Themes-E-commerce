import Subscribe from "@/components/MainPage/Subscribe";
import MyOrdersHeader from "@/components/MyOrders/MyOrdersHeader";
import MyOrdersProducts from "@/components/MyOrders/MyOrdersProducts";

const MyOrders = () => {
	return (
		<div className="flex items-center justify-center flex-col px-20 max-[500px]:px-8">
			<MyOrdersHeader />
			<MyOrdersProducts />
			<Subscribe />
		</div>
	);
};

export default MyOrders;

import { State } from "@/utils/types";
import { useSelector } from "react-redux";

const MainPage = () => {
	const name = useSelector((state: State) => state.Global.name);
	return (
		<div className="h-[1000px] flex items-center justify-center flex-col">
			<div className="text-center">
				<p className="flex items-center justify-center font-bold text-[24px]">
					UserName is : {name}
				</p>
			</div>
		</div>
	);
};

export default MainPage;

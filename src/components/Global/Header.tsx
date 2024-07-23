import { useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/utils/types";
import { useWindowWidth } from "@react-hook/window-size";
import { IoMenu } from "react-icons/io5";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { LogoutUser } from "@/utils/api/logout";
import {
	setName,
	setEmail,
	setId,
	setToken,
	setAllProductsInRedux,
	setFreeProductsInRedux,
} from "@/app/Global";
import { useToast } from "@/components/ui/use-toast";
import DevStore from "../../assets/DevStoreLogo.svg";

const Header = () => {
	const { toast } = useToast();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const width = useWindowWidth();
	const name = useSelector((state: State) => state.Global.name);
	const token = useSelector((state: State) => state.Global.token);

	const UserLogout = async () => {
		const result = await LogoutUser(token);
		console.log(result);

		if (result.message === "You have been logged out.") {
			dispatch(setName({ value: "" }));
			dispatch(setEmail({ value: "" }));
			dispatch(setId({ value: "" }));
			dispatch(setToken({ value: "" }));
			dispatch(setAllProductsInRedux({ value: [] }));
			dispatch(setFreeProductsInRedux({ value: [] }));

			toast({
				title: "Note",
				description: result.message,
			});
		}
	};

	return (
		// <div className="h-[70px] bg-blue-500 px-10 max-[600px]:px-2 flex items-center justify-between">
		<div
			data-aos="fade-down"
			className="h-[70px] bg-[#ea4023] px-10 max-[600px]:px-2 flex items-center justify-between"
		>
			<div className="flex items-center justify-start gap-4">
				{/* <div
					className="cursor-pointer"
					onClick={() => {
						navigate("/");
					}}
				> */}
				<img
					src={DevStore}
					alt="DevStore"
					className="cursor-pointer w-[130px]"
					onClick={() => {
						navigate("/");
					}}
				/>
				{/* </div> */}
				<div className="max-[800px]:hidden">
					<Input type="text" placeholder="Search" className="rounded-2xl" />
				</div>
			</div>
			<div className="flex items-center justify-end gap-4">
				{name === "" && width >= 600 && (
					<>
						<p
							onClick={() => {
								navigate("/login");
							}}
							className="font-semibold text-white text-[18px] cursor-pointer"
						>
							Login
						</p>
						<p
							onClick={() => {
								navigate("/register");
							}}
							className="font-semibold text-white text-[18px] cursor-pointer"
						>
							Register
						</p>
					</>
				)}
				{name !== "" && width >= 600 && (
					<>
						<p className="font-semibold text-white text-[18px] cursor-pointer">
							{name}
						</p>
						<p
							onClick={() => {
								navigate("/free-products");
							}}
							className="font-semibold text-white text-[18px] cursor-pointer"
						>
							Free
						</p>
						<p
							onClick={() => {
								navigate("/premium-products");
							}}
							className="font-semibold text-white text-[18px] cursor-pointer"
						>
							Premium
						</p>
						<p
							className="font-semibold text-white text-[18px] cursor-pointer"
							onClick={UserLogout}
						>
							Logout
						</p>
					</>
				)}
				{width < 600 && (
					<>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="outline"
									className="bg-transparent hover:bg-transparent"
								>
									<IoMenu color="white" size={28} className="cursor-pointer" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56">
								<DropdownMenuLabel>Menu Items</DropdownMenuLabel>
								<DropdownMenuSeparator />
								{name !== "" && (
									<>
										<DropdownMenuRadioItem value={name}>
											{name}
										</DropdownMenuRadioItem>
										<DropdownMenuRadioItem
											onClick={() => {
												navigate("/free-products");
											}}
											value={""}
										>
											Free
										</DropdownMenuRadioItem>
										<DropdownMenuRadioItem
											onClick={() => {
												navigate("/premium-products");
											}}
											value={""}
										>
											Premium
										</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="" onClick={UserLogout}>
											Logout
										</DropdownMenuRadioItem>
									</>
								)}
								{name === "" && (
									<>
										<DropdownMenuRadioItem
											value={""}
											onClick={() => {
												navigate("/login");
											}}
										>
											Login
										</DropdownMenuRadioItem>
										<DropdownMenuRadioItem
											value=""
											onClick={() => {
												navigate("/register");
											}}
										>
											Register
										</DropdownMenuRadioItem>
									</>
								)}
							</DropdownMenuContent>
						</DropdownMenu>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { LoginUser } from "@/utils/api/login";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setId, setName, setToken } from "@/app/Global";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { State } from "@/utils/types";

const formSchema = z.object({
	email: z.string().email({
		message: "Enter a Valid Email Please.",
	}),
	password: z.string().min(8, {
		message: "Password must be at least length 8 and Enter Right Password.",
	}),
});

const Login = () => {
	const navigate = useNavigate();
	const name = useSelector((state: State) => state.Global.name);

	useEffect(() => {
		if (name !== "") {
			navigate("/");
		}
	}, [name, navigate]);
	const dispatch = useDispatch();
	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const result = await LoginUser(values);
		console.log(result);
		toast({
			title: "Note",
			description:
				result.message === "user logged in successfully"
					? result.message
					: result.message,
		});

		if (result.message === "user logged in successfully") {
			dispatch(setToken({ value: result.token }));
			dispatch(setId({ value: result.user.id }));
			dispatch(setEmail({ value: result.user.email }));
			dispatch(setName({ value: result.user.name }));
			navigate("/");
		}
	}
	return (
		<div className="w-full h-[85vh] flex items-center justify-center">
			<div className="flex items-center justify-center flex-col px-5 w-full h-full">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="bg-white space-y-8 w-[35%] max-[1100px]:w-[60%] max-[650px]:w-[90%] max-[380px]:w-[95%] p-5 max-[430px]:p-2 border-solid border-[3px] rounded-lg"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="Write Your Email Please..."
											className="border-[3px]"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											placeholder="Write Your Password Please..."
											type="password"
											className="border-[3px]"
											{...field}
										/>
									</FormControl>
									<FormDescription className="duration-300 text-[#ea4023] hover:text-[#ff7860] cursor-pointer">
										Forget Password ?
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							type="submit"
							// className="w-full bg-blue-500 hover:bg-blue-600"
							className="w-full bg-[#ea4023] hover:bg-[#ff6448]"
						>
							Submit
						</Button>
						<p className="duration-300 text-[#ea4023] hover:text-[#ff6448] cursor-pointer w-full flex items-center justify-center">
							Create a New Account ?
						</p>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default Login;

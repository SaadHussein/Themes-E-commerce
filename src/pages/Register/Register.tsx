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
import { RegisterUser } from "@/utils/api/register";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "@/utils/types";

const formSchema = z
	.object({
		name: z.string().min(8, {
			message: "Name must be at least 8 characters.",
		}),
		email: z.string().email({
			message: "Enter a Valid Email Please.",
		}),
		password: z.string().min(8, {
			message: "Password must be at least length 8.",
		}),
		password_confirmation: z.string().min(8, {
			message: "Password confirmation must be equal to Password.",
		}),
	})
	.refine(
		(schema) => {
			return schema.password === schema.password_confirmation;
		},
		{
			message: "Password and Password Confirmation must be Equal.",
		}
	);

const Register = () => {
	const navigate = useNavigate();
	const name = useSelector((state: State) => state.Global.name);

	useEffect(() => {
		if (name !== "") {
			navigate("/");
		}
	}, [name, navigate]);

	const { toast } = useToast();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			password_confirmation: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const result = await RegisterUser(values);
		console.log(result);

		toast({
			title: "Note",
			description:
				result.message === "user created successfully"
					? result.message
					: result.errors.email[0],
		});
	}
	return (
		<div className="w-full h-[85vh] flex items-center justify-center">
			<div className="flex items-center justify-center flex-col px-5 w-full">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 w-[35%] max-[1100px]:w-[60%] max-[650px]:w-[90%] max-[380px]:w-[95%] p-5 max-[430px]:p-2 border-solid border-[1px]"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="Write Your Name Please..." {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="Write Your Email Please..."
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
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password_confirmation"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password Confirmation</FormLabel>
									<FormControl>
										<Input
											placeholder="Write Your Password Confirmation Please..."
											type="password"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										IF Password Confirmation don`t equal Password The Process
										will Not Process.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							className="w-full bg-blue-500 hover:bg-blue-600"
						>
							Submit
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default Register;

import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Subscribe = () => {
	return (
		<div
			data-aos="fade-up"
			data-aos-anchor-placement="top-bottom"
			className=" w-[85%] my-10 flex items-center justify-between border-solid border-[3px] border-[#b9bcbd] py-8 px-8 rounded-lg max-[1175px]:flex-col max-[1175px]:items-center max-[1175px]:justify-center max-[1175px]:text-center max-[750px]:w-full max-[750px]:p-3"
		>
			<div className="flex items-start justify-start flex-col w-[50%] max-[1175px]:w-full max-[1175px]:text-center max-[1175px]:items-center max-[1175px]:justify-center max-[1175px]:mb-4">
				<h1 className="text-[32px] max-[750px]:text-[24px] max-[400px]:text-[21px] font-semibold text-[#1b3135]">
					Get new themes and discounts in your inbox!
				</h1>
				<p className="text-[21px] max-[750px]:text-[16px] max-[400px]:text-[14px] font-normal text-[#1b3135]">
					New themes or big discounts. Never spam.
				</p>
			</div>
			<div className="flex items-center justify-end gap-2 w-[50%] max-[1175px]:w-full">
				<Input
					type="email"
					placeholder="Email Address"
					className="border-[3px]"
				/>
				<Button type="submit" className="bg-[#ea4023] hover:bg-[#ff6b51]">
					Subscribe
				</Button>
			</div>
		</div>
	);
};

export default Subscribe;

import { RiFacebookCircleFill } from "react-icons/ri";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
	return (
		<div className="flex items-center justify-center flex-col w-full">
			<div className="px-10 flex items-center justify-between w-full max-[800px]:flex-col">
				<ul className="flex items-center justify-start gap-5 max-[800px]:flex-wrap max-[800px]:justify-center max-[800px]:gap-3">
					<li className="cursor-pointer duration-300 font-semibold text-[#748194] hover:text-black">
						Blog
					</li>
					<li className="cursor-pointer duration-300 font-semibold text-[#748194] hover:text-black">
						About
					</li>
					<li className="cursor-pointer duration-300 font-semibold text-[#748194] hover:text-black">
						Terms
					</li>
					<li className="cursor-pointer duration-300 font-semibold text-[#748194] hover:text-black">
						License
					</li>
					<li className="cursor-pointer duration-300 font-semibold text-[#748194] hover:text-black">
						Contact
					</li>
					<li className="cursor-pointer duration-300 font-semibold text-[#748194] hover:text-black">
						Support
					</li>
					<li className="cursor-pointer duration-300 font-semibold text-[#748194] hover:text-black">
						Submit Free Template
					</li>
				</ul>
				<div className="max-[800px]:mt-4">
					{/* <p className="font-semibold duration-300 cursor-pointer text-blue-500 hover:text-blue-600"> */}
					<p className="font-semibold duration-300 cursor-pointer text-[#fd6d53] hover:text-[#ea4023]">
						ReDownload Theme
					</p>
				</div>
			</div>
			<div className="border-solid border-[1px] border-[#d7d9dc] w-full my-8"></div>
			<div className="px-10 flex items-center justify-between w-full mb-8 max-[400px]:flex-col">
				<div className=" cursor-pointer flex items-center justify-start gap-5 text-[24px] text-[#748194]">
					<RiFacebookCircleFill className="duration-300 hover:text-black" />
					<FaXTwitter className="duration-300 hover:text-black" />
					<FaInstagram className="duration-300 hover:text-black" />
				</div>
				<div className="font-semibold text-[#748194] duration-300 hover:text-black cursor-pointer max-[400px]:mt-4">
					SaadHussein &copy; 2024
				</div>
			</div>
		</div>
	);
};

export default Footer;

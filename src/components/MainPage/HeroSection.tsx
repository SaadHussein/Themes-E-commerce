import React from "react";
import HeroImage from "../../assets/HeroImage.jpg";

const HeroSection = () => {
	return (
		<div className="h-[600px] flex items-center justify-center gap-12 py-10 max-[1100px]:flex-col max-[1100px]:gap-8">
			<div
				className="w-[600px] max-[650px]:w-[450px] max-[475px]:w-[330px]"
				data-aos="fade-right"
				data-aos-duration="500"
			>
				<img
					className="w-full rounded-2xl"
					src={HeroImage}
					alt="MainHeroImage"
				/>
			</div>
			<div
				className="flex items start justify-start flex-col max-[1100px]:text-center"
				data-aos="fade-left"
				data-aos-duration="1000"
				data-aos-delay="300"
			>
				<h1 className="text-[48px] max-[920px]:text-[40px] max-[650px]:text-[30px] max-[475px]:text-[22px] font-bold text-[#1b3135]">
					Buy Best, Better and Faster UI.
				</h1>
				<p className="font-medium text-[24px] max-[920px]:text-[20px] max-[650px]:text-[16px] max-[475px]:text-[14px] mt-1 text-gray-600">
					You Can Find The Best Collections You Need in Our Website.
				</p>
			</div>
		</div>
	);
};

export default HeroSection;

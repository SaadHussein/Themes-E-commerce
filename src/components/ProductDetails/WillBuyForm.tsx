import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React, { Dispatch, useState } from "react";
import { Label } from "../ui/label";
import { useSelector } from "react-redux";
import { State } from "@/utils/types";

const WillBuyForm = ({
	setWillBuy,
	productID,
}: {
	setWillBuy: Dispatch<boolean>;
	productID: number | undefined;
}) => {
	const [cardNumber, setCardNumber] = useState<string>("");
	const [expiryDate, setExpiryDate] = useState<string>("");
	const [cvv, setCvv] = useState<string>("");
	const [isBuySuccess, setIsBuySuccess] = useState<boolean>(false);
	const [downloadURL, setDownloadURL] = useState<string>("");
	const token = useSelector((state: State) => state.Global.token);
	const handleBuyTheme = async () => {
		console.log(cardNumber, expiryDate, cvv);
		const paymentresponse = await fetch(
			`http://mohamedahmed124-001-site1.ltempurl.com/api/payment/${productID}`,
			{
				method: "POST",
				body: JSON.stringify({
					card_number: cardNumber,
					expiry_date: expiryDate,
					cvv: cvv,
				}),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);

		const result = await paymentresponse.json();
		console.log(result);

		if (result.message === "Payment successful. Download your product.") {
			setIsBuySuccess(true);
			setDownloadURL(result.download_url);
		}
	};
	return (
		<>
			{isBuySuccess === false && (
				<div className="mt-4 flex items-start justify-start flex-col">
					<div className="w-full">
						<Label htmlFor="card_number">Card Number</Label>
						<Input
							type="text"
							id="card_number"
							placeholder="Card Number"
							value={cardNumber}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setCardNumber(e.target.value);
							}}
						/>
					</div>
					<div className="flex items-start justify-center gap-4 mt-3">
						<div>
							<Label htmlFor="expiry_date">Expiry Date</Label>
							<Input
								type="text"
								id="expiry_date"
								placeholder="month/year"
								value={expiryDate}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									if (e.target.value.length === 2) {
										setExpiryDate(`${e.target.value}/`);
									} else if (e.target.value.length > 5) {
										return;
									} else {
										setExpiryDate(e.target.value);
									}
								}}
							/>
						</div>
						<div>
							<Label htmlFor="cvv">Cvv</Label>
							<Input
								type="text"
								id="cvv"
								placeholder="Cvv"
								value={cvv}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setCvv(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="mt-2 flex items-center justify-center gap-2">
						<Button
							onClick={() => {
								setWillBuy(false);
							}}
							className="duration-300 bg-[#ea4023] hover:bg-[#ff694f]"
						>
							Cancel
						</Button>
						<Button
							onClick={handleBuyTheme}
							className="duration-300 bg-[#ea4023] hover:bg-[#ff694f]"
						>
							Submit
						</Button>
					</div>
				</div>
			)}
			{isBuySuccess && (
				<div className="flex items-start justify-start flex-col mt-4">
					<p className="text-[20px] font-semibold mb-2">
						Payment Done Successfully.
					</p>
					<a
						href={downloadURL}
						download={true}
						className="p-2 duration-300 bg-[#ea4023] hover:bg-[#ff694f] text-white rounded-md"
					>
						Download Theme Now
					</a>
				</div>
			)}
		</>
	);
};

export default WillBuyForm;

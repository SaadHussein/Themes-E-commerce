import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ProductDetailsSchema, State } from "@/utils/types";
import { useSelector } from "react-redux";

const AddReview = ({
	productDetails,
}: {
	productDetails: ProductDetailsSchema | null;
}) => {
	const [comment, setComment] = useState<string>("");
	const [rating, setRating] = useState<number>(0);
	const { toast } = useToast();
	const token = useSelector((state: State) => state.Global.token);

	const handleAddReview = async (comment: string, rating: number) => {
		if (rating > 5 || rating < 1) {
			toast({
				title: "Rating Should Be Between 1 and 5",
			});
		} else {
			try {
				const addRatingResult = await fetch(
					`http://mohamedahmed124-001-site1.ltempurl.com/api/products/${productDetails?.id}/reviews`,
					{
						method: "POST",
						body: JSON.stringify({
							rating,
							comment,
						}),
						headers: {
							"Content-type": "application/json",
							Authorization: `Bearer ${token}`,
						},
					}
				);

				const result = await addRatingResult.json();
				console.log(result);
				toast({
					title: result.message,
				});
				setRating(0);
				setComment("");
			} catch (error) {
				throw new Error("Error Happened While Adding Review");
			}
		}
	};
	return (
		<div className="my-10">
			<p className="text-[24px] font-medium mb-5">Add Review</p>
			<div className="grid w-full gap-1.5">
				<Label className="text-[18px]" htmlFor="message">
					Your Review
				</Label>
				<Textarea
					value={comment}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
						setComment(e.target.value);
					}}
					className="border-[3px]"
					placeholder="Type your message here."
					id="message"
				/>
			</div>
			<div className="mt-3">
				<p className="text-[18px] font-medium">Your Rating</p>
				<div className="mt-2">
					<Label htmlFor="yourRating" className="text-[16px]">
						Your Rating From 1 to 5
					</Label>
					<Input
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setRating(+e.target.value);
						}}
						className="w-[300px]"
						id="yourRating"
						type="number"
					/>
				</div>
			</div>
			<Button
				onClick={() => {
					handleAddReview(comment, rating);
				}}
				className="mt-3 bg-[#ea4023] hover:bg-[#ff6e54]"
			>
				Submit
			</Button>
		</div>
	);
};

export default AddReview;

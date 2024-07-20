import { RegisterType } from "../types";

export async function RegisterUser(inputs: RegisterType) {
	const response = await fetch(
		"http://mohamedahmed124-001-site1.ltempurl.com/api/register",
		{
			method: "POST",
			body: JSON.stringify(inputs),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	const data = response.json();
	return data;
}

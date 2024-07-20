import { LoginType } from "../types";

export async function LoginUser(inputs: LoginType) {
	const response = await fetch(
		"http://mohamedahmed124-001-site1.ltempurl.com/api/login",
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

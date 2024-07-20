export async function LogoutUser(token: string) {
	const response = await fetch(
		"http://mohamedahmed124-001-site1.ltempurl.com/api/logout",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		}
	);

	const data = response.json();
	return data;
}

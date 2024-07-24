export async function LogoutUser(token: string) {
	try {
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
	} catch (error) {
		throw new Error(`Error Happened While Logout ${error}`);
	}
}

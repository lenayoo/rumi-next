export default async function fetchQuotes() {
  try {
    if (
      !process.env.NEXT_PUBLIC_RAPID_API_URL ||
      !process.env.RAPID_HOST ||
      !process.env.RAPID_KEY
    )
      return;

    const response = await fetch(process.env.NEXT_PUBLIC_RAPID_API_URL, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.RAPID_HOST,
        'x-rapidapi-key': process.env.RAPID_KEY
      }
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err: unknown) {
    console.error(err);
  }
}

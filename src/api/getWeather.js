export default async (location) => {
    const API_URL = 'https://api.weatherbit.io/v2.0/forecast/daily';
    const API_KEY = "b6494ce54de54be6a89271638f3f5cd7";
    const FULL_API_URL = `${API_URL}?city=${location.city}&country=${location.country}&days=5&units=M&key=${API_KEY}`;

    try {
        const result = await fetch(FULL_API_URL);

        if (result.status === 200) {
            return { success: true, data: await result.json() };
        }

        return { success: false, error: result.statusText };
    } catch (ex) {
        return { success: false, error: ex.message };
    }
};
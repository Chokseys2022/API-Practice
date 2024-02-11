export async function fetchRandomDog() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data.message; // Return the image URL
  } catch (error) {
    console.error("Error fetching dog:", error);
    throw error; // Rethrow the error for handling elsewhere
  }
}

import { fetchRandomDog } from './api.mjs';

export function displayDogImage(imageUrl) {
    const dogResult = document.getElementById('dog_result');
    dogResult.innerHTML = `<img src="${imageUrl}" alt="dog" />`;
}

export function setupEventListeners() {
    const dogBtn = document.getElementById('dog_btn');
    dogBtn.addEventListener('click', async () => {
        try {
            const imageUrl = await fetchRandomDog();
            displayDogImage(imageUrl);
        } catch (error) {
            console.error('Error getting dog image:', error);
            // Handle error
        }
    });
}

setupEventListeners();

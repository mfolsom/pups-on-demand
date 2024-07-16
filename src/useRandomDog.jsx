import { useState } from 'react';

const useRandomDog = () => {
    const [pupImage, setPupImage] = useState('');
    const [breed, setBreed] = useState('');

    const fetchRandomDog = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            const imageUrl = data.message;

            const breedMatch = imageUrl.match(/breeds\/([a-zA-Z-]+)/);
            const breedName = breedMatch ? breedMatch[1].replace(/-/g, ' ') : 'unknown';

            setPupImage(imageUrl);
            setBreed(breedName);
        } catch (error) {
            console.error('Error fetching dog image:', error);
        }
    };

    return { pupImage, breed, fetchRandomDog };
};

export default useRandomDog;
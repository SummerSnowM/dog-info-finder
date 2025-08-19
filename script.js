const petDogIdInput = document.getElementById('dogId');
const dogInfo = document.getElementById('dogInfo');
async function findDog() {
  const petDogId = petDogIdInput.value;

  if (petDogId === '') {
    dogInfo.innerHTML = `Please enter a pet dog ID!`;
  } else if (petDogId > 10 || petDogId < 1) {
    dogInfo.innerHTML = `Please enter a pet dog ID between 1 - 10!`;
  } else {
    try {
      const response = await fetch(
        `https://dog-vidi.vercel.app/dogs/${petDogId}`
      );
      if (response.ok) {
        const dog = await response.json();
        dogInfo.innerHTML = `Name: ${dog.name}<br >Breed: ${
          dog.breed
        }<br >Age: <span style="color: ${dog.age <= 3 ? 'green' : 'blue'}">${
          dog.age
        }</span>`;
      } else {
        dogInfo.innerHTMl = `Dog not found!`;
      }
    } catch (error) {
      dogInfo.innerHTML = `Dog not found!`;
    }
  }
}

const rentalContainer = document.getElementById('rentalDescription');
const rentalURL = 'https://stephenscottbyui.github.io/wdd230/scoots/data/rental-types.json';

async function getRentalData() {
    try {
        const rentalResponse = await fetch(rentalURL);


        if (rentalResponse.ok) {
            const rentalData = await rentalResponse.json();
            displayRentalData(rentalData.rentals);
        } else {
            throw Error('Error retrieving rental data')
        }
    } catch (error) {
        console.log(error);
    }

}

getRentalData();

const displayRentalData = (rentals) => {
    rentals.forEach((rentalType) => {
        rentalType.models.forEach((model) => {
            let vehicle = document.createElement('div');
            let vehicleType = document.createElement('h3');
            let vehicleImage = document.createElement('img');
            let vehicleDescription = document.createElement('p');

            vehicle.setAttribute('class', 'vehicles grid');
            vehicleType.textContent = `${model.name}`;
            vehicleImage.setAttribute('src', model.image);
            vehicleImage.setAttribute('loading', 'lazy');
            vehicleImage.setAttribute('alt', model.description);
            vehicleDescription.textContent = `${model.description}`;

            vehicle.appendChild(vehicleType);
            vehicle.appendChild(vehicleImage);
            vehicle.appendChild(vehicleDescription);

            rentalContainer.appendChild(vehicle);
        })
    })
}
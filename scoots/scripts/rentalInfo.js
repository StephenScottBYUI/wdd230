const rentalContainer = document.getElementById('rentalInformation');
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
        let typeContainer = document.createElement('div')
        let type = document.createElement('h2');
        typeContainer.setAttribute('class', 'grid type-container')
        type.textContent = `${rentalType.type}`;
        rentalType.models.forEach((model) => {
            let vehicle = document.createElement('div');
            let vehicleType = document.createElement('h3');
            let vehicleImage = document.createElement('img');
            let vehicleDescription = document.createElement('p');
            let person = document.createElement('p');

            vehicle.setAttribute('class', 'rental-types extra grid');
            vehicleType.textContent = `${model.name}`;
            vehicleImage.setAttribute('src', model.image);
            vehicleDescription.textContent = `${model.description}`;
            person.textContent = `Passenger Type: ${model.persons}`;

            model.price.forEach((priceType) => {
                let resType = document.createElement('div');
                let reservation = document.createElement('h4')

                resType.setAttribute('class', 'grid res-type');
                reservation.textContent = `${priceType.type}`;

                priceType.cost.forEach((costs) => {
                    let resTime = document.createElement('div');
                    let tme = document.createElement('p');
                    let amt = document.createElement('p');

                    resTime.setAttribute('class', 'grid prices');
                    tme.textContent = `${costs.time}:`;
                    amt.textContent = `${costs.amount}`;

                    resTime.appendChild(tme);
                    resTime.appendChild(amt);

                    resType.appendChild(reservation);
                    resType.appendChild(resTime);

                    vehicle.appendChild(vehicleType);
                    vehicle.appendChild(vehicleImage);
                    vehicle.appendChild(vehicleDescription);
                    vehicle.appendChild(person);
                    vehicle.appendChild(resType);

                    typeContainer.appendChild(type);
                    typeContainer.appendChild(vehicle);

                    rentalContainer.appendChild(typeContainer);
                })
            })

        })
    })
}
function updateLicensePlates(agent, plates) {
    agent.car = { licensePlates: plates };
    return agent;
}
function showLicensePlates(agent) {
    const ul = document.createElement('ul');
    const plates = agent.car && agent.car.licensePlates ? agent.car.licensePlates : ["No license plates available"];
    
    for (let i = 0; i < plates.length; i++) {
        const li = document.createElement('li');
        li.textContent = plates[i];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}
const agent = {
    "Name": "James Bond", 
    "code": "007",
    "age": "53"
};
const plates = ["LU 6789", "4711-EA-62", "BMT 216A"];
showLicensePlates(updateLicensePlates(agent, plates));

document.addEventListener("DOMContentLoaded", function() {
    function addCar(agentString, car) {
        let agent = JSON.parse(agentString);
        agent.car = car;
        return agent;
    }
    const agent = JSON.stringify({
        Name: "James Bond",
        code: "007",
        age: "53",
    });
    const carBrand = "Porsche"; 
    const p = document.querySelector("#container p");
    const updatedAgent = addCar(agent, carBrand);
    p.textContent = JSON.stringify(updatedAgent, null, 2);
});

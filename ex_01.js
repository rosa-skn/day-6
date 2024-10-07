document.addEventListener("DOMContentLoaded", function()
{
    function displayAgentInfo(agent)
    {
        const info = "My name is " + agent.lastName + " " + agent.firstName + "! I'm the agent " + agent.code + " and I'm " + agent.age + " years old.";
        const p = document.querySelector("#container p");
        p.textContent = info;
    }
     const agent = {
        lastName: "Bond",
        firstName: "James",
        code: "007",
        age: "53"
};
    
displayAgentInfo (agent);

});

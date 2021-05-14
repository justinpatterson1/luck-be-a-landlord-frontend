const main = ()=>
{
    const name = document.querySelector("#name");
    const rarity = document.querySelector("#rarity");
    const description = document.querySelector("#description");
    const goldPerTurn = document.querySelector("#goldPerTurn");
    const view = document.querySelector("#view");
    const submit = document.querySelector("#submit");


    const backendHost = `http://localhost:5000`
    fetch(`${backendHost}/items`)
    .then(response=>response.json())
     .then(json=>{
        json.data.forEach(item => {
            view.innerHTML+=`
            <div>
                <div class="grid col-6">
                   <div> ${item.name}</div>
                   <div> ${item.description}</div>
                   <div> ${item.rarity}</div>
                   <div> ${item.goldPerTurn} </div> 
                   <div><button type="button">Delete</button></div>  
                   <div><button type="button">Edit</button></div> 
                </div>
            </div>`
            
        });
     })

     submit.addEventListener("click",()=>{
         fetch(`${backendHost}/items`,{
             method:"POST",
             headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify({
                  name:name.value,
                  rarity:rarity.value,
                  description:description.value,
                  goldPerTurn:goldPerTurn.value
              })
              
         })
         
     })

}

main();
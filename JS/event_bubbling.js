//selectores para card

const card = document.querySelector(".card")

card.addEventListener("click", 
                     (e)=>{
        xe.stopPropagation()
        console.log("click en la tarjeta")

})
const imagen = document.querySelector(".card img");
const info = document.querySelector(".info");

info.addEventListener("click", function(e){
    e.stopPropagation()
    console.log("click en el info de la tarjeta")
})
const titulo = document.querySelector("p.titulo")
                        .addEventListener("click", (e)=>{
                            e.stopPropagation()
                            console.log("click en el titulo")
                        }

)
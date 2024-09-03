const boton = document.
        querySelector("#btn-submit")
//console.log(boton)
//metodo de object:
//      addEventListener
//boton.addEventListener("click", (e)=>{
    //e.preventDefault();
    //console.log("boton presionado")
//})
//query selector para el elemento del menu "vender "
const vender = document
                    .querySelector(".navegacion")
                    .children[0]

vender.addEventListener("mouseenter", 
                        function(){
        console.log("entrando a vender ....")

})

const cambiarColor = function(){
    console.log("saliendo de vender..")
    //camabiar el estilo del selector
    //vender.classList.add(".rojo")
    console.log(vender.
                parentElement.
                style.
                backgroundColor = 'red'
            )
}

//eventos de formularios:
//const formulario = document.forms[0]
//console.log(formulario)

formulario.
        addEventListener("submit", 
            (evt)=>{ evt.preventDefault()
            console.log(evt.target.action)
            }
)

//vender.addEventListener("mouseout", cambiarColor)

const texto = document.
    querySelector(".formulario input")
    .addEventListener('input', (evt)=>{
        console.log("...evento input")
    })

//console.log(texto)
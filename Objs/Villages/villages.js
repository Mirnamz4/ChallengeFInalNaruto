import { pintarC, villas } from "../../Modules/Modules.js"

pintarVillas(villas)

document.getElementById("busqueda").addEventListener('keyup', e => {

    let filtradosTexto = filtroDeTexto(villas)
    let check = document.getElementById("one")
    let check1 = document.getElementById("two")
    let check2 = document.getElementById("three")

    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)
    
    if (checksConPalomita.length == 2){
        let nuevo = recorrer(filtradosTexto)
        pintarVillas(nuevo)
    }
    else if (checksConPalomita.length == 3){
        pintarVillas(filtradosTexto)
    }
    else if (checksConPalomita == 0){
        pintarVillas(filtradosTexto) 
    }
    else{
        if (check.checked){
            let filtrar = one(filtradosTexto)
            pintarVillas(filtrar)
        }
        else if (check1.checked){
            let filtrar = two(filtradosTexto)
            pintarVillas(filtrar)
        }
        else if (check2.checked){
            let filtrar = three(filtradosTexto)
            pintarVillas(filtrar)
        }
    }
    
})

function filtroDeTexto(a) {
    
    let buscadorHome = document.getElementById("busqueda").value.toLowerCase()
    let filtrado = a.filter(nota =>
        nota.name.toLowerCase().includes(buscadorHome))
    return filtrado;
}

// Categorías filtradas

document.getElementById("one").addEventListener('change', e => {
    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)
    
    if (checksConPalomita.length == 2){
        let filtrados = filtroDeTexto(villas)
        let nuevo = recorrer(filtrados)
        pintarVillas(nuevo)
    }
    else if (checksConPalomita.length == 3){
        let filtrados = filtroDeTexto(villas)
        pintarVillas(filtrados)
    }
    else{
        let filtrados = filtroDeTexto(villas)
        let nuevos = one(filtrados)
        pintarVillas(nuevos) 
    }
         
})

document.getElementById("two").addEventListener('change', e => {
    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)
    
    if (checksConPalomita.length == 2){
        let filtrados = filtroDeTexto(villas)
        let nuevo = recorrer(filtrados)
        pintarVillas(nuevo)
    }
    else if (checksConPalomita.length == 3){
        let filtrados = filtroDeTexto(villas)
        pintarVillas(filtrados)
    }
    else{
        let filtrados = filtroDeTexto(villas)
        let nuevos = two(filtrados)
        pintarVillas(nuevos) 
    }
})

document.getElementById("three").addEventListener('change', e => {
    let checksConPalomita = [...document.querySelectorAll('input[type = checkbox]:checked')];
    checksConPalomita = checksConPalomita.map(e => e.value)
    
    if (checksConPalomita.length == 2){
        let filtrados = filtroDeTexto(villas)
        let nuevo = recorrer(filtrados)
        pintarVillas(nuevo)
    }
    else if (checksConPalomita.length == 3){
        let filtrados = filtroDeTexto(villas)
        pintarVillas(filtrados)
    }
    else{
        let filtrados = filtroDeTexto(villas)
        let nuevos = three(filtrados)
        pintarVillas(nuevos) 
    }
})

function recorrer(array) {
    let check = document.getElementById("one")
    let check1 = document.getElementById("two")
    let check2 = document.getElementById("three")

    if ((check.checked)&&(check1.checked)){
        let devolver = array.filter(villa => villa.characters.length < check1.value)
        return devolver
    }
    else if ((check.checked)&&(check2.checked)){
        let devolver = array.filter(villa => (villa.characters.length < 6) || (villa.characters.length > 10))
        return devolver
    }
    else if ((check1.checked)&&(check2.checked)){
        let devolver = array.filter(villa => (villa.characters.length >= 6))
        return devolver
    }
}

function one(array) {
    let check = document.getElementById("one")
    if (check.checked) {
        let devolver = array.filter(villa => villa.characters.length < check.value)
        return devolver
    }
    else {
        return array
    }
}
function two(array) {
    let check = document.getElementById("two")
    if (check.checked) {
        let devolver = array.filter(villa => (villa.characters.length < check.value) && (villa.characters.length > 5))
        return devolver
    }
    else {
       return array
    }
}
function three(array) {
    let check = document.getElementById("three")
    if (check.checked) {
        let devolver = array.filter(villa => villa.characters.length > check.value)
        return devolver
    }
    else {
        return array
    }
}
let favoritos = []

function agregarFavorito(aldea){
    console.log("sfdsfd");
    
}

function pintarVillas(arreglo) {
    let contenedorVillages = document.getElementById("contenedorVillages")
    contenedorVillages.innerHTML = ""

    if (arreglo.length > 0) {
        for (let i = 0; i < arreglo.length; i++) {
            let tarjeta = document.createElement('div')
            tarjeta.className = "card tarjetaVilla col-md-4"
            tarjeta.id = `tarjetaTrans`

            tarjeta.innerHTML = `
            <img src="../../Imgs/Villas/${arreglo[i].id}.png " class="card-img-top foto h-50 p-2">
        
            <div class="card-body text-center d-flex row">
                <h5 class="card-title fw-bold"> ${arreglo[i].name} </h5>
                <h5 class="card-title fw-bold"> Characters: ${arreglo[i].characters.length} </h5>
              <div class="d-flex justify-content-center">
                <a href="./detailsVillages.html?id=${arreglo[i].id}" class="btn w-50 mb-2 " id="detailsB">Characters</a>  
            </div>
            <button onclick='agregarFavorito(${arreglo[i].id})' class="btn"><img src="../../Imgs/starVacia.png" class="card-img-top starV"></button>
                
                <img class="js ms-auto pb-3 " src="../../Imgs/boton.png" alt=""  data-anijs="if: mouseover, on: .js,
                do: wobble animated"
                </div> `
            contenedorVillages.appendChild(tarjeta)
        }
    }
    else {
        let tarjeta = document.createElement('div')
        tarjeta.className = "card tarjetaVilla col-md-4"
        tarjeta.id = `tarjetaTrans`

        tarjeta.innerHTML = `
         <img src="../../Imgs/triste.webp " class="card-img-top foto h-50 p-2">
        <div class="card-body text-center d-flex row">
                <h5 class="card-title mt-3 fw-bold"> Not results found :(. Try it again with other characters. </h5>
                  
            </div> `
        contenedorVillages.appendChild(tarjeta)
    }

}


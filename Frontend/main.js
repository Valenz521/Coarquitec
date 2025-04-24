// const catalogoList = document.getElementById("catalogoList")
// const catalogoDetail = document.getElementById("catalogoDetail")
// const catalogoInfo = document.getElementById("catalogoInfo")

// let type = null

// function displaycatalogo(catalogo){
//     const catalogoCard = document.createElement("div")
//     catalogoCard.classList.add("catalogo-card")
//     catalogoCard.innerHTML = `
//     <img src="./assets/Cocinas/.jpeg">
//     <h3>${catalogo.name}</h3>
//     <p> descrip: ${catalogo.descrip}</p>
//     `
//     catalogoCard.addEventListener("click",()=>showcatalogoDetail(catalogo))
//     catalogoList.appendChild(catalogoCard)
//     return true
// }


// const container = document.getElementById('productos');

// fetch('./data.json')
//   .then(res => res.json())
//   .then(data => {
//     const productos = data.productos;

//     productos.forEach(producto => {
//       const card = document.createElement('div');
//       card.classList.add('card');

//       card.innerHTML = `
//         <h2>${producto.title}</h2>
//         <p>${producto.description}</p>
//         <img src="${producto.image}" alt="${producto.title}">
//       `;

//       container.appendChild(card);
//     });
//   })
//   .catch(error => console.error('Error cargando productos:', error));


const container = document.getElementById('productos');

// Crear un contenedor interno para las cards
const cardsContainer = document.createElement('div');
cardsContainer.classList.add('contenedor-cards');
container.appendChild(cardsContainer);

fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    const productos = data.productos;

    productos.forEach(producto => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
      <img src="${producto.image}" alt="${producto.title}">
        <h2>${producto.title}</h2>
        <p>${producto.description}</p>
        <button>Ver mas</button>
        
      `;

      cardsContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error cargando productos:', error));


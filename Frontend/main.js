const container = document.getElementById("productos");

// Crear un contenedor interno para las cards
const cardsContainer = document.createElement("div");
cardsContainer.classList.add("contenedor-cards");
container.appendChild(cardsContainer);

// fetch('./data.json')
fetch("http://localhost:3000/coarquitec/productos/")
  .then((res) => res.json())
  .then((data) => {
    const productos = data.data;

    console.log(data);

    productos.forEach((producto) => {
      const card = document.createElement("div");
      card.classList.add("card");

      // Cortamos la descripción para mostrar solo un fragmento en la tarjeta
      const descripcionLimitada =
        producto.description.length > 100
          ? `${producto.description.slice(0, 100)}...` // Recorta a los primeros 100 caracteres
          : producto.description;

      card.innerHTML = `
        <img src="http://localhost:3000/coarquitec/productos/images/${producto.image}" alt="${producto.title}">
        <section>
        <h2>${producto.title}</h2>
        <p class="descripcion-limitada">${descripcionLimitada}</p>
        </section>
     

        <div> 
        <button data-id="${producto.id}">Ver más</button>  
        </div>
        
        
      `;

      const button = card.querySelector("button");
      button.addEventListener("click", () => {
        window.location.href = `detail.html?id=${producto.id}`;
      });

      cardsContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error cargando productos:", error));


  fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  })
  .catch(err => console.error('Error al cargar el footer:', err));


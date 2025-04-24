const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("http://localhost:3000/coarquitec/productos/")
  .then((res) => res.json())
  .then((data) => {
    const producto = data.data.find((p) => p.id == id);

    console.log("Soy el producto: ", producto);

    if (producto) {
      document.getElementById("detail-img").src = producto.image;
      document.getElementById("detail-img").alt = producto.title;
      document.getElementById("detail-title").textContent = producto.title;
      document.getElementById("detail-desc").textContent = producto.description;
    } else {
      console.error("Producto no encontrado");
    }
  })
  .catch((err) => console.error("Error cargando detalle:", err));

//funcionalidad para el boton "lO QUIERO"
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  for (let i = 0; i < 15; i++) {
    createSparkle(e.clientX, e.clientY);
  }
  showMensaje();
});

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.textContent = "✨";
  sparkle.style.left = `${x + (Math.random() * 60 - 30)}px`;
  sparkle.style.top = `${y + (Math.random() * 60 - 30)}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1500);
}

function showMensaje() {
  const mensaje = document.createElement("div");
  mensaje.id = "mensaje-exito";
  mensaje.textContent = "¡Es tuyo!";
  document.body.appendChild(mensaje);
  setTimeout(() => mensaje.remove(), 2000);
}

//Para poner el nav de una forma dinamica
// fetch('nav.html')
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById('nav-container').innerHTML = data;
//   })
//   .catch(err => console.error('Error al cargar el nav:', err));

fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  })
  .catch((err) => console.error("Error al cargar el footer:", err));

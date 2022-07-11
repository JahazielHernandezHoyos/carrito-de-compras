let productos = [
    {
        id: 1,
        name: 'Pinzas de presion',
        price: 100,
        description: 'Pinzas de presion para el trabajo de la mano'
    },
    {
        id: 2,
        name: 'Clavos para madera',
        price: 1,
        description: 'Clavos para madera al mayor y detal'
    },
    {
        id: 3,
        name: 'Cinta Adhesiva',
        price: 30,
        description: 'Cinta Adhesiva para el trabajo de la mano'
    },
    {
        id: 4,
        name: 'Tanque de gas',
        price: 500,
        description: 'Tanque de gas para el trabajo de la mano'
    },
    {
        id: 5,
        name: 'Manguera para regar',
        price: 15,
        description: 'Manguera para regar para el trabajo de la mano'
    },
    {
        id: 6,
        name: 'Pintura de 1L',
        price: 160,
        description: 'Pintura de 1L para el trabajo de la mano'
    },
    {
        id: 7,
        name: 'Aerosol',
        price: 48,
        description: 'Aerosol para el trabajo de la mano'
    },
    {
        id: 8,
        name: 'Copia de llaves',
        price: 25,
        description: 'Copia de llaves para el trabajo de la mano'
    }
];

//seleccionar id productosInf
let productosInf = document.getElementById('productosInf');

//insertar productos en el html con un for
for (let i = 0; i < productos.length; i++) {
    productosInf.innerHTML += `
    <div class="col-md-4">
        <div class="card">
            <img class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${productos[i].name}</h5>
                <p class="card-text">Precio: ${productos[i].price}</p>
                <p class="card-text">Cantidad: ${productos[i].cantidad}</p>
                <button class="btn btn-danger" onclick="mostrar(${productos[i].id})" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar</button>
            </div>
        </div>
    </div>
    `;
}

function mostrar(id) {
    let producto = productos.find(producto => producto.id == id);
    document.querySelector('.modal-backdrop').remove();
    document.querySelector('#exampleModalLabel').innerHTML = `${producto.name}`;
    document.querySelector('.modal-body').innerHTML = `${producto.description}
    <br>
    Precio: ${producto.price}
    <br>
    Id: ${producto.id}`;
}


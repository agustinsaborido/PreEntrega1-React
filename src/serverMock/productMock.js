export const products = [
    {
        id: 1,
        name: 'Camiseta PreMatch',
        stock: 10,
        price: 51999,
        category: 'mujeres',
        description: 'Preparate para el saque inicial como las leyendas de Independiente con la Camiseta Fútbol Puma Cai Prematch Mujer. Está hecha para un calentamiento perfecto en la cancha y te preparará para que domines el juego. Producto hecho con un 100% de materiales reciclados, con excepción de los bordes y adornos, para progresar hacia un futuro mejor. Incorpora tecnología dryCELL, la tecnología de alto performance diseñada para absorber la humedad de tu cuerpo y mantenerlo seco mientras haces ejercicio',
        img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1100c81d/products/PU659159-02/PU659159-02-1.JPG'
    },
    {
        id: 2,
        name: 'Buzo de Fútbol / Gris',
        stock: 15,
        price: 89999,
        category: 'hombres',
        description: 'Entrá en el campo con estilo y confort incomparables con el Buzo Gris Puma Independiente Entrenamiento Top Hombre. Este atuendo fusiona la elegancia de Puma con la pasión del Rey de Copas, proporcionando un ajuste perfecto y libertad de movimiento ',
        img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8368776c/products/PU773560-05/PU773560-05-1.JPG'
    },
    {
        id: 3,
        name: 'Camiseta CAI 23/24',
        stock: 20,
        price: 57999,
        category: 'niños',
        description: 'Renová tu pasión por el rojo con la Camiseta Puma Independiente Titular Promo 23/24 Niño o lucite regalándosela a ese fanático que tanto querés. Una prenda que consagra tu pasión por el rey de copas. La nueva camiseta con cuello polo, escudo bordado del equipo y el BigCat de la marca en el frente te viste de orgullo por el equipo. Ponétela y destacate dentro y fuera de la cancha!',
        img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9da27410/products/PU606525-03CAI/PU606525-03CAI-1.JPG'
    },
];

export const getProducts = () =>{
    return new Promise ((resolve, reject) =>{
        if(products.length === 0) {
            reject(new Error('no hay productos'));
        }
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

export const getProductById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id.toString () === id.toString()));
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products.filter((products) => products.category === category));
        }, 3000);
    });
};


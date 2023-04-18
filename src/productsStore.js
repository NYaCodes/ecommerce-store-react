// camera: price_1MxYZYJEtX93ZPo3oJJspxMr
// glasses: price_1MxYXmJEtX93ZPo3i01xkeGS
// coffee: price_1MxYVwJEtX93ZPo3mqZnXduj



const productsArray = [
    {
        id:"price_1MxYVwJEtX93ZPo3mqZnXduj",
        title: "Coffee",
        price: 4.99
        
    },
     {
        id:"price_1MxYXmJEtX93ZPo3i01xkeGS",
        title: "Sunglasses",
        price: 9.99
        
    },
     {
        id:"price_1MxYZYJEtX93ZPo3oJJspxMr",
        title: "Camera",
        price: 39.99
        
    },
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
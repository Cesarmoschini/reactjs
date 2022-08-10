const products = [
    { id: 1, category: "suave", name: "Cápsula Génova", price: 2200, stock: 100, img: "https://www.nespresso.com/ecom/medias/sys_master/public/14318843953182/Livanto-XL.png", detail: "Café molido con tonos suaves al paladar, cosechado en fincas del noroeste italiano"},
    { id: 2, category: "intenso", name: "Cápsula Palermo", price: 2600, stock: 80, img: "https://www.nespresso.com/ecom/medias/sys_master/public/12839238107166.png", detail: "Café de molienda gruesa e intenso, cosechado en fincas sicilianas"},
    { id: 3, category: "clasico", name: "Cápsula Roma", price: 1800, stock: 0, img: "https://www.nespresso.com/ecom/medias/sys_master/public/14318837432350/rOMA-XL.png", detail: "Café molido reprocesado y cosechado en fincas cercanas a la capital italiana"},
    { id: 4, category: "suave", name: "Cápsula Venezia", price: 4100, stock: 20, img: "https://www.nespresso.com/ecom/medias/sys_master/public/12836983734302.png", detail: "Café de molienda gruesa y suave, sembrado en tierras altas venecianas y de cosecha temprana"},

];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 750)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 300)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 200)
    })
}

const products = [
    { id: '1', name: 'Cápsula Génova', price: 2200, category: 'suave', img:'https://www.nespresso.com/ecom/medias/sys_master/public/14318843953182/Livanto-XL.png', stock: 100, description:'Café molido con tonos suaves al paladar, cosechado en fincas del noroeste italiano', origin: 'Italia'},
    { id: '2', name: 'Cápsula Palermo', price: 2600, category: 'intenso', img:'https://www.nespresso.com/ecom/medias/sys_master/public/12839238107166.png', stock: 80, description:'Café de molienda gruesa e intenso, cosechado en fincas sicilianas', origin: 'Italia'},
    { id: '3', name: 'Cápsula Roma', price: 1800, category: 'clasico', img:'https://www.nespresso.com/ecom/medias/sys_master/public/14318837432350/rOMA-XL.png', stock: 20, description:'Café molido reprocesado y cosechado en fincas cercanas a la capital italiana', origin: 'Italia'},
    { id: '4', name: 'Cápsula Venezia', price: 4100, category: 'suave', img:'https://www.nespresso.com/ecom/medias/sys_master/public/12836983734302.png', stock: 200, description:'Café de molienda gruesa y suave, sembrado en tierras altas venecianas y de cosecha temprana', origin: 'Italia'},
    { id: '5', name: 'Cápsula Creme Brulee', price: 2500, category: 'suave', img:'https://www.nespresso.com/shared_res/mos/free_html/int/barista-flavoured/coffee-pdp/img/caramel-brulee/capsule_caramel-Brulee_OL_L.png', stock: 40, description:'Café molido grueso y cosechado en campos cercanos a Niza', origin: 'Francia'},
    { id: '6', name: 'Cápsula Buenos Aires Lungo', price: 1200, category: 'intenso', img:'https://www.nespresso.com/shared_res/agility/n-components/pdp/capsules/buenos-aires_L.png', stock: 120, description:'Café molido en molinos de vientos tandilense, y ahumeado en la capital argentina', origin: 'Argentina'}
]

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
        }, 250)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 200)
    })
}

const productos = [
    { id: 1, name: "Cápsula Génova", precio: 2200, stock: 100, image: "https://www.nespresso.com/ecom/medias/sys_master/public/14318843953182/Livanto-XL.png"},
    { id: 2, name: "Cápsula Palermo", precio: 1600, stock: 80, image: "https://www.nespresso.com/ecom/medias/sys_master/public/12839238107166.png" },
    { id: 3, name: "Cápsula Roma", precio: 1800, stock: 0, image: "https://www.nespresso.com/ecom/medias/sys_master/public/14318837432350/rOMA-XL.png"},
    { id: 4, name: "Cápsula Venezia", precio: 4100, stock: 20, image: "https://www.nespresso.com/ecom/medias/sys_master/public/12836983734302.png"},

];

export const getProducts= () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}



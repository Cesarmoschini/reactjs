import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from './index'
import { createAdaptedProductFromFirestore } from '../../adapters/productAdapter'

export const getProducts = (categoryId) => {
        const collectionRef = !categoryId 
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))

        return getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })
            return productsAdapted
        }).catch(error => {
            return error
        })
}

export const getProducts2 = (originId) => {
    const collectionRef = !originId 
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('origin', '==', originId))

    return getDocs(collectionRef).then(response => {
        const productsAdapted = response.docs.map(doc => {
            return createAdaptedProductFromFirestore(doc)
        })
        return productsAdapted
    }).catch(error => {
        return error
    })
}
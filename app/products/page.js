'use client'

import { useEffect, useState } from "react"
import ProductCard from "../components/productcard/productcard"

export default function Products() {
    // const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            await fetch('https://fakestoreapi.com/products/categories').then(res => res.json()).then(res => setCategories(res)).catch(err => console.log(err))
        }

        const getProducts = async () => {
            await fetch('https://fakestoreapi.com/products').then(res => res.json()).then(res => setProducts(res)).catch(err => console.log(err))
        }

        getProducts()
        getCategories()
    }, [])

    // useEffect(() => {
    //     console.log(products)
    // }, [products])

    return(
        <div>

            <div>
            { !categories || categories.length === 0 ? <></>
                : categories.map((category, index) => {
                    return(
                    <div key={index}>
                        {category}
                    </div>
                    )
                })
            }
            </div>

            { !products || products.length === 0 ? <></>
                : products.map(product => {
                    return(
                    <div key={product.id}>
                        <ProductCard
                            id={product.id}
                            category={product.category}
                            description={product.description}
                            image={product.image}
                            price={product.price}
                            rating={product.rating}
                            title={product.title}
                        />
                    </div>
                    )
                })
            }
        </div>
    )
}


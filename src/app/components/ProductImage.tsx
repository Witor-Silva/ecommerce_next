'use client'
import { useState } from "react"
import Image from "next/image"
import { ProductType } from "@/types/ProductType"
import Product from "./Product";
import { loadBindings } from "next/dist/build/swc";

type ProductImagePros = {
    product: ProductType;
    fill?: boolean;
};

export default function ProductImage({ product, fill }: ProductImagePros) {
    const [loading, setLoading] = useState(true);
    return fill ? (
        <Image
            src={product.image}
            fill
            alt={product.title}
            className={`objet-cover ${loading ? 'scale-110 blur-3xl gray-scale'
                : 'scale-100 blue-0 grayscale-0'
                }`}
            onLoadingComplete={() => setLoading(false)}
        />
    ) : (
        <Image
            src={product.image}
            width={400}
            height={700}
            alt={product.title}
            className={`objet-cover ${loading ? 'scale-110 blur-3xl gray-scale'
                : 'scale-100 blue-0 grayscale-0'
                }`}
            onLoadingComplete={() => setLoading(false)}
        />
    )


}
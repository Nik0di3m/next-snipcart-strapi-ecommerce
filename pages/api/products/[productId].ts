import { NextApiRequest, NextApiResponse } from 'next'
import { products } from '../../index'

export interface ISnipcartProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: string // Hack to pass the image URL instead of the StaticImage object we required
    fileGuid?: string
}

interface IProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: string
    fileGuid?: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { productId } = req.query
    const product: IProduct | undefined = products.find(
        (p) => p.id === productId
    )
    if (!product) {
        res.status(404).json({})
        return
    }
    const snipcartProduct: ISnipcartProduct = {
        ...product,
        image: product?.image ?? '',
    }

    res.status(200).json(snipcartProduct)
}

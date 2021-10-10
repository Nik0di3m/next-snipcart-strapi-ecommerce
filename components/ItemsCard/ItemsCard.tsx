import Image from 'next/image'
import Link from 'next/link'
import { HeartIcon, PlusCircleIcon } from '@heroicons/react/outline'
import {
    PlusCircleIcon as PlusCircleIconSolid,
    HeartIcon as HeartIconSolid,
} from '@heroicons/react/solid'
import { useState } from 'react'

interface ItemCardProps {
    name: string
    price: number
}

const ItemsCard = ({ name, price }: ItemCardProps) => {
    const [onWishList, setOnWishList] = useState<boolean>(false)
    const [onCart, setOnCart] = useState<boolean>(false)

    return (
        <div className="relative flex h-full w-full items-center justify-center bg-transparent">
            <div className="relative h-5/6 w-5/6 hover:scale-110 cursor-pointer duration-500 ease-in-out">
                <Link href="#">
                    <a>
                        <Image
                            src="/images/test.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </Link>
            </div>
            <div className="absolute left-0 top-0">
                <div className="lg:h-[75px] flex h-12 items-center justify-start bg-black px-10 text-2xl font-bold">
                    <Link href="#">
                        <a>
                            <h1 className="hover:scale-110 duration-300">
                                {name}
                            </h1>
                        </a>
                    </Link>
                </div>
                <div className="flex h-8 w-2/3 items-center justify-center bg-black text-lg lg:h-11">
                    <span>{price.toPrecision(4)} zł</span>
                </div>
            </div>
            <div className="absolute right-5 top-5 space-y-3">
                {onWishList ? (
                    <HeartIconSolid
                        className="h-8 lg:h-12"
                        onClick={() => setOnWishList(!onWishList)}
                    />
                ) : (
                    <HeartIcon
                        className="h-8 animate-pulse lg:h-12"
                        onClick={() => setOnWishList(!onWishList)}
                    />
                )}

                {onCart ? (
                    <PlusCircleIconSolid
                        className="h-8 lg:h-12"
                        onClick={() => setOnCart(!onCart)}
                    />
                ) : (
                    <PlusCircleIcon
                        className="h-8 animate-pulse lg:h-12"
                        onClick={() => setOnCart(!onCart)}
                    />
                )}
            </div>
        </div>
    )
}

export default ItemsCard

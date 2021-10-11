import Image from 'next/image'
import StareGrade from '../StarGrade/StareGrade'
import Link from 'next/link'
import { HeartIcon, PlusCircleIcon } from '@heroicons/react/outline'
import {
    HeartIcon as HeartIconSolid,
    PlusCircleIcon as PlusCircleIconSolid,
} from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
const ItemViewCard = () => {
    const activeAnimation = useAnimation()

    const [onWishList, setOnWishList] = useState<boolean>(false)
    const [onCart, setOnCart] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)

    const animation = {
        visible: {
            x: 30,
            opacity: 0,
            transition: {
                duration: 0.1,
            },
        },
        hidden: {
            x: 0,
            opacity: 1,
            display: 'block',
        },
    }

    useEffect(() => {
        if (active) {
            activeAnimation.start('hidden')
        } else {
            activeAnimation.start('visible')
        }
    }, [active, activeAnimation])

    return (
        <article
            onMouseOver={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onTouchStartCapture={() => setActive(!active)}
            className="flex h-auto w-full flex-col items-start"
        >
            <div className="relative h-96 w-full border border-secondary bg-primary">
                <div className="w-[90%] h-[90%] relative hover:scale-110 duration-300">
                    <Link href="/product/123">
                        <a>
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                                className="cursor-pointer"
                            />
                        </a>
                    </Link>
                </div>
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        animate={activeAnimation}
                        initial="visible"
                        variants={animation}
                        exit={{ display: 'none' }}
                        className="absolute right-5 top-5 space-y-3"
                    >
                        {onWishList ? (
                            <HeartIconSolid
                                className="h-6 hover:scale-125 cursor-pointer duration-150 ease-in"
                                onClick={() =>
                                    setOnWishList(!onWishList)
                                }
                            />
                        ) : (
                            <HeartIcon
                                className="h-6 hover:scale-125 cursor-pointer duration-150 ease-in"
                                onClick={() =>
                                    setOnWishList(!onWishList)
                                }
                            />
                        )}

                        {onCart ? (
                            <PlusCircleIconSolid
                                className="h-6 hover:scale-125 cursor-pointer duration-150 ease-in"
                                onClick={() => setOnCart(!onCart)}
                            />
                        ) : (
                            <PlusCircleIcon
                                className="h-6 hover:scale-125 cursor-pointer duration-150 ease-in"
                                onClick={() => setOnCart(!onCart)}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
                <div className="absolute left-0 top-0 animate-pulse bg-black px-4 py-1">
                    <h2>NEW</h2>
                </div>
            </div>
            <div className="flex w-full items-center justify-between">
                <Link href="/product/123">
                    <a>
                        <h1 className="text-xl hover:text-accent duration-150 ease-in">
                            Krzemień wieczny
                        </h1>
                    </a>
                </Link>
                <h2 className="text-xl">70.00zł</h2>
            </div>
            <div>
                <StareGrade />
            </div>
        </article>
    )
}

export default ItemViewCard

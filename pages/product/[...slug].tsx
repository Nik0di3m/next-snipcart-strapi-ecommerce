import { ChevronRightIcon } from '@heroicons/react/solid'
import { motion, useAnimation } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import StareGrade from '../../components/StarGrade/StareGrade'
const ProductPage: NextPage = () => {
    const ITEM_NUMBER = 6

    const [listActive, setListActive] = useState<boolean>(false)
    const animationStart = useAnimation()
    const handleClick = () => {
        if (!listActive) {
            animationStart.start('visible')
            setListActive(!listActive)
        } else {
            animationStart.start('hidden')
            setListActive(!listActive)
        }
    }

    const animation = {
        hidden: {
            height: '40px',
        },
        visible: {
            height: '150px',
        },
    }

    return (
        <main className="min-h-screen w-full px-2">
            <section className="flex w-full">
                <div className="w-[70%]">
                    <div className="h-[600px] flex w-full items-center justify-center bg-primary">
                        <div className="relative h-4/5 w-4/5">
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div
                            className={`bg-[#050505] hover:bg-[#1a1a1a] duration-150 cursor-pointer relative h-48 w-1/${ITEM_NUMBER}`}
                        >
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div
                            className={`bg-[#050505] hover:bg-[#1a1a1a] duration-150 cursor-pointer relative h-48 w-1/${ITEM_NUMBER}`}
                        >
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div
                            className={`bg-[#050505] hover:bg-[#1a1a1a] duration-150 cursor-pointer relative h-48 w-1/${ITEM_NUMBER}`}
                        >
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div
                            className={`bg-[#050505] hover:bg-[#1a1a1a] duration-150 cursor-pointer relative h-48 w-1/${ITEM_NUMBER}`}
                        >
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div
                            className={`bg-[#050505] hover:bg-[#1a1a1a] duration-150 cursor-pointer relative h-48 w-1/${ITEM_NUMBER}`}
                        >
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div
                            className={`bg-[#050505] hover:bg-[#1a1a1a] duration-150 cursor-pointer relative h-48 w-1/${ITEM_NUMBER}`}
                        >
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[30%] p-6">
                    <article>
                        <h1 className="text-3xl font-normal">
                            Krzemień Wieczny
                        </h1>
                        <p className="mb-6 mt-12 font-light tracking-wide">
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Ipsam, dolore voluptas
                            aperiam fuga, nesciunt recusandae
                            dignissimos voluptatum iste quo fugiat
                            soluta rem facere odio, culpa tempora
                            laudantium? Nisi, totam tenetur? Nihil
                            ullam quisquam quas! Soluta ut odio,
                            temporibus dolorum rerum quas recusandae
                            officia sit ipsam laboriosam. Molestias
                            provident iste temporibus reprehenderit
                            aut, quasi voluptatibus magni iusto
                            incidunt accusamus enim accusantium.
                            Architecto deserunt similique nisi
                            quisquam dignissimos, quo, amet fugiat
                            voluptatibus quasi laudantium repellendus
                            repudiandae possimus tempora dolorem
                            consequuntur consectetur molestias
                            eveniet. Voluptas enim quas sequi quam
                            consequuntur consequatur voluptates iste!
                            Nesciunt sed, accusantium facilis ut nemo
                            itaque neque vitae voluptate illo, illum
                            odio officiis molestias obcaecati quam
                            architecto vero eum. Possimus corporis
                            beatae voluptas corrupti dicta obcaecati
                            explicabo sunt voluptatem!
                        </p>
                    </article>
                    <StareGrade />
                    <div className="mt-6 flex justify-between">
                        <button className="w-1/3 hover:scale-105 bg-white py-4 text-black duration-200">
                            <span className="uppercase">Buy Now</span>
                        </button>
                        <button className="w-1/3 hover:scale-105 bg-white py-4 text-black duration-200">
                            <span className="uppercase">
                                Add to cart
                            </span>
                        </button>
                    </div>
                    <div className="mt-8">
                        <motion.div
                            variants={animation}
                            initial="hidden"
                            animate={animationStart}
                            transition={{ ease: 'easeInOut' }}
                            onClick={() => handleClick()}
                            className="overflow-y-hidden border-b border-accent duration-200"
                        >
                            <div className="flex cursor-pointer items-center">
                                <ChevronRightIcon
                                    className={`h-10 duration-200 text-accent ${
                                        listActive && 'rotate-90'
                                    }`}
                                />
                                <h2 className="text-lg font-medium first-letter:capitalize text-accent">
                                    Detail
                                </h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. A veniam sit
                                accusantium sint omnis expedita
                                exercitationem eos doloribus iure
                                consequatur temporibus, pariatur, hic
                                numquam et quos voluptatum,
                                reprehenderit reiciendis quaerat.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductPage

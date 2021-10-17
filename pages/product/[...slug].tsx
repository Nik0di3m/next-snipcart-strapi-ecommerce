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
            <section className="flex w-full flex-col lg:flex-row">
                <div className="lg:w-[70%]">
                    <div className="h-[300px] lg:h-[600px] flex w-full items-center justify-center bg-primary">
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
                            className={`bg-[#050505] hover:bg-[#1a1a1a] active:bg-[#1a1a1a] duration-150 cursor-pointer relative h-24 lg:h-48 w-1/${ITEM_NUMBER}`}
                        >
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div
                            className={`bg-[#050505] hover:bg-[#1a1a1a] active:bg-[#1a1a1a] duration-150 cursor-pointer relative h-24 lg:h-48 w-1/${ITEM_NUMBER}`}
                        >
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div
                            className={`bg-[#050505] hover:bg-[#1a1a1a] active:bg-[#1a1a1a] duration-150 cursor-pointer relative h-24 lg:h-48 w-1/${ITEM_NUMBER}`}
                        >
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div
                            className={`bg-[#050505] hover:bg-[#1a1a1a] active:bg-[#1a1a1a] duration-150 cursor-pointer relative h-24 lg:h-48 w-1/${ITEM_NUMBER}`}
                        >
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div
                            className={`bg-[#050505] hover:bg-[#1a1a1a] active:bg-[#1a1a1a] duration-150 cursor-pointer relative h-24 lg:h-48 w-1/${ITEM_NUMBER}`}
                        >
                            <Image
                                src="/images/test.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div
                            className={`bg-[#050505] hover:bg-[#1a1a1a] active:bg-[#1a1a1a] duration-150 cursor-pointer relative h-24 lg:h-48 w-1/${ITEM_NUMBER}`}
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
                <div className="lg:w-[30%] p-6">
                    <article>
                        <h1 className="mb-2 text-3xl font-normal">
                            Krzemień Wieczny
                        </h1>
                        <StareGrade />
                        <p className="mb-6 mt-6 font-light tracking-wide">
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
                    <div className="mt-6 flex flex-col justify-between space-y-5 lg:flex-row lg:space-y-0">
                        <button
                            data-item-id="1"
                            data-item-price="80.00"
                            data-item-url="/api/products/1"
                            data-item-name="Zapalniczka"
                            data-item-image="/images/test.png"
                            data-item-file-guid="39c97d6d-3a02-4f67-bf6d-7904d7438292"
                            className="snipcart-add-item hover:scale-105 bg-white py-4 text-black duration-200 lg:w-1/3"
                        >
                            <span className="uppercase">Buy Now</span>
                        </button>
                        <button className="hover:scale-105 bg-white py-4 text-black duration-200 lg:w-1/3">
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

import type { NextPage } from 'next'
import Head from 'next/head'
import BestSellersSection from '../components/BestSellersSection/BestSellersSection'
import CategoryItemCard from '../components/CategoryItemCard/CategoryItemCard'
import CategorySlider from '../components/CategorySlider/CategorySlider'
import ItemsCard from '../components/ItemsCard/ItemsCard'
import ItemsMainSection from '../components/ItemsMainSection/ItemsMainSection'
import ItemsSecoundSection from '../components/ItemsSecoundSection/ItemsSecoundSection'
import TextSection from '../components/TextSection/TextSection'

const Home: NextPage = () => {
    return (
        <div className="min-h-screen min-w-full py-2 text-primaryText">
            <Head>
                <title>Shop</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <section className="px-2">
                    <ItemsMainSection
                        main={
                            <ItemsCard
                                name="Krzemień wieczny"
                                price={70}
                            />
                        }
                        top={
                            <ItemsCard
                                name="Krzemień wieczny"
                                price={70}
                            />
                        }
                        bottom={
                            <ItemsCard
                                name="Krzemień wieczny"
                                price={70}
                            />
                        }
                    />
                </section>
                <section>
                    <CategorySlider>
                        <CategoryItemCard />
                        <CategoryItemCard />
                        <CategoryItemCard />
                        <CategoryItemCard />
                        <CategoryItemCard />
                        <CategoryItemCard />
                        <CategoryItemCard />
                        <CategoryItemCard />
                    </CategorySlider>
                </section>
                <section>
                    <TextSection />
                </section>
                <section className="px-2">
                    <ItemsSecoundSection
                        main={
                            <ItemsCard
                                name="Krzemień wieczny"
                                price={70}
                            />
                        }
                        top={
                            <ItemsCard
                                name="Krzemień wieczny"
                                price={70}
                            />
                        }
                        bottom={
                            <ItemsCard
                                name="Krzemień wieczny"
                                price={70}
                            />
                        }
                    />
                </section>
                <section>
                    <BestSellersSection>
                        <CategoryItemCard />
                        <CategoryItemCard />
                        <CategoryItemCard />
                        <CategoryItemCard />
                        <CategoryItemCard />
                        <CategoryItemCard />
                    </BestSellersSection>
                </section>
            </main>
        </div>
    )
}

export default Home
export const products = [
    {
        id: '1',
        name: 'Krzemień wieczny',
        price: 80.0,
        image: '/images/test.png',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quas rerum a porro ratione repellendus iste, vero corrupti, quibusdam magni consequuntur nostrum quam consectetur cupiditate atque ducimus unde, numquam tempora.',
        url: '/api/products/1',
    },
    {
        id: '2',
        name: 'Krzemień wieczny',
        price: 80.0,
        image: '/images/test.png',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quas rerum a porro ratione repellendus iste, vero corrupti, quibusdam magni consequuntur nostrum quam consectetur cupiditate atque ducimus unde, numquam tempora.',
        url: '/api/products/2',
    },
    {
        id: '3',
        name: 'Krzemień wieczny',
        price: 80.0,
        image: '/images/test.png',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quas rerum a porro ratione repellendus iste, vero corrupti, quibusdam magni consequuntur nostrum quam consectetur cupiditate atque ducimus unde, numquam tempora.',
        url: '/api/products/3',
    },
    {
        id: '4',
        name: 'Krzemień wieczny',
        price: 80.0,
        image: '/images/test.png',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quas rerum a porro ratione repellendus iste, vero corrupti, quibusdam magni consequuntur nostrum quam consectetur cupiditate atque ducimus unde, numquam tempora.',
        url: '/api/products/4',
    },
    {
        id: '5',
        name: 'Krzemień wieczny',
        price: 80.0,
        image: '/images/test.png',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quas rerum a porro ratione repellendus iste, vero corrupti, quibusdam magni consequuntur nostrum quam consectetur cupiditate atque ducimus unde, numquam tempora.',
        url: '/api/products/5',
    },
    {
        id: '6',
        name: 'Krzemień wieczny',
        price: 80.0,
        image: '/images/test.png',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quas rerum a porro ratione repellendus iste, vero corrupti, quibusdam magni consequuntur nostrum quam consectetur cupiditate atque ducimus unde, numquam tempora.',
        url: '/api/products/6',
    },
    {
        id: '7',
        name: 'Krzemień wieczny',
        price: 80.0,
        image: '/images/test.png',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quas rerum a porro ratione repellendus iste, vero corrupti, quibusdam magni consequuntur nostrum quam consectetur cupiditate atque ducimus unde, numquam tempora.',
        url: '/api/products/7',
    },
    {
        id: '8',
        name: 'Krzemień wieczny',
        price: 80.0,
        image: '/images/test.png',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quas rerum a porro ratione repellendus iste, vero corrupti, quibusdam magni consequuntur nostrum quam consectetur cupiditate atque ducimus unde, numquam tempora.',
        url: '/api/products/8',
    },
    {
        id: '9',
        name: 'Krzemień wieczny',
        price: 80.0,
        image: '/images/test.png',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quas rerum a porro ratione repellendus iste, vero corrupti, quibusdam magni consequuntur nostrum quam consectetur cupiditate atque ducimus unde, numquam tempora.',
        url: '/api/products/9',
    },
    {
        id: '10',
        name: 'Krzemień wieczny',
        price: 80.0,
        image: '/images/test.png',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quas rerum a porro ratione repellendus iste, vero corrupti, quibusdam magni consequuntur nostrum quam consectetur cupiditate atque ducimus unde, numquam tempora.',
        url: '/api/products/10',
    },
]

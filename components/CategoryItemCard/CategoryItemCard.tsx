import Image from 'next/image'
import Link from 'next/link'

const CategoryItemCard = () => {
    return (
        <div className="flex h-full items-center">
            <div className="relative flex h-full w-64 lg:w-80">
                <Image
                    src="/images/test.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className="bg-black px-10 py-3">
                <h1 className="text-2xl">Zapałki</h1>
            </div>
        </div>
    )
}

export default CategoryItemCard

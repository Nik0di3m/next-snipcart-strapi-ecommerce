import Image from 'next/image'
const ItemsCard = () => {
    return (
        <div className="relative flex h-full w-full items-center justify-center bg-transparent">
            <div className="relative h-5/6 w-5/6 hover:scale-110 duration-500 ease-in-out">
                <Image
                    src="/images/test.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    )
}

export default ItemsCard

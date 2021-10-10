import Image from 'next/image'
import StareGrade from '../StarGrade/StareGrade'

const ItemViewCard = () => {
    return (
        <article className="flex h-auto w-full flex-col items-start">
            <div className="h-96 w-full border border-secondary bg-primary">
                <div className="w-[90%] h-[90%] relative hover:scale-110 duration-300">
                    <Image
                        src="/images/test.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className="flex w-full items-center justify-between">
                <h1 className="text-xl">Krzemień wieczny</h1>
                <h2 className="text-xl">70.00zł</h2>
            </div>
            <div>
                <StareGrade />
            </div>
        </article>
    )
}

export default ItemViewCard

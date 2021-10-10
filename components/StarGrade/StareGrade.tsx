import { StarIcon } from '@heroicons/react/solid'

const StareGrade = () => {
    const starRender = (number: number) => {
        const widthDiv = (number / 5) * 100
        console.log(widthDiv)
        const fullWidth = 100 - widthDiv
        return fullWidth
    }

    return (
        <div className="w-18 relative bg-black">
            <div className="flex">
                <StarIcon className="h-4" />
                <StarIcon className="h-4" />
                <StarIcon className="h-4" />
                <StarIcon className="h-4" />
                <StarIcon className="h-4" />
            </div>
            <div
                style={{ width: `${starRender(3.7)}%` }}
                className="absolute right-0 top-0 h-full bg-black"
            ></div>
        </div>
    )
}

export default StareGrade

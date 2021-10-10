import { ReactChild, ReactChildren, ReactNode } from 'react'

interface SliderProps {
    children: ReactNode
}

const CategorySlider = ({ children }: SliderProps) => {
    return (
        <div className="scrollbar-thin scrollbar-thumb-secondary scrollbar-track-primary flex h-72 w-full items-center justify-around overflow-x-scroll border-b border-t border-secondary bg-primary lg:h-80">
            {children}
        </div>
    )
}

export default CategorySlider

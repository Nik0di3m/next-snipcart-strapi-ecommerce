import { ReactNode } from 'react'

interface BestSellersProps {
    children: ReactNode
}

const BestSellersSection = ({ children }: BestSellersProps) => {
    return (
        <div className="scrollbar-thin scrollbar-thumb-secondary scrollbar-track-primary flex h-72 w-full items-center justify-around overflow-x-scroll border-b border-t border-secondary bg-black lg:h-80">
            {children}
        </div>
    )
}

export default BestSellersSection

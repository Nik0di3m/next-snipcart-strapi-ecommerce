import { ReactNode } from 'react'

interface LayoutProps {
    mian: ReactNode
    top: ReactNode
    bottom: ReactNode
}

const ItemsMainSection = ({ mian, top, bottom }: LayoutProps) => {
    return (
        <div className="grid-col-3 grid h-screen w-full grid-flow-col grid-rows-4 gap-2 place-self-center">
            <div className="col-span-2 row-span-4 border border-secondary bg-primary">
                {mian}
            </div>
            <div className="row-span-2 border border-secondary bg-primary">
                {top}
            </div>
            <div className="row-span-2 border border-secondary bg-primary">
                {bottom}
            </div>
        </div>
    )
}

export default ItemsMainSection

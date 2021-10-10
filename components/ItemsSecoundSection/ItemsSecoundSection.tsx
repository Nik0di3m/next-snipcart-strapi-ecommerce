import { ReactNode } from 'react'

interface LayoutProps {
    main: ReactNode
    top: ReactNode
    bottom: ReactNode
}

const ItemsSecoundSection = ({ main, top, bottom }: LayoutProps) => {
    return (
        <div className="min-h-[200vh] lg:grid-col-3 mb-2 grid w-full gap-2 place-self-center lg:min-h-screen lg:grid-flow-col lg:grid-rows-4">
            <div className="border border-secondary bg-primary lg:row-span-2">
                {top}
            </div>
            <div className="border border-secondary bg-primary lg:row-span-2">
                {bottom}
            </div>
            <div className="border border-secondary bg-primary lg:col-span-2 lg:row-span-4">
                {main}
            </div>
        </div>
    )
}

export default ItemsSecoundSection

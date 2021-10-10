import { ReactChild, ReactChildren, ReactNode } from 'react'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-black">
            <Menu />
            {children}
            <Footer />
        </div>
    )
}

export default Layout

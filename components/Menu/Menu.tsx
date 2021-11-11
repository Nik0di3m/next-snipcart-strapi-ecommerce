import { FireIcon, MenuIcon } from '@heroicons/react/solid'
import SearchInput from '../SearchInput/SearchInput'
import Link from 'next/link'
import {
    ShoppingBagIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline'
const Menu = () => {
    return (
        <header className="h-[75px] sticky top-0 z-50 flex w-full items-center border-b border-secondary bg-black p-2">
            <Link href="/">
                <a>
                    <FireIcon className="h-14 hover:scale-105 active:scale-95 cursor-pointer text-primaryText duration-150 ease-in-out" />
                </a>
            </Link>
            <Link href="/category/all">
                <a className="ml-2">
                    <h1 className="break-none w-36 text-lg text-white">
                        All products
                    </h1>
                </a>
            </Link>
            <SearchInput />
            <div className="snipcart-checkout snipcart-summary flex cursor-pointer items-center">
                <ShoppingBagIcon className="h-8" />
                <span className="snipcart-total-price"></span>
            </div>
        </header>
    )
}

export default Menu

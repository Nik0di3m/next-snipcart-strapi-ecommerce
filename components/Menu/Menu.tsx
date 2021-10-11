import { MenuIcon } from '@heroicons/react/solid'
import SearchInput from '../SearchInput/SearchInput'
import Link from 'next/link'
const Menu = () => {
    return (
        <header className="h-[75px] sticky top-0 z-50 flex w-full items-center border-b border-secondary bg-black p-2">
            <MenuIcon className="h-10 hover:scale-105 active:scale-95 cursor-pointer text-primaryText duration-150 ease-in-out" />
            <Link href="/category/all">
                <a>
                    <h1 className="break-none w-36 text-lg text-white">
                        All products
                    </h1>
                </a>
            </Link>
            <SearchInput />
        </header>
    )
}

export default Menu

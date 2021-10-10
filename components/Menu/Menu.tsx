import { MenuIcon } from '@heroicons/react/solid'
import SearchInput from '../SearchInput/SearchInput'

const Menu = () => {
    return (
        <header className="h-[75px] sticky top-0 z-50 flex w-full items-center border-b border-secondary bg-black p-2">
            <MenuIcon className="text-primaryText h-10 hover:scale-105 active:scale-95 cursor-pointer duration-150 ease-in-out" />
            <SearchInput />
        </header>
    )
}

export default Menu

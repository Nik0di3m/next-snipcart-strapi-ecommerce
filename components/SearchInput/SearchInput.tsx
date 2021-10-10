import { SearchIcon } from '@heroicons/react/solid'
const SearchInput = () => {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="flex items-center justify-center space-x-3 p-3 lg:w-1/3">
                <input
                    placeholder="Search products..."
                    className="placeholder-accent text-prim text-primaryText w-full border-b border-accent bg-transparent outline-none"
                    type="text"
                />
                <SearchIcon className="text-primaryText h-8 hover:scale-105 active:scale-95 cursor-pointer duration-100 ease-in" />
            </div>
        </div>
    )
}

export default SearchInput

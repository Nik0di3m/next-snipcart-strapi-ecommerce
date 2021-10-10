import Link from 'next/link'

type FilterOption = {
    name: string
    url: string
}

interface FilterListProps {
    title: string
    options?: FilterOption[]
}

const FilterList = ({ title, options }: FilterListProps) => {
    return (
        <div>
            <h1 className="text-4xl">{title}</h1>
            <ul className="mt-2">
                {options?.map((item) => (
                    <Link href={item.url} key={item.name}>
                        <a>
                            <li
                                className="text-xl text-secondary hover:text-white duration-150 ease-in"
                                key={item.name}
                            >
                                {item.name}
                            </li>
                        </a>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default FilterList

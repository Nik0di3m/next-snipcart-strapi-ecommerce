import { FireIcon } from '@heroicons/react/solid'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className="text-primaryText min-h-72 w-full border-t border-secondary px-2">
            <div className="flex h-full flex-col items-center justify-between py-8 lg:flex-row">
                <FireIcon className="h-48" />
                <div className="items-center lg:w-4/5">
                    <ul className="flex flex-wrap items-center justify-center space-x-3 lg:w-1/6 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-3">
                        <Link href="#" passHref>
                            <a>
                                <li className="hover:border-b border-secondary text-lg font-light duration-150">
                                    Home
                                </li>
                            </a>
                        </Link>
                        <Link href="#" passHref>
                            <a>
                                <li className="hover:border-b border-secondary text-lg font-light duration-150">
                                    About us
                                </li>
                            </a>
                        </Link>
                        <Link href="#" passHref>
                            <a>
                                <li className="hover:border-b border-secondary text-lg font-light duration-150">
                                    Term of use
                                </li>
                            </a>
                        </Link>
                        <Link href="#" passHref>
                            <a>
                                <li className="hover:border-b border-secondary text-lg font-light duration-150">
                                    Shipping & Returns
                                </li>
                            </a>
                        </Link>
                        <Link href="#" passHref>
                            <a>
                                <li className="hover:border-b border-secondary text-lg font-light duration-150">
                                    Private policy
                                </li>
                            </a>
                        </Link>
                    </ul>
                </div>
            </div>
            <div>
                <span className="text-accent">NikoCode © 2021</span>
            </div>
        </div>
    )
}

export default Footer

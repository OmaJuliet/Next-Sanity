import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold lg:px-12 lg:py-12">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                        className="rounded-full"
                        width={50}
                        height={50}
                        src="/assets/images/Cartoonify.png"
                        alt="logo"
                    />
                </Link>
                <h1 className="">Doc App</h1>
            </div>
            <div>
                <Link
                    href="/"
                    className="px-5 py-3 text-sm md:text-base bg-gray-600 text-blue-500 flex items-center rounded-full"
                >
                    Sign up
                </Link>
            </div>
        </header>
    )
}

export default Header
import Link from 'next/link'

function NavBar() {
    return (
        <div className="flex-col items-center w-full select-none">
            {/* Header */}
            <div className="flex items-center w-full p-2">
                {/* Left Side Nav */}
                <div className="flex gap-x-8 mr-auto justify-start">
                    <h1 className="bg-green-600 rounded-full px-4 py-2 select-none">simplereflex.pro</h1>
                    <div className="flex">
                        <ul className="flex items-center gap-x-4">
                            <Link href="/">Play</Link>
                            <Link href="leaderboard">Leaderboard</Link>
                            <Link href="settings">Settings</Link>
                        </ul>
                    </div>
                </div>

                {/* Right Side Nav */}
                <div className="justify-right ml-auto">
                    <button type="button">Account</button>
                </div>

            </div>
            <hr className ="w-[80%] h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700 select-none cursor-not-allowed"/>
        </div>
    )
}

export default NavBar;
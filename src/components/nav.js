import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();
    const navStyle = "relative px-5 opacity-70 hover:opacity-100 hover:font-bold hover:bg-white hover:text-black h-full flex justify-center items-center transition-all ease-in-out duration-300";
    const navStyleSelected = "after:blo ck after:absolute after:border-b-4 after:w-full after:border-red-500 after:bottom-0";

    const navItem = [
        {
            label: "Home",
            to: "/"
        },
        {
            label: "Twitter",
            to: "https://twitter.com/Beaverscoin"
        },
        {
            label: "Telegram",
            to: "https://t.me/NeuralinkedBeavers"
        },
        {
            label: "Contract Address",
            to: "https://bscscan.com/token/0x7857beae873b4310ae8373eb82e2beb81cca0a9b"
        }
    ]

    return (
        <div className="absolute bg-black top-0 left-20 shadow-md bg-opacity-60 h-[80px] flex justify-center w-[900px] rounded-b-lg z-10">
            <h1 className="top-10 text-5xl text-white font-black flex justify-center self-center mr-10">Neuralinked Beavers</h1>
            <nav className="text-white text-2xl flex justify-center items-center">
                {navItem.map((item) =>
                    <>
                        <Link className={`${navStyle} ${location.pathname === item.to && navStyleSelected}`} to={item.to}>{item.label}</Link> |
                    </>
                )}
            </nav>
        </div>
    )
}

export default Nav;
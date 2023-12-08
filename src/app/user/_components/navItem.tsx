import Link from "next/link";
import { FaAngleRight, FaRegUser } from "react-icons/fa";


interface IProps {
    leftIcon: React.ReactNode;
    name: string;
    caption: string;
    rightIcon: React.ReactNode;
    link: string
}

const NavItem = ({ leftIcon, name, rightIcon, caption, link }: IProps) => {
    return (
        <Link href={link}>
            <div className='flex justify-between items-center px-4 py-3 w-[20rem] bg-white hover:bg-slate-200 hover:rounded-sm'>
                <div className='flex gap-2 items-center h'>
                    <div>
                        {leftIcon}
                    </div>

                    <div className='block'>
                        <h4 className='text-md font-semibold'>{name}</h4>
                        <p className='font-xs'>{caption}</p>

                    </div>

                </div>
                <div>
                    {rightIcon}
                </div>
            </div>

        </Link >
    )
}

export default NavItem;
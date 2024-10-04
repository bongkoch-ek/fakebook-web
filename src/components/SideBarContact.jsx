import React from 'react'
import { SearchIcon } from '../icons'

export default function SideBarContact() {
    return (
        <div className="fixed top-14 right-0 h-full w-[350px] overflow-auto flex flex-col gap-2 pt-4 px-2 max-xl:hidden">
            <div className="flex justify-between text-gray-500">
                <span>Contact</span>
                <div className="flex gap-2">
                    <SearchIcon className="w-6" />
                    ...
                </div>
            </div>
            <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
                <div className="avatar items-center cursor-pointer">
                    <div className="w-10 h-10 rounded-full">
                        <img src="https://www.svgrepo.com/show/407389/scientist-medium-dark-skin-tone.svg" />
                    </div>
                </div>
                Bobby Codecamp
            </button>
            <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
                <div className="avatar items-center cursor-pointer">
                    <div className="w-10 h-10 rounded-full">
                        <img src="https://www.svgrepo.com/show/420323/avatar-avocado-food.svg" />
                    </div>
                </div>
                Harry Codecamp
            </button>
            <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
                <div className="avatar items-center cursor-pointer">
                    <div className="w-10 h-10 rounded-full">
                        <img src="https://www.svgrepo.com/show/420315/avatar-cloud-crying.svg" />
                    </div>
                </div>
                Johny Codecamp
            </button>
        </div>
    )
}

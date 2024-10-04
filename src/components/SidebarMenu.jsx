import React from 'react'
import { BookmarkIcon, ClockIcon, FriendIcon, GroupIcon, HomeIcon, MoreIcon, ShopIcon } from '../icons'
import MenuItem from './MenuItem'
import Avatar from './Avatar'
import useUserStore from '../stores/userStore'

export default function SidebarMenu() {
    const user = useUserStore(state => state.user)

    return (
        <div>
            <div className="fixed top-14 h-full w-[350px] 
    overflow-auto flex flex-col gap-2 min-w-[220px] max-xl:w-[200px]">
                {/* <MenuItem icon={Avatar} text="Andy codecamp" className="w-10 rounded-full" imgSrc="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/> */}

                <MenuItem icon={() => (<Avatar imgSrc={user.profileImage} className="w-11 h-11 rounded-full" />)} text={`${user.firstName} ${user.lastName}`} />
                <MenuItem icon={FriendIcon} text="Friends" className="w-10" />
                <MenuItem icon={ClockIcon} text="Memories" className="w-10" />
                <MenuItem icon={GroupIcon} text="Group" className="w-10" />
                <MenuItem icon={BookmarkIcon} text="Save" className="w-10" />
                <MenuItem icon={ShopIcon} text="Marketplace" className="w-10" />
                <MenuItem icon={MoreIcon} text="More..." className="w-10 p-2 border border-gray-500 rounded-full" />

                <div className="divider"></div>
            </div>
        </div>
    )
}

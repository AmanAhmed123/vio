import React from 'react'
import Icon from "./Icon.js"
import { ReactComponent as Twitch } from "../Icons/twitch.svg"
import { ReactComponent as Facebook } from "../Icons/facebook-f.svg"
import { ReactComponent as Discord } from "../Icons/discord.svg"
import { ReactComponent as Instagram } from "../Icons/instagram.svg"
import { ReactComponent as Twitter } from "../Icons/twitter.svg"
import { ReactComponent as Youtube } from "../Icons/youtube.svg"
import { ReactComponent as Tiktok } from "../Icons/tiktok.svg"
import { ReactComponent as Paypal } from "../Icons/paypal.svg"
const Footer = () => {
    const btnsInfo = [{icon:<Twitch className="w-6 h-6 2xl:w-8 2xl:h-8 fill-secondColor" />,link:"https://www.twitch.tv/violetism"},
    {icon:<Facebook className="w-6 h-6 2xl:w-8 2xl:h-8 fill-secondColor" />,link:"https://www.facebook.com/VioletismGaming/"},
    {icon:<Discord className="w-6 h-6 2xl:w-8 2xl:h-8 fill-secondColor" />,link: "https://discord.gg/UF4tG6h"},
    {icon:<Instagram className="w-6 h-6 2xl:w-8 2xl:h-8 fill-secondColor" />,link: "https://instagram.com/vio.letism?igshid=pkcr54g3r0zs "},
    {icon:<Twitter className="w-6 h-6 2xl:w-8 2xl:h-8 fill-secondColor" />,link: "https://twitter.com/Violetism2"},
    {icon:<Youtube className="w-6 h-6 2xl:w-8 2xl:h-8 fill-secondColor" />,link: "https://www.youtube.com/c/violetism"},
    {icon:<Tiktok className="w-6 h-6 2xl:w-8 2xl:h-8 fill-secondColor" />,link: "https://vm.tiktok.com/ZScckep2/"},
    {icon:<Paypal className="w-6 h-6 2xl:w-8 2xl:h-8 fill-secondColor" />,link: "https://paypal.me/violetism"},
]


    return (
        <div className="bg-secondColor py-5">
            <div className="container flex justify-center gap-5 items-center">
                {btnsInfo.map((ele) => (
                    <Icon icon={ele.icon} link={ele.link} />
                ))}
            </div>
        </div>
    )
}

export default Footer

import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiTwitter } from "react-icons/si";
import { SiDiscord } from "react-icons/si";

const IconPannel = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <div className="flex flex-col gap-4">
        {/*github */}
        <a href="https://github.com" target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <VscGithubInverted />
          </span>
        </a>
        {/* linkedin*/}
        <a href="https://www.linkedin.com" target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaLinkedinIn />
          </span>
        </a>
        {/*twitter */}
        <a href="https://twitter.com" target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SiTwitter />
          </span>
        </a>
        {/* discord*/}
        <a href="https://discord.com" target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SiDiscord />
          </span>
        </a>
      </div>
      {/* white line*/}
      {/* <div className="w-[2px] h-32 bg-textDark">
      </div> */}
    </div>
  )
}

export default IconPannel
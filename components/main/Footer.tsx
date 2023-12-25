import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiTwitter } from "react-icons/si";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
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
  )
}

export default Footer
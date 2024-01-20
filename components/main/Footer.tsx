import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiTwitter } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { allLinks } from "../../datasource"

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
        {/*github */}
        <a href={allLinks.github} target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <VscGithubInverted />
          </span>
        </a>
        {/* linkedin*/}
        <a href={allLinks.linkedIn} target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaLinkedinIn />
          </span>
        </a>
        {/*twitter */}
        <a href={allLinks.twitter} target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SiTwitter />
          </span>
        </a>
        {/* discord*/}
        <a href={allLinks.discord} target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SiDiscord />
          </span>
        </a>
    </div>
  )
}

export default Footer
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiTwitter } from "react-icons/si";
import { allLinks } from "../../datasource"
import { FaFacebookSquare } from "react-icons/fa";
// import { SiDiscord } from "react-icons/si";
// import { MdEmail  } from "react-icons/md";

const IconPannel = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <div className="flex flex-col gap-4">
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
        {/* facebook*/}
        <a href={allLinks.discord} target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <FaFacebookSquare />
          </span>
        </a>
        {/* email*/}
        {/* <a href={`mailto:${allLinks.email}`} target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <MdEmail />
          </span>
        </a> */}
        {/* discord*/}
        {/* <a href={allLinks.discord} target="_blank">
          <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SiDiscord />
          </span>
        </a> */}
      </div>
      {/* white line*/}
      {/* <div className="w-[2px] h-32 bg-textDark">
      </div> */}
    </div>
  )
}

export default IconPannel
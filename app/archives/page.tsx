// import Archives from "@/components/main/Archives"
import Archives from "../../components/main/Archives"

const page = () => {
    return (
        <div className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar-track-textDark/20 scrollbar-thumb-textDark/60 scrollbar-thin scrollbar-thumb-rounded-full">
            <Archives />  
            
        </div>
    )
}

export default page

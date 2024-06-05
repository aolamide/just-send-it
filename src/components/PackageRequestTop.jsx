import ArrowLeft from "../assets/icons/arrow-left.svg"
import {Link} from "react-router-dom";

const PackageRequestTop = ({ title, link }) => {
   return (
       <div className="flex items-center py-2">
           <Link to={link}>
               <img src={ArrowLeft} alt="go back"/>
           </Link>
           <h1 className="text-[#515151] leading-6 ml-4">{title}</h1>
       </div>
   )

}

export default PackageRequestTop
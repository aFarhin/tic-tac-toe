import { FaRegCircle,FaTimes,FaPen } from "react-icons/fa";

const Icon = ({ic}) => {

    switch(ic){

        case "circle": 
            return <FaRegCircle className="icons1" />;
        case "cross":
            return <FaTimes className="icons2" />;
        default:
            return <FaPen className="icons3" />;

    }
}

export default Icon;
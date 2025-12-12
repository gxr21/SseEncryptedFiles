import './button.css';
import { Link } from 'react-router-dom';
const Button = ({ text, color , textColor , link}) => {
  return (
 <Link to={link}
      className="w-40 h-12 rounded-2xl m-4 flex justify-center items-center text-white font-bold text-[18px] cursor-pointer"
      style={{ backgroundColor: color }}
  >
  <button     
    >
      <p style={{color:textColor}}>{text}</p>     
    </button>
 </Link>
    
  );
};

export default Button;

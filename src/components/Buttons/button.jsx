import './button.css';

const Button = ({ text, color , textColor }) => {
  return (
    <button
      className="w-40 h-12 rounded-2xl m-4 flex justify-center items-center text-white font-bold text-[18px] cursor-pointer"
      style={{ backgroundColor: color }}
    >
      <p style={{color:textColor}}>{text}</p>
    </button>
  );
};

export default Button;

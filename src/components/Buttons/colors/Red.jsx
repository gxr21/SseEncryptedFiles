
function Btn({text,color,hover,onClick}) {
  return (
    
    <button onClick={onClick} className={`w-35 h-11 text-lg rounded-[10px] text-white ${color} ${hover}`}>{text}</button>
  );
};

export default Btn;

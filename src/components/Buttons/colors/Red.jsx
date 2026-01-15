
function Btn({text,color,hover}) {
  return (
    <button className={`w-35 h-11 text-lg rounded-[10px] text-white ${color} ${hover}`}>{text}</button>
  );
};

export default Btn;

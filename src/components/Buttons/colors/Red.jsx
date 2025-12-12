
import './Red.css'; // Optional: for custom CSS

const Red = ({ children, onClick, variant = 'primary', disabled = false }) => {
  return (
    <button className="red" >RED</button>
  );
};

export default Red;

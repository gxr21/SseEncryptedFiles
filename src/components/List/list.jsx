import './list.css';
function List(){

    return(
        <div className="list">
        <img src="src\components\List\user.png" alt="photo" className='img' />
        <p id='username'>المستخدم</p>
       <ul className="ul">
        <li className="li">
            <button className="bts"> أستعراض الملفات </button>
        </li>
        <li className="li">
            <button className="bt">أستعراض المجلدات</button>
        </li>
        <li className="li">
            <button className="bt">المشاركة </button> 
            </li>
        <li className="li">
            <button className="bt">استرجاع الملفات </button>
        </li>
        <li className="li">
            <button className="bt">رفع الملفات</button>
        </li>
       </ul>
       
       
        <button className='signout'>تسجيل الخروج</button>
       
        </div>
    );

}
export default List;
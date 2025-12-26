import './table.css';
function Table() {
    return(
      <>
        <div className='table-continer'>
<table class="table" dir='rtl' >
  <thead className='thead'>
    <tr>
      <th className='th'>ت</th>
      <th className='th'>اسم الملف</th>
      <th className='th'>تاريخ الرفع</th>
      <th className='th'>حالة الملف</th>
    </tr>
  </thead>
  <tbody className='tbody'>
    <tr>
      <td className='td'>1</td>
      <td className='td'>2</td>
      <td className='td'>3</td>
      <td className='td'>4</td>
    </tr>
    <tr>
      <td className='td'>1</td>
      <td className='td'>2</td>
      <td className='td'>3</td>
      <td className='td'>4</td>
    </tr>
        <tr>
      <td className='td'>1</td>
      <td className='td'>2</td>
      <td className='td'>3</td>
      <td className='td'>4</td>
    </tr>
        <tr>
      <td className='td'>1</td>
      <td className='td'>2</td>
      <td className='td'>3</td>
      <td className='td'>4</td>
    </tr>
        <tr>
      <td className='td'>1</td>
      <td className='td'>2</td>
      <td className='td'>3</td>
      <td className='td'>4</td>
    </tr>
  </tbody>
</table>

</div>
    <button className='button'>تفاصيل الملف</button>
    </>
    );
}
export default Table;
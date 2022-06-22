import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>Date</div>
      <div className='expense-item-description'>
        <h2>Title</h2>
        <div className='expense-item-price'>amount</div>
      </div>
    </div>
  );
}
export default ExpenseItem;

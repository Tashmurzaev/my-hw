import ExpenseDate from  './ExpenseDate'
import './Expenses.css'

function Expenses (props) {
    const expenseName = props.name
    const expensePrice = props.price
    const expenseDate = props.date

    return (
        <div className='expense-item'>
            <div>{expenseName}</div>
            <div className='date-css'>{expensePrice} Сом</div>
            <ExpenseDate date={expenseDate}/>
        </div>
    )
}

export default Expenses;
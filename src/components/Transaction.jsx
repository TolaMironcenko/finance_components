import React from 'react';
import '../css/Transaction.css'

const Transaction = ({sum, category, time, ...props}) => {
    return (
        <div className={sum > 0?'transaction-item income':'transaction-item consuption'} {...props}>
            <div className={'transaction-sum'}>{sum > 0?sum:-sum}</div>
            <div className={'transaction-category'}>{category}</div>
            <div className={'transaction-time'}>{time}</div>
        </div>
    );
};

export default Transaction;
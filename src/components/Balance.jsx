import React from 'react';
import '../css/Balance.css'

const Balance = ({balance, ...props}) => {
    return (
        <div className={'balance'} {...props}>
            <p className={'balance-item'}>{balance}</p>
        </div>
    );
};

export default Balance;
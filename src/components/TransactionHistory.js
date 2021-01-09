import React from 'react';
import PropTypes from 'prop-types';


export default function TransactionHistory({ items }) {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{items.type}</td>
      <td>{items.amount}</td>
      <td>{items.currency}</td>
    </tr>
  </tbody>
</table>

    )
};

TransactionHistory.propTypes = {
     items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.number.isRequired,
        })
    ).isRequired,
};
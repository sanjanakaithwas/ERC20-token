import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Web3 from 'web3';
import abi from './Abi';

const TransferTokens = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const transferTokens = async () => {
    setLoading(true);
    try {
      const web3 = new Web3('https://mainnet.infura.io/v3/your_infura_project_id');
      const contractAddress = '0x41138ed27C1A5b0022Ae1A73306F3899a4BF1932'; // ERC20 token contract address
      const contract = new web3.eth.Contract(abi, contractAddress);
      // Check if recipient address is valid
      if (!web3.utils.isAddress(recipient)) {
        setError('Invalid recipient address');
        return;
      }
      // Transfer tokens
      await contract.methods.transfer(recipient, amount).send({ from: 'user_address' });
      setError('');
      setRecipient('');
      setAmount('');
      alert('Tokens transferred successfully!');
    } catch (error) {
      console.error('Error transferring tokens:', error);
      setError('Transfer failed. Please try again.');
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    transferTokens();
  };

  return (
    <>
    <h2 className='center-text-container-transfer'>Transfer ERC20 Tokens</h2>
    <div className="transfer-tokens-container">
      {/* <h2>Transfer ERC20 Tokens</h2> */}
      <Form className="transfer-tokens-form" onSubmit={handleSubmit}>
        <Form.Group controlId="formRecipient" className="transfer-tokens-input">
          <Form.Label className='text-gap'> Recipient's Ethereum Address</Form.Label>
          <Form.Control
            className='new-line'
            type="text"
            placeholder="Enter Ethereum address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formAmount" className="transfer-tokens-input">
          <Form.Label className='text-gap'>Token Amount</Form.Label>
          <Form.Control
            className='new-line'
            type="number"
            placeholder="Enter token amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading} className="transfer-tokens-submit">
          {loading ? 'Transferring...' : 'Transfer'}
        </Button>
      </Form>
      {error && <Alert variant="danger" className="transfer-tokens-error">{error}</Alert>}
    </div>
    </>
  );
};

export default TransferTokens;

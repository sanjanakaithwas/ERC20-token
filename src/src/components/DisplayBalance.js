import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import Web3 from 'web3';
import abi from './Abi';
import '../App.css';

const DisplayBalance = () => {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');
  const [checkAddress, setCheckAddress] = useState(false);
  const [showContainer, setShowContainer] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchBalance = async () => {
    setLoading(true);
    try {
      const web3 = new Web3('https://mainnet.infura.io/v3/6756a35683e34b30a8d7148361d3807b');
      const contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'; // ERC20 token contract address
      const contract = new web3.eth.Contract(abi, contractAddress);
      const result = await contract.methods.balanceOf(address).call(); 
      const resultInEther = web3.utils.fromWei(result, "ether");
      setBalance(resultInEther);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBalance();
    setShowContainer(true);
    if(!address.startsWith("0x") || address.length !== 42){
      setCheckAddress(true);
    }
    else{
      setCheckAddress(false);
    }
    
  };

  console.log(checkAddress);
  return (
    <>
    <h2 className='center-text-container-display'>ERC20 Token Balance</h2>
    <Card className="display-balance-container">
      <Card.Body>
        <Form className="display-balance-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formAddress" className="display-balance-input">
            <Form.Label className='text-gap'>Ethereum Address</Form.Label>
            <Form.Control
              className='new-line'
              type="text"
              placeholder="Enter Ethereum address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading} className="display-balance-submit">
            {loading ? 'Loading...' : 'Submit'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
    {checkAddress ? <div className="additional-container" style={{marginTop: '10px'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <p>Please enter correct Ethereum Address!</p>
            </div>
          </div> : showContainer && (
          <div className="additional-container" style={{marginTop: '10px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p>Token Balance</p>
              <p style={{fontWeight: 600 }}>{balance}</p>
            </div>
          </div>
        )}

    </>
  );
};

export default DisplayBalance;

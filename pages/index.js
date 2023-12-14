import React from 'react';
import Router from 'next/router';

import useWeb3 from '../src/hooks/useWeb3';

function index() {
  const {
    connectMetaMask,
    setWalletAddress,
  } = useWeb3();
  const handleConnectWallet = async () => {
    try {
      await connectMetaMask();
      Router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{
        background: 'rgb(11, 0, 26)',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        overflow: 'hidden',
      }}
    >
      <header style={{ margin: '50px 100px' }}>
        <div className="d-flex justify-content-between align-items-center">
          <img
            src={'/images/BlockumDAOLogo.png'}
            style={{ width: '300px' }}
            alt=""
          />
          <div>
            <button
              style={{
                background: 'none',
                color: 'white',
                border: 'none',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '20px',
              }}
            >
              HOME
            </button>
            <button
              style={{
                background: 'none',
                color: 'white',
                border: 'none',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '20px',
              }}
            >
              ABOUT US
            </button>
            <button
              style={{
                background: 'none',
                color: 'white',
                border: 'none',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '20px',
              }}
            >
              FAQ
            </button>
            <button
              style={{
                background: 'none',
                padding: '0px 10px',
                color: '#2C4ACC',
                border: '#2C4ACC solid 3px',
                borderRadius: '50px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '20px',
                marginLeft: '10px',
              }}
              onClick={handleConnectWallet}
            >
              CONNECT WALLET
            </button>
          </div>
        </div>
      </header>
      <main style={{ display: 'flex', margin: '50px 100px' }}>
        <div style={{ width: '50%' }}>
          <h1 style={{ fontSize: '64px', color: 'white' }}>
            Community <br />
            <span style={{ color: '#2C4ACC' }}>for Fostering</span> <br />
            Global <i style={{ color: '#2C4ACC' }}>Innovation</i>
          </h1>
          <p style={{ fontSize: '20px', color: 'white', fontWeight: 'bold' }}>
            The largest community for Fostering Startups and <br /> promising
            business opportunities in the world!
          </p>
          <br />
          <button
            style={{
              background: 'linear-gradient(to right, #3156CE , #67D9E6)',
              padding: '10px 20px',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              margin: '20px',
              marginLeft: '10px',
            }}
          >
            Become a Member
          </button>
        </div>
        <div style={{ width: '50%' }}></div>
      </main>
    </div>
  );
}

export default index;

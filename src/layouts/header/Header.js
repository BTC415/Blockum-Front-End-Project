import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Dropdown, Modal, Spinner } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { getHeaderData } from '../../redux/action/utils';
import Notification from './Notification';

import useWeb3 from '../../hooks/useWeb3';
import { ADD_DEPOSIT } from '../../redux/action/type';

const Header = ({ title, getHeaderData, searchData }) => {
  const dispatch = useDispatch();

  const {
    _web3,
    connectMetaMask,
    setWalletAddress,
    walletAddress,
    isMember,
    BlockumVaultContract,
    LPTokenContract,
    FGOLTokenContract,
    FGOLDistributionContract,
    addressOfBlockumVault,
    addressOfFGOLDistribution,
    lpTokenEth,
    lpDepositedTokenEth,
  } = useWeb3();

  const initialValues = {
    depositValue: '',
    withdrawValue: '',
    distributeValue: '',
    description: '',
    presentationLink: '',
    proposalDetailsID: '',
    proposalDetailsIDForSetVotingParameters: '',
    proposalDetailsIDForRemove: '',
    totalMembersVotedForProposal: '',
    markProposalForReview: '',
    markProposalAsFunded: '',
    executeProposal: '',
    memberProgressForProposal: '',
    capitalProgressForProposal: '',
    days: '',
    hours: '',
    minutes: '',
  };
  const [values, setValues] = useState(initialValues);
  const [isConnected, setIsConnected] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [depositModalShow, setDepositModalShow] = useState(false);
  const [withdrawModalShow, setWithdrawModalShow] = useState(false);
  const [distributeModalShow, setDistributeModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      if (window.ethereum._state.isUnlocked) {
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    } else {
      window.alert('Please install MetaMask');
      window.open('https://metamask.io/download.html', '_self');
    }
    getHeaderData();
  }, []);

  useEffect(() => {
    if (isConnected) {
      connectMetaMask();
    }
  }, [isConnected]);

  function truncateText(walletAddress) {
    if (walletAddress.length > 10) {
      return (
        walletAddress.substring(0, 6) +
        '...' +
        walletAddress.substring(walletAddress.length - 4)
      );
    } else {
      return walletAddress;
    }
  }

  const handleConnectClick = async () => {
    if (!isConnected) {
      setIsLoading(true);
      await connectMetaMask();
      setIsLoading(false);
    }
  };

  const handleDepositClick = async () => {
    try {
      setIsLoading(true);
      const depositValueWei = _web3.utils.toWei(values.depositValue, 'ether');
      await LPTokenContract.methods
        .approve(addressOfBlockumVault, depositValueWei)
        .send({ from: walletAddress });
      toast.success('Deposit Approved', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      const tx = await BlockumVaultContract.methods
        .deposit(depositValueWei)
        .send({
          from: walletAddress,
        });
      // console.log(tx)
      toast.success('Deposit success!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      const response = await axios.post('/blockum-vault/deposit', {
        walletAddress: walletAddress,
        depositAmount: values.depositValue,
      });
      setValues({ depositValue: '' });
      setDepositModalShow(false);
      dispatch({
        type: ADD_DEPOSIT,
        payload: {
          LPTokenAmount: response.data.LPTokenAmount,
          createdAt: response.data.createdAt,
        },
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error('Deposit failed!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setIsLoading(false);
    }
  };

  const handleWithdrawClick = async () => {
    try {
      setIsLoading(true);
      const withdrawValueWei = _web3.utils.toWei(values.withdrawValue, 'ether');
      const tx = await BlockumVaultContract.methods
        .withdraw(withdrawValueWei)
        .send({
          from: walletAddress,
        });
      toast.success('Withdraw success!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      axios.post('/blockum-vault/withdraw', {
        walletAddress: walletAddress,
        withdrawAmount: values.withdrawValue,
      });
      setValues({ withdrawValue: '' });
      setWithdrawModalShow(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error('Withdraw failed!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleDistributeClick = async () => {
    try {
      setIsLoading(true);
      const distributeValueWei = _web3.utils.toWei(
        values.distributeValue,
        'ether'
      );
      await FGOLTokenContract.methods
        .approve(addressOfFGOLDistribution, distributeValueWei)
        .send({ from: walletAddress });
      toast.success('Distribute Approved!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      const tx = await FGOLDistributionContract.methods
        .allocateForDistribution(distributeValueWei)
        .send({
          from: walletAddress,
        });
      toast.success('Distribute success!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      axios.post('/fgol-distribution/distribution', {
        distributionAmount: values.distributeValue,
        walletAddress: walletAddress,
      });
      setValues({ distributeValue: '' });
      setDistributeModalShow(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error('Distribute failed!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            {title && (
              <div className="header-left flex flex-column pt-4">
                {/* <div className="dashboard_bar">{title}</div> */}
                <div className="dashboard_bar" style={{ fontSize: '25px' }}>
                  {/* Claudia Alves */}
                  {walletAddress ? truncateText(walletAddress) : 'Blockum DAO'}
                </div>
                <span
                  style={{
                    fontSize: '15px',
                    textAlign: 'start',
                    width: '100%',
                  }}
                >
                  {isMember ? 'Member' : 'Not Member'}
                </span>
              </div>
            )}

            <ul className="navbar-nav header-right">
              <Notification />
              {/* <Dropdown as="li" className="nav-item position-relative">
                <Dropdown.Toggle
                  variant=""
                  as="a"
                  className="i-false p-0 input-group search-area d-xl-inline-flex d-none"
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                  />
                  <div
                    className="input-group-append"
                    style={{ marginRight: '10px' }}
                  >
                    <button className="input-group-text">
                      <i className="flaticon-381-search-2" />
                    </button>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu alignRight={true} className="mt-3">
                  <PerfectScrollbar
                    id="DZ_W_Notification1"
                    className="widget-media dz-scroll p-2 "
                    style={{ maxHeight: 280 }}
                  >
                    <ul className="search-result-bar timeline">
                      {searchData &&
                      searchData.filter(
                        (page) =>
                          page.name.toLowerCase().includes(searchText) && page
                      ).length == 0
                        ? 'No search data found'
                        : searchData &&
                          searchData
                            .filter(
                              (page) =>
                                page.name.toLowerCase().includes(searchText) &&
                                page
                            )
                            .map((page, i) => (
                              <li className="pb-2" key={i}>
                                <Link href={page.pathName}>
                                  <a style={{ textTransform: 'capitalize' }}>
                                    {page.name}
                                  </a>
                                </Link>
                              </li>
                            ))}
                    </ul>
                  </PerfectScrollbar>
                </Dropdown.Menu>
              </Dropdown> */}
              <div className="nav-item">
                <Button
                  className="mr-2"
                  variant="info"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setDepositModalShow(true)}
                >
                  Deposit
                </Button>
                <Modal
                  className="fade bd-example-modal-lg"
                  show={depositModalShow}
                  size="lg"
                  style={{ backgroundColor: '#4E4FEB', height: '100vh' }}
                >
                  <div
                    style={{
                      backgroundColor: '#1C1C39',
                      color: 'white',
                      height: '100vh',
                      marginTop: '-3.3vh',
                      marginBottom: '-3.3vh',
                    }}
                  >
                    <Modal.Header style={{ border: 'none' }}>
                      <Modal.Title
                        style={{
                          color: 'white',
                          backgroundColor: '#1C1C39',
                          width: '100%',
                          alignItems: 'center',
                          display: 'flex',
                          justifyContent: 'center',
                          paddingTop: '150px',
                        }}
                      >
                        <img
                          src={'/images/BlockumDAOLogo.png'}
                          style={{ width: '300px' }}
                          alt=""
                        />
                      </Modal.Title>
                      <Button
                        onClick={() => setDepositModalShow(false)}
                        variant=""
                        className="close"
                        style={{ color: 'white', backgroundColor: '#1C1C39' }}
                      >
                        <span>&times;</span>
                      </Button>
                    </Modal.Header>
                    <Modal.Body>
                      <div
                        style={{
                          marginTop: '70px',
                          marginLeft: '70px',
                          marginRight: '70px',
                          color: 'white',
                        }}
                      >
                        <h1 style={{ color: 'white' }}>DEPOSIT LP TOKEN</h1>
                        <div className="d-flex justify-content-between">
                          <label>Amount</label>
                          <Button
                            variant="success btn-xs btn-rounded"
                            style={{
                              width: '70px',
                              marginBottom: '5px',
                            }}
                            onClick={() =>
                              setValues({ depositValue: lpTokenEth })
                            }
                          >
                            Max
                          </Button>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          onChange={handleInputChange}
                          name="depositValue"
                          value={values.depositValue}
                          defaultValue={0.0}
                        />
                        <label className="d-flex justify-content-end">
                          Asset: {lpTokenEth} LP
                        </label>
                      </div>
                    </Modal.Body>
                    <Modal.Footer
                      style={{
                        border: 'none',
                        marginLeft: '70px',
                        marginRight: '70px',
                        color: 'white',
                      }}
                    >
                      <Button
                        onClick={() => setDepositModalShow(false)}
                        variant="danger light"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleDepositClick}
                        disabled={isLoading}
                      >
                        <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                        />
                        {isLoading ? <Spinner animation="border" /> : 'Deposit'}
                      </Button>
                    </Modal.Footer>
                  </div>
                </Modal>
                <Button
                  className="mr-2"
                  variant="info"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setWithdrawModalShow(true)}
                >
                  Withdraw
                </Button>
                <Modal
                  className="fade bd-example-modal-lg"
                  show={withdrawModalShow}
                  size="lg"
                  style={{ backgroundColor: '#4E4FEB', height: '100vh' }}
                >
                  <div
                    style={{
                      backgroundColor: '#1C1C39',
                      color: 'white',
                      height: '100vh',
                      marginTop: '-3.3vh',
                      marginBottom: '-3.3vh',
                    }}
                  >
                    <Modal.Header style={{ border: 'none' }}>
                      <Modal.Title
                        style={{
                          color: 'white',
                          backgroundColor: '#1C1C39',
                          width: '100%',
                          alignItems: 'center',
                          display: 'flex',
                          justifyContent: 'center',
                          paddingTop: '150px',
                        }}
                      >
                        <img
                          src={'/images/BlockumDAOLogo.png'}
                          style={{ width: '300px' }}
                          alt=""
                        />
                      </Modal.Title>
                      <Button
                        onClick={() => setWithdrawModalShow(false)}
                        variant=""
                        className="close"
                        style={{ color: 'white', backgroundColor: '#1C1C39' }}
                      >
                        <span>&times;</span>
                      </Button>
                    </Modal.Header>
                    <Modal.Body>
                      <div
                        style={{
                          marginTop: '70px',
                          marginLeft: '70px',
                          marginRight: '70px',
                          color: 'white',
                        }}
                      >
                        <h1 style={{ color: 'white' }}>WITHDRAW LP TOKEN</h1>
                        <label>Amount</label>
                        <input
                          type="number"
                          className="form-control"
                          onChange={handleInputChange}
                          name="withdrawValue"
                        />
                        <label className="d-flex justify-content-end">
                          Asset: {lpDepositedTokenEth} LP
                        </label>
                      </div>
                    </Modal.Body>
                    <Modal.Footer
                      style={{
                        border: 'none',
                        marginLeft: '70px',
                        marginRight: '70px',
                        color: 'white',
                      }}
                    >
                      <Button
                        onClick={() => setWithdrawModalShow(false)}
                        variant="danger light"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleWithdrawClick}
                        disabled={isLoading}
                      >
                        <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                        />
                        {isLoading ? (
                          <Spinner animation="border" />
                        ) : (
                          'Withdraw'
                        )}
                      </Button>
                    </Modal.Footer>
                  </div>
                </Modal>
                <Button
                  className="mr-2"
                  variant="info"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setDistributeModalShow(true)}
                >
                  Distribute
                </Button>
                <Modal
                  className="fade bd-example-modal-lg"
                  show={distributeModalShow}
                  size="lg"
                  style={{ backgroundColor: '#4E4FEB', height: '100vh' }}
                >
                  <div
                    style={{
                      backgroundColor: '#1C1C39',
                      color: 'white',
                      height: '100vh',
                      marginTop: '-3.3vh',
                      marginBottom: '-3.3vh',
                    }}
                  >
                    <Modal.Header style={{ border: 'none' }}>
                      <Modal.Title
                        style={{
                          color: 'white',
                          backgroundColor: '#1C1C39',
                          width: '100%',
                          alignItems: 'center',
                          display: 'flex',
                          justifyContent: 'center',
                          paddingTop: '150px',
                        }}
                      >
                        <img
                          src={'/images/BlockumDAOLogo.png'}
                          style={{ width: '300px' }}
                          alt=""
                        />
                      </Modal.Title>
                      <Button
                        onClick={() => setDistributeModalShow(false)}
                        variant=""
                        className="close"
                        style={{ color: 'white', backgroundColor: '#1C1C39' }}
                      >
                        <span>&times;</span>
                      </Button>
                    </Modal.Header>
                    <Modal.Body>
                      <div
                        style={{
                          marginTop: '70px',
                          marginLeft: '70px',
                          marginRight: '70px',
                          color: 'white',
                        }}
                      >
                        <h1 style={{ color: 'white' }}>
                          DISTRIBUTE FGOL TOKEN
                        </h1>
                        <label>Amount</label>
                        <input
                          type="number"
                          className="form-control"
                          onChange={handleInputChange}
                          name="distributeValue"
                        />
                      </div>
                    </Modal.Body>
                    <Modal.Footer
                      style={{
                        border: 'none',
                        marginLeft: '70px',
                        marginRight: '70px',
                        color: 'white',
                      }}
                    >
                      <Button
                        onClick={() => setDistributeModalShow(false)}
                        variant="danger light"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleDistributeClick}
                        disabled={isLoading}
                      >
                        <ToastContainer
                          position="top-right"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                        />
                        {isLoading ? (
                          <Spinner animation="border" />
                        ) : (
                          'Distribute'
                        )}
                      </Button>
                    </Modal.Footer>
                  </div>
                </Modal>
                <Button
                  className="mr-2"
                  variant="info"
                  style={{ borderRadius: '10px' }}
                  onClick={handleConnectClick}
                >
                  {/* {walletAddress ? truncateText(walletAddress) : 'Connect'} */}
                  {walletAddress ? truncateText(walletAddress) : 'Connect'}
                </Button>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

const mapSateToProps = (state) => ({
  title: state.utils.pageTitle,
  searchData: state.utils.searchData,
});

export default connect(mapSateToProps, { getHeaderData })(Header);

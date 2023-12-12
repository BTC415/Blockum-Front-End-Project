import Link from 'next/link';
import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ProgressBar } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { getDashboardData } from '../src/redux/action/dashboard';
import { moodChange, pageTitle } from '../src/redux/action/utils';

import ProposalDetailsModal from '../src/components/Modals/ProposalDetailsModal';

import useWeb3 from '../src/hooks/useWeb3';

function truncateText(str) {
  if (str.length > 10) {
    return str.substring(0, 6) + '...' + str.substring(str.length - 4);
  } else {
    return str;
  }
}

const Index = ({ pageTitle, getDashboardData, orderRequest }) => {
  const {
    _web3,
    lpTokenEth,
    fgolTokenEth,
    walletAddress,
    proposals,
    FGOLDistributionContract,
    BlockumDAOContract,
    currentProposalCreationFee,
    FGOLTokenContract,
    addressOfFGOLDistribution,
  } = useWeb3();

  const initialValues = {
    title: '',
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

  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);
  const { deposits, distributes } = useSelector((state) => state.history);
  const [showProposalDetailsModal, setShowProposalDetailsModal] =
    useState(false);
  const [payPerProposalModalShow, setpayPerProposalModalShow] = useState(false);
  const [addNewProposalModalShow, setAddNewProposalModalShow] = useState(false);
  const [addProposalPeriodModalShow, setAddProposalPeriodModalShow] =
    useState(false);
  const [createdProposalId, setCreatedProposalId] = useState();
  const [selectedProposalData, setSelectedProposalData] = useState({
    title: '',
    description: '',
    presentationLink: '',
  });

  const timestampToDate = (createdAt) => {
    const timestamp = new Date(createdAt);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = timestamp.toLocaleDateString('en-GB', options);
    return formattedDate;
  };

  function timestampToDateForVotingProposal(timestamp) {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    moodChange();

    pageTitle('Dashboard');
    getDashboardData();
  }, []);

  useEffect(() => {
    async function init() {
      const tempDepositHistory = await axios.get(
        '/blockum-vault/deposit-history'
      );
      const tempDistributionHistory = await axios.get(
        '/fgol-distribution/history'
      );
      // console.log(tempDistributionHistory.data);
      await convertData(tempDistributionHistory.data);
      // setDepositHistory(tempDepositHistory.data.reverse());
      dispatch({
        type: 'INIT_HISTORY',
        payload: {
          deposits: tempDepositHistory.data.reverse(),
          distributes: tempDistributionHistory.data.reverse(),
        },
      });
      // setDistributionHistory(tempDistributionHistory.data.reverse());
    }

    init();
  }, []);

  const convertData = async (data) => {
    data.map(async (d) => {
      const temp = await axios.get(`/users/wallet-address/${d.user}`);
      d.walletAddress = truncateText(temp.data[0].walletAddress);
    });
    return data;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClaim = async () => {
    try {
      await FGOLDistributionContract.methods.claim().send({
        from: walletAddress,
      });
      toast.success('Claim success!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      console.log(err);
      toast.error('Claim failed!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handlePayPerProposalClick = async () => {
    try {
      const currentProposalCreationFeeWei = await _web3.utils.toWei(
        currentProposalCreationFee,
        'ether'
      );
      await FGOLTokenContract.methods
        .approve(addressOfFGOLDistribution, currentProposalCreationFeeWei)
        .send({ from: walletAddress });
      toast.success('Approved!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      const tx = await FGOLDistributionContract.methods
        .payProposalFee()
        .send({ from: walletAddress });
      toast.success('Proposal fee successfully paid!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setpayPerProposalModalShow(false);
      setAddNewProposalModalShow(true);
    } catch (err) {
      console.log(err);
      toast.error('Proposal fee payment failed!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleSendProposalClick = async () => {
    try {
      const tx = await BlockumDAOContract.methods
        .createProposal(
          values.title,
          values.description,
          values.presentationLink
        )
        .send({ from: walletAddress });
      toast.success('Proposal sent successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      const eventData = BlockumDAOContract.getPastEvents(
        'ProposalCreated',
        function (error, events) {
          setCreatedProposalId(events[0].returnValues.proposalId);
        }
      );
      setValues({ title: '', description: '', presentationLink: '' });
      setAddNewProposalModalShow(false);
      setAddProposalPeriodModalShow(true);
    } catch (err) {
      console.log(err);
      toast.error('Proposal submission failed!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleSetProposalPeriod = async () => {
    try {
      await BlockumDAOContract.methods
        .setVotingParametersForProposal(
          createdProposalId,
          values.days,
          values.hours,
          values.minutes
        )
        .send({
          from: walletAddress,
        });
      toast.success('Setting proposal period success!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setValues({ title: '', description: '', presentationLink: '' });
      setAddProposalPeriodModalShow(false);
    } catch (err) {
      console.log(err);
      toast.error('Setting proposal period failed!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleVoteYesClick = async (proposalId) => {
    try {
      console.log(proposalId);
      await BlockumDAOContract.methods.vote(proposalId, true).send({
        from: walletAddress,
      });
      toast.success('Vote success!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      console.log(err);
      toast.error('Vote failed!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleVoteNoClick = async (proposalId) => {
    try {
      console.log(proposalId);
      await BlockumDAOContract.methods.vote(proposalId, false).send({
        from: walletAddress,
      });
      toast.success('Vote success!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      console.log(err);
      toast.error('Vote failed!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="row">
      <div className="col-xl-4 col-xxl-5">
        <div className="row">
          <div className="col-xl-12 col-lg-6 col-md-6">
            <div
              className="card"
              style={{
                backgroundImage: `url('/images/card.jpg')`,
                backgroundSize: 'cover',
                borderRadius: '15px',
                color: 'white',
              }}
            >
              <div className="card-header border-0">
                <div className="mr-auto">
                  <h3 className="mb-2" style={{ color: 'white' }}>
                    BALANCE: LP{' '}
                    <span className="fs-30">
                      {lpTokenEth && Number(lpTokenEth).toFixed(2)}
                    </span>
                  </h3>
                </div>
              </div>
              <div
                className="card-body text-center"
                // style={{ paddingTop: '10px' }}
              >
                <div className="d-flex justify-content-between align-center items-center">
                  <p
                    className="fs-30 font-w400"
                    style={{ paddingTop: '0px', marginBottom: '0px' }}
                  >
                    TO CLAIM
                  </p>
                  <Button
                    className="mr-2"
                    variant="info"
                    style={{ borderRadius: '10px' }}
                    onClick={handleClaim}
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
                    CLAIM
                  </Button>
                </div>
                <p
                  className="fs-30 font-w600 text-left"
                  style={{ paddingTop: '10px' }}
                >
                  FGOL{' '}
                  <span className="fs-30 font-w400 text-left">
                    {fgolTokenEth && Number(fgolTokenEth).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-6 col-md-6">
            <div className="card trending-menus">
              <div className="card-header border-0 pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="text-black fs-20">Deposit History</h4>
                  {/* <button className="fs-14 text-blue border-0 bg-white">
                    See Details
                  </button> */}
                </div>
              </div>
              <div className="card-body pt-0">
                {deposits && (
                  <PerfectScrollbar
                    className="dz-scroll height100"
                    id="tredingMenus"
                  >
                    {deposits &&
                      deposits.map((depositHistory, i) => (
                        <div
                          key={i}
                          className={`mb-0 tr-row align-items-center ${
                            depositHistory && depositHistory.length - 1 !== i
                              ? 'border-bottom'
                              : ''
                          }`}
                        >
                          {depositHistory.LPTokenAmount != 0 && (
                            <div className="d-flex justify-content-between align-items-center">
                              <h2 className="text-black fs-14 font-w500 mb-0">
                                {timestampToDate(depositHistory.createdAt)}
                              </h2>
                              <span className="text-black font-w600 pr-3">
                                LP {depositHistory.LPTokenAmount}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                  </PerfectScrollbar>
                )}
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-6 col-md-6">
            <div className="card trending-menus">
              <div className="card-header border-0 pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="text-black fs-20">Distribution History</h4>
                </div>
              </div>
              <div className="card-body pt-0">
                {distributes && (
                  <PerfectScrollbar
                    className="dz-scroll height100"
                    id="tredingMenus"
                  >
                    {distributes &&
                      distributes.map((distributionHistory, i) => (
                        <div
                          key={i}
                          className={`mb-0 tr-row align-items-center ${
                            distributionHistory &&
                            distributionHistory.length - 1 !== i
                              ? 'border-bottom'
                              : ''
                          }`}
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <h2 className="text-black fs-14 font-w500 mb-0">
                              {timestampToDate(distributionHistory.createdAt)}
                            </h2>
                            <h2 className="text-black fs-14 font-w500 mb-0">
                              {distributionHistory.walletAddress}
                            </h2>
                            <span className="text-black font-w600 pr-3">
                              FGOL {distributionHistory.FGOLTokenAmount}
                            </span>
                          </div>
                        </div>
                      ))}
                  </PerfectScrollbar>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-8 col-xxl-7 px-5">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'end' }}>
                <Button
                  className="mr-2"
                  variant="info"
                  style={{ borderRadius: '10px' }}
                  onClick={() => setpayPerProposalModalShow(true)}
                >
                  + Add New Proposal
                </Button>
                <Modal
                  className="fade bd-example-modal-lg"
                  show={payPerProposalModalShow}
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
                          paddingTop: '100px',
                        }}
                      >
                        <img
                          src={'/images/BlockumDAOLogo.png'}
                          style={{ width: '300px' }}
                          alt=""
                        />
                      </Modal.Title>
                      <Button
                        onClick={() => setpayPerProposalModalShow(false)}
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
                          marginTop: '30px',
                          marginLeft: '70px',
                          marginRight: '70px',
                          color: 'white',
                        }}
                      >
                        <h1 style={{ color: 'white' }}>PAY PER PROPOSAL</h1>
                        <label>Amount</label>
                        <input
                          type="text"
                          className="form-control"
                          value={currentProposalCreationFee}
                          disabled
                          name="payPerProposal"
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
                        onClick={() => setpayPerProposalModalShow(false)}
                        variant="danger light"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handlePayPerProposalClick}
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
                        Pay
                      </Button>
                    </Modal.Footer>
                  </div>
                </Modal>
                <Modal
                  className="fade bd-example-modal-lg"
                  show={addNewProposalModalShow}
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
                          paddingTop: '100px',
                        }}
                      >
                        <img
                          src={'/images/BlockumDAOLogo.png'}
                          style={{ width: '300px' }}
                          alt=""
                        />
                      </Modal.Title>
                      <Button
                        onClick={() => setAddNewProposalModalShow(false)}
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
                          marginTop: '30px',
                          marginLeft: '70px',
                          marginRight: '70px',
                          color: 'white',
                        }}
                      >
                        <h1 style={{ color: 'white' }}>
                          ADD PROPOSAL FOR FOMENT
                        </h1>
                        <label>Title</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleInputChange}
                          name="title"
                        />
                        <label>Description</label>
                        <textarea
                          rows={8}
                          className="form-control"
                          name="description"
                          // placeholder="Comment"
                          onChange={handleInputChange}
                          defaultValue={''}
                        />
                        <label>Presentation link</label>
                        <input
                          type="url"
                          className="form-control"
                          onChange={handleInputChange}
                          name="presentationLink"
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
                        onClick={() => setAddNewProposalModalShow(false)}
                        variant="danger light"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleSendProposalClick}
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
                        Send
                      </Button>
                    </Modal.Footer>
                  </div>
                </Modal>
                <Modal
                  className="fade bd-example-modal-lg"
                  show={addProposalPeriodModalShow}
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
                          paddingTop: '100px',
                        }}
                      >
                        <img
                          src={'/images/BlockumDAOLogo.png'}
                          style={{ width: '300px' }}
                          alt=""
                        />
                      </Modal.Title>
                      <Button
                        onClick={() => setAddProposalPeriodModalShow(false)}
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
                          marginTop: '30px',
                          marginLeft: '70px',
                          marginRight: '70px',
                          color: 'white',
                        }}
                      >
                        <h1 style={{ color: 'white' }}>ADD PROPOSAL PERIOD</h1>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <label>Days</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={handleInputChange}
                              name="days"
                              style={{ width: '100px' }}
                            />
                          </div>
                          <div>
                            <label>Hours</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={handleInputChange}
                              name="hours"
                              style={{ width: '100px' }}
                            />
                          </div>
                          <div>
                            <label>Minutes</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={handleInputChange}
                              name="minutes"
                              style={{ width: '100px' }}
                            />
                          </div>
                        </div>
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
                        onClick={() => setAddProposalPeriodModalShow(false)}
                        variant="danger light"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleSetProposalPeriod}
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
                        Send
                      </Button>
                    </Modal.Footer>
                  </div>
                </Modal>
              </div>
              <div className="card-header border-0 flex-wrap pb-0 pt-0">
                <div className="mb-3">
                  <div className="mr-auto d-flex align-items-center justify-content-between">
                    <h4 className="text-black fs-24">Voting Proposals</h4>
                    {/* <button className="fs-14 text-blue border-0 bg-white">
                      See Details
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <ProposalDetailsModal
                    visible={showProposalDetailsModal}
                    setVisible={setShowProposalDetailsModal}
                    handleVoteNoClick={handleVoteNoClick}
                    handleVoteYesClick={handleVoteYesClick}
                    data={selectedProposalData}
                  />
                  <table className="table order-request">
                    <tbody
                      className="loadmore-content"
                      id="orderRequestContent"
                    >
                      {proposals && (
                        <PerfectScrollbar
                          className="dz-scroll"
                          style={{ overflow: 'scroll', height: '575px' }}
                        >
                          {proposals &&
                            proposals.map((d, i) => (
                              <tr key={i}>
                                <td>
                                  <div className="media align-items-center">
                                    <div className="media-body d-flex align-items-center justify-content-between">
                                      <div>
                                        <h5
                                          className="mt-0 mb-2"
                                          style={{
                                            fontSize: '18px',
                                            cursor: 'pointer',
                                          }}
                                          onClick={() => {
                                            setShowProposalDetailsModal(true);
                                            setSelectedProposalData(
                                              proposals[i]
                                            );
                                          }}
                                        >
                                          {d.title}
                                        </h5>
                                        <p
                                          className="mb-0 text-primary"
                                          style={{ fontSize: '14px' }}
                                        >
                                          {timestampToDateForVotingProposal(
                                            d.endTime
                                          )}
                                        </p>
                                      </div>
                                      <div>
                                        <label style={{ fontSize: '14px' }}>
                                          Members Quorum
                                        </label>
                                        <ProgressBar
                                          style={{ width: '100px' }}
                                          now={d.memberProgressForProposal}
                                          variant="info"
                                        />
                                        <label style={{ fontSize: '14px' }}>
                                          Capital Quorum
                                        </label>
                                        <ProgressBar
                                          style={{ width: '100px' }}
                                          now={d.capitalProgressForProposal}
                                          variant="info"
                                        />
                                      </div>
                                      <div className="align-items-center">
                                        <Button
                                          className="mr-2"
                                          variant="success btn-xs btn-rounded"
                                          style={{
                                            width: '70px',
                                            marginBottom: '5px',
                                          }}
                                          onClick={() =>
                                            handleVoteYesClick(d.proposalId)
                                          }
                                        >
                                          Yes
                                        </Button>
                                        <br />
                                        <Button
                                          className="mr-2"
                                          variant="danger btn-xs btn-rounded"
                                          style={{ width: '70px' }}
                                          onClick={() =>
                                            handleVoteNoClick(d.proposalId)
                                          }
                                        >
                                          No
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </PerfectScrollbar>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapSateToProps = (state) => ({
  dailyTargetChart: state.dashboard.dailyTargetChart,
  orderChart: state.dashboard.orderChart,
  customerChart: state.dashboard.customerChart,
  menuChart: state.dashboard.menuChart,
  customerMapChart: state.dashboard.customerMapChart,
  trendingMenu: state.dashboard.trendingMenu,
  orderRequest: state.dashboard.orderRequest,
});

export default connect(mapSateToProps, { pageTitle, getDashboardData })(Index);

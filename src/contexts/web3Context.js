'use client';

import React, { createContext, useEffect, useState } from 'react';
import Web3 from 'web3';
import BlockumVaultABI from '../web3/constants/BlockumVaultABI.json';
import FGOLDistributionABI from '../web3/constants/FGOLDistributionABI.json';
import BlockumDAOABI from '../web3/constants/BlockumDAOABI.json';
import LPTokenABI from '../web3/constants/LPTokenABI.json';
import FGOLTokenABI from '../web3/constants/FGOLTokenABI.json';
import axios from 'axios';

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [_web3, setWeb3] = useState();
  const [walletAddress, setWalletAddress] = useState();
  const [LPTokenContract, setLPTokenContract] = useState();
  const [FGOLTokenContract, setFGOLTokenContract] = useState();
  const [BlockumVaultContract, setBlockumVaultContract] = useState();
  const [FGOLDistributionContract, setFGOLDistributionContract] = useState();
  const [BlockumDAOContract, setBlockumDAOContract] = useState();
  const [lpTokenEth, setLPTokenEth] = useState();
  const [fgolTokenEth, setFGOLTokenEth] = useState();
  const [proposals, setProposals] = useState([]);
  const [isMember, setIsMember] = useState(false);
  const [currentProposalCreationFee, setCurrentProposalCreationFee] =
    useState();
  const [depositHistory, setDepositHistory] = useState([]);
  const [lpDepositedTokenEth, setLpDepositedTokenEth] = useState([]);

  async function connectMetaMask() {
    let totalNumberOfProposal = 0;
    let temp = 0;
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const walletAccount = await _web3.eth.getAccounts();
      await axios.post('/users/connect', { walletAddress: walletAccount[0] });

      const tempBlockumVaultContract = new _web3.eth.Contract(
        BlockumVaultABI,
        addressOfBlockumVault
      );
      const tempFGOLDistributionContract = new _web3.eth.Contract(
        FGOLDistributionABI,
        addressOfFGOLDistribution
      );
      const tempBlockumDAOContract = new _web3.eth.Contract(
        BlockumDAOABI,
        addressOfBlockumDAO
      );

      const tempLPTokenContract = new _web3.eth.Contract(
        LPTokenABI,
        addressOfLPToken
      );
      const tempFGOLTokenContract = new _web3.eth.Contract(
        FGOLTokenABI,
        addressOfFGOLToken
      );
      const isMember_ = await tempBlockumDAOContract.methods
        .isMember(walletAccount[0])
        .call();
      if (isMember_) {
        setIsMember(true);
      } else {
        setIsMember(false);
      }
      const tempLpTokenWei = await tempLPTokenContract.methods
        .balanceOf(walletAccount[0])
        .call();
      const lpTokenEth = _web3.utils.fromWei(tempLpTokenWei, 'ether');
      const tempFGOLTokenWei = await tempFGOLDistributionContract.methods
        .pendingClaims(walletAccount[0])
        .call();
      const fgolTokenEth = _web3.utils.fromWei(tempFGOLTokenWei, 'ether');
      const tempDepositedLpTokenWei = await tempBlockumVaultContract.methods
        .getMemberBalance(walletAccount[0])
        .call();
      const lpDepositedTokenEth = _web3.utils.fromWei(
        tempDepositedLpTokenWei,
        'ether'
      );

      totalNumberOfProposal = await tempBlockumDAOContract.methods
        .getTotalProposals()
        .call();

      const currentProposalCreationFeeWei =
        await tempFGOLDistributionContract.methods.proposalCreationFee().call();
      const currentProposalCreationFee = _web3.utils.fromWei(
        currentProposalCreationFeeWei,
        'ether'
      );

      while (true) {
        try {
          const tempDepositHistory = await tempBlockumVaultContract.methods
            .memberDeposits(walletAccount[0], temp)
            .call();
          if (tempDepositHistory.amount == 0) {
            temp += 1;
            continue;
          }
          depositHistory.push(tempDepositHistory);
          temp += 1;
        } catch (err) {
          console.log(err);
          break;
        }
      }

      for (let i = 0; i < totalNumberOfProposal; i++) {
        const tempProposal = await tempBlockumDAOContract.methods
          .proposalDetails(i)
          .call();
        const memberProgressForProposal = await tempBlockumDAOContract.methods
          .getMemberProgressForProposal(i)
          .call();
        const capitalProgressForProposal = await tempBlockumDAOContract.methods
          .getCapitalProgressForProposal(i)
          .call();
        if (
          tempProposal.proposer == '0x0000000000000000000000000000000000000000'
        ) {
          continue;
        }
        tempProposal.proposalId = i;
        tempProposal.memberProgressForProposal = memberProgressForProposal;
        tempProposal.capitalProgressForProposal = capitalProgressForProposal;
        proposals.push(tempProposal);
      }
      setDepositHistory(depositHistory.reverse());
      setProposals(proposals.reverse());
      setLPTokenContract(tempLPTokenContract);
      setFGOLTokenContract(tempFGOLTokenContract);
      setBlockumVaultContract(tempBlockumVaultContract);
      setFGOLDistributionContract(tempFGOLDistributionContract);
      setBlockumDAOContract(tempBlockumDAOContract);
      setLPTokenEth(lpTokenEth);
      setFGOLTokenEth(fgolTokenEth);
      setWalletAddress(walletAccount[0]);
      setCurrentProposalCreationFee(currentProposalCreationFee);
      setLpDepositedTokenEth(lpDepositedTokenEth);
    } catch (err) {
      console.log(err);
    }
  }

  const addressOfBlockumVault =
    '0x696dA2B5968f33F8C60e02F660e84B04709Da30b'.toLocaleLowerCase();
  const addressOfFGOLDistribution =
    '0x3978dfff811Dc43e250a293f32c51448DDC62584'.toLocaleLowerCase();
  const addressOfBlockumDAO =
    '0xA211B154C1538d4c42D12669b0a694f0ba305017'.toLocaleLowerCase();
  const addressOfLPToken =
    '0x6007485F7329166d699824765554F4ca5baF5b58'.toLocaleLowerCase();
  const addressOfFGOLToken =
    '0x7Ab4CD9d41b7577198ac6aaD84E5f3F5C7EF1bd9'.toLocaleLowerCase();

  useEffect(() => {
    const web3 = new Web3(window.ethereum);
    setWeb3(web3);
  }, []);
  return (
    <Web3Context.Provider
      value={{
        _web3,
        connectMetaMask,
        setWalletAddress,
        walletAddress,
        lpTokenEth,
        fgolTokenEth,
        BlockumVaultContract,
        depositHistory,
        proposals,
        isMember,
        FGOLDistributionContract,
        LPTokenContract,
        FGOLTokenContract,
        addressOfBlockumVault,
        addressOfFGOLDistribution,
        BlockumDAOContract,
        currentProposalCreationFee,
        lpDepositedTokenEth,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;

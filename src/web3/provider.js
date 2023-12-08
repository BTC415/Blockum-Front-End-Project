import Web3 from 'web3';
import BlockumVaultABI from './constants/BlockumVaultABI.json';
import FGOLDistributionABI from './constants/FGOLDistributionABI.json';
import BlockumDAOABI from './constants/BlockumDAOABI.json';
import LPTokenABI from './constants/LPTokenABI.json';
import FGOLTokenABI from './constants/FGOLTokenABI.json';

const _web3 = new Web3(window.ethereum);

const customWeb3 = () => {
  return new Web3(indow.ethereum);
};

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    'https://goerli.infura.io/v3/f8cb9f6a3a344ab98e87b6277730e063'
  )
);

export const addressOfBlockumVault =
  '0x696dA2B5968f33F8C60e02F660e84B04709Da30b'.toLocaleLowerCase();
export const addressOfFGOLDistribution =
  '0xdAd37C0FB1A095bc9D237BB4A55F5FD6eab2B54e'.toLocaleLowerCase();
export const addressOfBlockumDAO =
  '0xF713C86d5e5560D5F69A1B1d1DA3E4d45e9c5F3a'.toLocaleLowerCase();
export const addressOfLPToken =
  '0x6007485F7329166d699824765554F4ca5baF5b58'.toLocaleLowerCase();
export const addressOfFGOLToken =
  '0x7Ab4CD9d41b7577198ac6aaD84E5f3F5C7EF1bd9'.toLocaleLowerCase();

export const BlockumVaultContract = new _web3.eth.Contract(
  BlockumVaultABI,
  addressOfBlockumVault
);

export const FGOLDistributionContract = new _web3.eth.Contract(
  FGOLDistributionABI,
  addressOfFGOLDistribution
);

export const BlockumDAOContract = new _web3.eth.Contract(
  BlockumDAOABI,
  addressOfBlockumDAO
);

export const LPTokenContract = new _web3.eth.Contract(
  LPTokenABI,
  addressOfLPToken
);

export const FGOLTokenContract = new _web3.eth.Contract(
  FGOLTokenABI,
  addressOfFGOLToken
);

export default customWeb3;

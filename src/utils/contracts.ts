import { ethers } from 'ethers';
import { switchToSepoliaNetwork } from './web3Utils';

const REWARDS_CONTRACT_ADDRESS = '0xBceF717916DBED20393E8e3ca0b825967f01973F';
const SEPOLIA_CHAIN_ID = '0xaa36a7';

const REWARDS_ABI = [
  'function claimTokens() public returns (bool)',
  'function claimNFT() public returns (bool)',
  'function getRewardsBalance(address account) public view returns (uint256)',
];

export const getRewardsContract = async (provider: ethers.Provider) => {
  if (!ethers.isAddress(REWARDS_CONTRACT_ADDRESS)) {
    throw new Error('Invalid contract address');
  }

  const network = await provider.getNetwork();
  const currentChainId = '0x' + network.chainId.toString(16);
  
  if (currentChainId !== SEPOLIA_CHAIN_ID) {
    const switched = await switchToSepoliaNetwork();
    if (!switched) {
      throw new Error('Please switch to Sepolia network in MetaMask');
    }
    // Wait for provider to stabilize after network switch
    await new Promise(resolve => setTimeout(resolve, 1000));
    provider = new ethers.BrowserProvider(window.ethereum);
  }

  return new ethers.Contract(REWARDS_CONTRACT_ADDRESS, REWARDS_ABI, provider);
};
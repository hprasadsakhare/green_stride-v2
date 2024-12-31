import { SEPOLIA_CONFIG } from './networkConfig';

let networkSwitchInProgress = false;

export async function switchToSepoliaNetwork(): Promise<boolean> {
  if (networkSwitchInProgress) {
    return true;
  }

  try {
    networkSwitchInProgress = true;
    
    // Check if MetaMask is installed
    if (!window.ethereum) {
      throw new Error('MetaMask not installed');
    }

    // Check if already on Sepolia
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if (chainId === SEPOLIA_CONFIG.chainId) {
      return true;
    }

    // Request network switch
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: SEPOLIA_CONFIG.chainId }]
      });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [SEPOLIA_CONFIG]
        });
      } else {
        throw switchError;
      }
    }

    // Wait for network switch to complete
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Verify the switch was successful
    const newChainId = await window.ethereum.request({ method: 'eth_chainId' });
    return newChainId === SEPOLIA_CONFIG.chainId;
  } catch (error) {
    console.error('Error switching to Sepolia:', error);
    return false;
  } finally {
    networkSwitchInProgress = false;
  }
}
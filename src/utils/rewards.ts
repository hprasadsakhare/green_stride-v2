import { ethers } from 'ethers';
import { getRewardsContract } from './contracts';

export async function claimRewards(account: string): Promise<boolean> {
  try {
    if (!window.ethereum) {
      throw new Error('MetaMask not installed');
    }

    if (!ethers.isAddress(account)) {
      throw new Error('Invalid account address');
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    
    const signerAddress = await signer.getAddress();
    if (signerAddress.toLowerCase() !== account.toLowerCase()) {
      throw new Error('Signer address does not match account');
    }

    const contract = await getRewardsContract(provider);
    const contractWithSigner = contract.connect(signer);

    const tx = await contractWithSigner.claimTokens();
    await tx.wait();
    
    return true;
  } catch (error: any) {
    if (error.message.includes('user rejected')) {
      console.error('Transaction rejected by user');
    } else if (error.message.includes('network')) {
      console.error('Network error:', error.message);
    } else {
      console.error('Error claiming rewards:', error);
    }
    return false;
  }
}
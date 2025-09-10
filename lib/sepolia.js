import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_SEPOLIA_RPC);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

export function getContract(abi) {
  return new ethers.Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, abi, signer);
}

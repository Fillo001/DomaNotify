import { getContract } from '../../lib/sepolia';
import abi from '../../contract/SubscriptionLogger.json';

export default async function handler(req, res) {
  const { wallet, domain } = req.body;
  const contract = getContract(abi);
  const tx = await contract.subscribe(domain);
  await tx.wait();
  res.status(200).json({ txHash: tx.hash });
}

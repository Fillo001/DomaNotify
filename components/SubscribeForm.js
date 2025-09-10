import { useState } from 'react';

export default function SubscribeForm() {
  const [wallet, setWallet] = useState('');
  const [domain, setDomain] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wallet, domain })
    });
    const data = await res.json();
    alert(`Subscribed! Tx Hash: ${data.txHash}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your wallet address"
        value={wallet}
        onChange={e => setWallet(e.target.value)}
      />
      <input
        type="text"
        placeholder="Domain name (e.g. suleiman.doma)"
        value={domain}
        onChange={e => setDomain(e.target.value)}
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}

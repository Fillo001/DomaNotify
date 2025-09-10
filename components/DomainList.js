import { useEffect, useState } from 'react';

export default function DomainList() {
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/getDomains');
      const data = await res.json();
      setDomains(data);
    }
    load();
  }, []);

  return (
    <div>
      <h2>Available Domains</h2>
      <ul>
        {domains.map((d, i) => (
          <li key={i}>{d.name} — expires on {d.expires}</li>
        ))}
      </ul>
    </div>
  );
}

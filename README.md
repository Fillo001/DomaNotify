# DomaNotify

DomaNotify is a lightweight subscription dApp built for the **Doma Protocol Hackathon**, under **Track 3: Bots & Event Subscriptions**. It allows users to subscribe to domain expiration alerts and logs their subscription on-chain via the Sepolia testnet.


## 🚀 Live Demo

🔗 [Visit DomaNotify on Vercel](https://your-vercel-url.vercel.app)  
📹 [Watch Demo Video](https://your-demo-video-link.com)



## 🎯 Track Alignment: Bots & Event Subscriptions

This project addresses the challenge of creating automated alerts for domain events. DomaNotify enables users to:

- View tokenized domains (mocked or fetched from Doma testnet)
- Subscribe to expiration alerts by entering their wallet and domain
- Trigger an on-chain transaction on Sepolia for each subscription


## 🔗 Doma Integration

- Uses Doma testnet domain data (mocked for demo)
- Designed to integrate with Doma’s tokenized domain registry
- Aligns with DomainFi goals by connecting RWAs (domains) to DeFi logic


## 🧪 On-Chain Activity

Each subscription triggers a transaction on the Sepolia testnet using the `SubscriptionLogger` smart contract:

```solidity
event Subscribed(address indexed user, string domain);

function subscribe(string memory domain) external {
    emit Subscribed(msg.sender, domain);
}

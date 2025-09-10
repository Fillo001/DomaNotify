import SubscribeForm from '../components/SubscribeForm';
import DomainList from '../components/DomainList';

export default function Home() {
  return (
    <div>
      <h1>DomaNotify</h1>
      <SubscribeForm />
      <DomainList />
    </div>
  );
}

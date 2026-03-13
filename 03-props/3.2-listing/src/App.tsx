import { Listing } from './components/Listing'
import type { ListingItem } from './components/Listing';
import eatsy from './data/eatsy.json';

const items = eatsy as ListingItem[]

export function App() {
  return (
    <div className="container">
      <Listing items={items} />
    </div>
  );
}
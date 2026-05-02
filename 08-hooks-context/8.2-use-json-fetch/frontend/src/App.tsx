import { DataComponent } from './components/DataComponent'
import { ErrorComponent } from './components/ErrorComponent'
import { LoadingComponent } from './components/LoadingComponent'

export function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Custom Hook useJsonFetch</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <section style={{ border: '1px solid #ccc', padding: '10px' }}>
          <DataComponent />
        </section>

        <section style={{ border: '1px solid #ccc', padding: '10px' }}>
          <ErrorComponent />
        </section>

        <section style={{ border: '1px solid #ccc', padding: '10px' }}>
          <LoadingComponent />
        </section>
      </div>
    </div>
  );
}
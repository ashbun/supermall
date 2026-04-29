import { PageTransition } from '../../components/layout/PageTransition';

export default function HomePage() {
  return (
    <PageTransition>
      <div className="page page--home">
        <h1>Home</h1>
      </div>
    </PageTransition>
  );
}

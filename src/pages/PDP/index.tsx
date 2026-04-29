import { useParams } from 'react-router-dom';
import { PageTransition } from '../../components/layout/PageTransition';

export default function PDPPage() {
  const { productId } = useParams<{ productId: string }>();

  return (
    <PageTransition>
      <div className="page page--pdp">
        <h1>Product Detail — {productId}</h1>
      </div>
    </PageTransition>
  );
}

import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';

const HomePage     = lazy(() => import('./pages/Home'));
const PLPPage      = lazy(() => import('./pages/PLP'));
const PDPPage      = lazy(() => import('./pages/PDP'));
const CartPage     = lazy(() => import('./pages/Cart'));
const CheckoutPage = lazy(() => import('./pages/Checkout'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true,                element: <HomePage /> },
      { path: 'shop',               element: <PLPPage /> },
      { path: 'shop/:category',     element: <PLPPage /> },
      { path: 'product/:productId', element: <PDPPage /> },
      { path: 'cart',               element: <CartPage /> },
      { path: 'checkout',           element: <CheckoutPage /> },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

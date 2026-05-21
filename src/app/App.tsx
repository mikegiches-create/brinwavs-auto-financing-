import { RouterProvider } from 'react-router';
import { router } from './routes';
import { CarProvider } from './context/CarContext';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <CarProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </CarProvider>
  );
}
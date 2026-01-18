import { Routes, Route, Navigate } from 'react-router-dom';
import SalesNotification from '@/components/landing/SalesNotification';
import { Toaster } from '@/components/ui/toaster';
import LandingSections from '@/pages/LandingSections';
import DescontoPage from '@/pages/DescontoPage';

export default function App() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <main>
        <Routes>
          <Route path="/" element={<LandingSections />} />
          <Route path="/desconto" element={<DescontoPage />} />
          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <SalesNotification />
      <Toaster />
    </div>
  );
}


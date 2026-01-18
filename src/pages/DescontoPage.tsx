import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import LandingSections from '@/pages/LandingSections';
import OfferPageContent from '@/components/landing/ExitIntentPopup';

export default function DescontoPage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Open the discount popup as soon as the user lands on /desconto
    const t = window.setTimeout(() => setOpen(true), 50);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <LandingSections />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="border-0 bg-transparent p-0 shadow-none">
          <OfferPageContent
            onDecline={() => {
              // backredirect: if user came from somewhere, go back; otherwise go to home.
              if (window.history.length > 1) navigate(-1);
              else navigate('/');
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

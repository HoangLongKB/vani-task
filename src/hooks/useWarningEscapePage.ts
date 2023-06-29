import { TEMP_URL_HASH } from '@/config/quiz-data';
import { useEffect } from 'react';

export const useWarningEscapePage = (
  isWarning: boolean,
  openModal: () => void
) => {
  useEffect(() => {
    if (!isWarning) return;
    if (window.location.hash !== TEMP_URL_HASH) {
      window.history.pushState(null, '', TEMP_URL_HASH);
    }
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      return (e.returnValue = '');
    };
    const handleBackButton = (e: PopStateEvent) => {
      openModal();
    };
    window.addEventListener('beforeunload', handleWindowClose);
    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
      window.removeEventListener('popstate', handleBackButton);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWarning]);
};

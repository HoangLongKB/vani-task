import { useEffect } from 'react';

export const useWarningEscapePage = (
  isWarning: boolean,
  currentPath: string,
  openModal: () => void
) => {
  useEffect(() => {
    window.history.pushState(null, '', currentPath);
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      return (e.returnValue = '');
    };
    const handleBackButton = (e: PopStateEvent) => {
      if (isWarning) {
        openModal();
      } else {
        window.history.back();
      }
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

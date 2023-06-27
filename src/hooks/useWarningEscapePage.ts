import { useEffect } from 'react';

export const useWarningEscapePage = (
  isWarning: boolean,
  currentPath: string,
  openModal: () => void
) => {
  useEffect(() => {
    console.log('useWarningEscapePage');
    window.history.pushState(null, '', currentPath);
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      return (e.returnValue = '');
    };
    // const handleBackButton = (e: PopStateEvent) => {
    //   var result = confirm(warningText);
    //   if (result == true) {
    //     window.history.back();
    //   } else {
    //     window.history.pushState(null, '', currentPath);
    //   }
    // };
    const handleBackButton = (e: PopStateEvent) => {
      console.log('handleBackButton');
      if (isWarning) {
        openModal();
      } else {
        window.history.back();
      }
    };
    window.addEventListener('beforeunload', handleWindowClose);
    window.addEventListener('popstate', handleBackButton);
    return () => {
      console.log('removeEventListener');
      window.removeEventListener('beforeunload', handleWindowClose);
      window.removeEventListener('popstate', handleBackButton);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWarning]);
};

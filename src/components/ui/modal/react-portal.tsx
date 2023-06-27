import React, { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

const createWrapperAndAppendToBody = (wrapperId: string) => {
  if (!document) return null;
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

type Props = {
  children: React.ReactNode;
  wrapperId: string;
};

const ReactPortal = ({ children, wrapperId }: Props) => {
  const [wrapperElement, setWrapperElement] =
    React.useState<HTMLElement | null>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);
    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;

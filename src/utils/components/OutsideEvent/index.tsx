import './_index.scss';
import React, { useRef, useEffect, RefObject } from 'react';

type Props = {
  onEvent: Function;
  children: JSX.Element;
};

const useOutsideEvent = (ref: RefObject<HTMLDivElement>, onEvent: Function) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as HTMLInputElement)) onEvent();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

const OutsideEvent = (props: Props) => {
  const { children, onEvent } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideEvent(wrapperRef, onEvent);

  return (
    <div ref={wrapperRef} className='OutsideEvent-root'>
      {children}
    </div>
  );
};

export default OutsideEvent;

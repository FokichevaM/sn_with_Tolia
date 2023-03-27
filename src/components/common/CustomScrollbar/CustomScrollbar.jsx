import React from 'react';
import ScrollArea from 'react-scrollbar';
import classNames from 'classnames';

import './CustomScrollbar.scss';

const CustomScrollbar = ({ children, className, ...rest }) => {
  return (
    <ScrollArea className={classNames('custom-scrollbar', className)} {...rest}>
      {children}
    </ScrollArea>
  );
};

export default CustomScrollbar;

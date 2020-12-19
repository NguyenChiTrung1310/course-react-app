import React from 'react';

import { Slide, useScrollTrigger } from '@material-ui/core';

interface Props {
  window?: () => Window;
  children: React.ReactElement | any;
}

function HideOnScroll(props: Props): JSX.Element {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      <div>{children}</div>
    </Slide>
  );
}

export default HideOnScroll;

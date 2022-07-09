import React, { FC, useState } from 'react';
import { HoverDelay } from '../../src';

const BasicExample: FC = () => {
  const [isMouseHover, setIsMouseHover] = useState(false);

  return (
    <HoverDelay
      delay={500}
      onMouseHover={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
    >
      <h2 style={{ color: isMouseHover ? 'pink' : 'black' }}>
        Hover me i will turn pink after 500ms
      </h2>
    </HoverDelay>
  );
};

export default BasicExample;

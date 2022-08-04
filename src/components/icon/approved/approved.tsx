import React, { FC, SVGProps } from 'react';
import { COLORS } from '../../../constants/colors';

export const Approved: FC<SVGProps<SVGSVGElement>> = ({color = COLORS.GREEN}) => (
  <svg width={'36'} height={'36'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
    <path d="m6 14 8 8L30 6v8L14 30l-8-8v-8Z"></path>
  </svg>
);

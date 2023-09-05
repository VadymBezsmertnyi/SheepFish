import { LabelPosition } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

export type TabBarLabelProps = {
  focused: boolean;
  color: string;
  position: LabelPosition;
  children: string;
};

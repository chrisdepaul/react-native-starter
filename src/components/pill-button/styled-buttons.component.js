import { withProps } from 'utils';
import { s } from 'styles';
import { PillButton } from './pill-button.component';

export const WhitePillButton = withProps({
  activeStyles: [s.bg_white],
  disabledStyles: [s.bg_white_50],
})(PillButton);

export const WhiteKnockoutPillButton = withProps({
  activeStyles: [s.b__white, s.bw3],
  disabledStyles: [s.b__white_50, s.bw3],
})(PillButton);

export const PrimaryPillButton = withProps({
  activeStyles: [s.bg_primary],
  disabledStyles: [s.bg_primary_50],
})(PillButton);

export const PrimaryKnockoutPillButton = withProps({
  activeStyles: [s.b__primary, s.bw3],
  disabledStyles: [s.b__primary_50, s.bw3],
})(PillButton);

export const SecondaryPillButton = withProps({
  activeStyles: [s.bg_secondary],
  disabledStyles: [s.bg_secondary_50],
})(PillButton);

export const SecondaryKnockoutPillButton = withProps({
  activeStyles: [s.b__secondary, s.bw3],
  disabledStyles: [s.b__secondary_50, s.bw3],
})(PillButton);

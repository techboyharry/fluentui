import * as React from 'react';
import type { ToolbarRadioButtonProps } from './ToolbarRadioButton.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { renderToggleButton_unstable } from '@fluentui/react-button';
import { useToolbarRadioButton_unstable } from './useToolbarRadioButton';
import { useToolbarRadioButtonStyles_unstable } from './useToolbarRadioButtonStyles';
import { useCustomStyleHooks_unstable } from '@fluentui/react-shared-contexts';

/**
 * ToolbarRadioButton component
 */
export const ToolbarRadioButton: ForwardRefComponent<ToolbarRadioButtonProps> = React.forwardRef((props, ref) => {
  const state = useToolbarRadioButton_unstable(props, ref);

  useToolbarRadioButtonStyles_unstable(state);

  const { useToolbarRadioButtonStyles_unstable: useCustomStyles } = useCustomStyleHooks_unstable();
  useCustomStyles(state);

  return renderToggleButton_unstable(state);
}) as ForwardRefComponent<ToolbarRadioButtonProps>;

ToolbarRadioButton.displayName = 'ToolbarRadioButton';

import { makeStyles, mergeClasses } from '@griffel/react';
import type { BreadcrumbItemSlots, BreadcrumbItemState } from './BreadcrumbItem.types';
import type { SlotClassNames } from '@fluentui/react-utilities';

export const breadcrumbItemClassNames: SlotClassNames<BreadcrumbItemSlots> = {
  root: 'fui-BreadcrumbItem',
  divider: 'fui-BreadcrumbItem__divider',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  divider: {},
});

/**
 * Apply styling to the BreadcrumbItem slots based on the state
 */
export const useBreadcrumbItemStyles_unstable = (state: BreadcrumbItemState): BreadcrumbItemState => {
  const styles = useStyles();
  state.root.className = mergeClasses(breadcrumbItemClassNames.root, styles.root, state.root.className);

  if (state.divider) {
    state.divider.className = mergeClasses(breadcrumbItemClassNames.divider, styles.divider, state.divider.className);
  }
  return state;
};

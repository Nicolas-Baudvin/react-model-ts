import { INCREMENT, CounterActionsTypes } from './types';

/**
 * Export action creator
 */
export const counterAction = (): CounterActionsTypes => {
    return {
        type: INCREMENT,
    };
};
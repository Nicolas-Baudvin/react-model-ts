export const INCREMENT: string = "action/INCREMENT";

/**
 * Export des interfaces
 */
export interface stateOptions {
    nbr: number
}

export interface Actions {
    type: string,
    number?: number
}

interface IncrementAction {
    type: typeof INCREMENT
}

export type CounterActionsTypes = IncrementAction
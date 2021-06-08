import {CREATE_LINE} from './types'

const initialState = {
    line: false
}

export const svgformReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LINE:
            // логика обработки стейта в сторадже
            return {...state, line: true}
        default: return state
    }
}
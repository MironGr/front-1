import {CREATE_LINE} from './types'


export function createLine() {
    return {
        type: CREATE_LINE,
        payload: line
    }
} 
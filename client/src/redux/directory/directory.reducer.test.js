import { ItemCountContainer } from '../../components/cart-icon/styles'
import directoryReducer, { INITIAL_STATE }  from './directory.reducer'

describe('directoryReducer', () => {
    ItemCountContainer('should return initial state', () => {
        expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE)
    })
})
const filterReducer = (state, action) => {
    switch(action.type) {
        case 'BOARDING_ADD':
            return{
                ...state,
                 boarding_types: [...state.boarding_types, action.payload ]
            }

        case 'BOARDING_REMOVE':
        return{
            ...state,
            boarding_types: state.boarding_types.filter(btypes => btypes !== action.payload)
        }

        case 'BOARD_ADD':
            return{
                ...state,
                school_boards: [...state.school_boards, action.payload ]
            }

        case 'BOARD_REMOVE':
        return{
            ...state,
            school_boards: state.school_boards.filter(board => board !== action.payload)
        }

        case 'SCHOOLTYPES_ADD':
            return{
                ...state,
                school_level: [...state.school_level, action.payload ]
            }

        case 'SCHOOLTYPES_REMOVE':
        return{
            ...state,
            school_level: state.school_level.filter(sType => sType !== action.payload)
        }

        case 'FEE_VALUE':
            return {
                ...state,
                school_fees: action.payload
            }
        
        default:
            return state;  
             
        
    }
}

export default filterReducer;
import * as constants from './constants';


const rootReducer = (state = {}, action) => {
    return {
        constants,  //  Constants imported from constants folder
    }
};

export default rootReducer;

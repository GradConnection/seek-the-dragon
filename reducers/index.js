import React from 'react';
export const ContextApp = React.createContext();

export const initialState = {
  profile: {
    level: 0,
    name: null,
  },
};

export const profileReducer = (state, action) => {
  switch (action.type) {
    case 'updateLevel':
      return {
        ...state,
        ...action.payload,
      };
    case 'updateName':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

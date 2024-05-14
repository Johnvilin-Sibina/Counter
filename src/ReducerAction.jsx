export default function ReducerAction(state, action) {
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    case "SUB": {
        if(state>0)
      return state - action.payload;
    }
    case "RESET": {
        
      return state = action.payload;
    }

    default: {
      return state;
    }
  }
}

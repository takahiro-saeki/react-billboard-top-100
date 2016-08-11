function sample(state = 2, action) {
  switch (action.type) {
    case 'CREATE_TEST':
      return true
    case 'CREATE_SAM':
      return false
    default:
      return state;
  }
}

export default sample;

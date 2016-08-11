function sample(state = 1, action) {
  switch (action.type) {
    case 'CREATE_MAIL':
      return {pass: state.pass, mail: action.mail}
    case 'CREATE_PASS':
      return {pass: action.pass, mail: state.mail}
    default:
      return state;
  }
}

export default sample;

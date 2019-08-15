export default function(state, {type, payload}) {
  switch (type) {
    case 'SET_CURRENT_USER':
      // const roleMappings = {provider: 1, customer: 2};
      // return {...payload, ...{role: roleMappings[payload.role]}};
      return payload;
    default:
      throw new Error();
  }
};

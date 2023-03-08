import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: action.payload,
      };
    case 'email':
      return {
        ...state,
        email: action.payload,
      };
    case 'password':
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
}

export const RegisterForm = () => {
  const [state, setState] = useReducer(reducer, {
    name: '',
    email: '',
    password: '',
  });

  const hendleChengeInput = e => {
    setState({ type: e.target.name, payload: e.target.value });
  };

  const dispatch = useDispatch();

  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(register(state));
  };

  return (
    <form action="" onSubmit={hendleSubmit}>
      <label htmlFor="">
        name
        <input onChange={hendleChengeInput} name="name" type="text" />
      </label>
      <label htmlFor="">
        email
        <input onChange={hendleChengeInput} email="email" type="email" />
      </label>
      <label htmlFor="">
        password
        <input
          onChange={hendleChengeInput}
          password="password"
          type="password"
        />
      </label>
      <button type="submit">register</button>
    </form>
  );
};

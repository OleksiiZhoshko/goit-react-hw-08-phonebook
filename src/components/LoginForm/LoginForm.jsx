import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';

function reduser(state, action) {
  switch (action.type) {
    case 'name':
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

export const LoginForm = () => {
  const [state, setState] = useReducer(reduser, {
    email: '',
    password: '',
  });

  const hendleChengeInput = e => {
    setState({ type: e.target.name, payload: e.target.value });
  };

  const dispatch = useDispatch();

  const hendleSubmit = e => {
    e.preventDefolt();
    dispatch(logIn(state));
  };

  return (
    <form action="" onSubmit={hendleSubmit}>
      <label htmlFor="">
        email
        <input onChange={hendleChengeInput} name="name" type="email" />
      </label>
      <label htmlFor="">
        password
        <input
          onChange={hendleChengeInput}
          password="password"
          type="password"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

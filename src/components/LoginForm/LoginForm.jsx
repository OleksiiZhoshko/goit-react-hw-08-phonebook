import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';

// function reduser(state, action) {
//   switch (action.type) {
//     case 'name':
//       return {
//         ...state,
//         email: action.payload,
//       };
//     case 'password':
//       return {
//         ...state,
//         password: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// export const LoginForm = () => {
//   const [state, setState] = useReducer(reduser, {
//     email: '',
//     password: '',
//   });

//   const hendleChengeInput = e => {
//     setState({ type: e.target.name, payload: e.target.value });
//   };

//   const dispatch = useDispatch();

//   const hendleSubmit = e => {
//     e.preventDefault();
//     dispatch(logIn(state));
//   };

//   return (
//     <form action="" onSubmit={hendleSubmit}>
//       <label htmlFor="">
//         email
//         <input onChange={hendleChengeInput} name="name" type="email" />
//       </label>
//       <label htmlFor="">
//         password
//         <input
//           onChange={hendleChengeInput}
//           password="password"
//           type="password"
//         />
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   );
// };
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
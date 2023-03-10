import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'name':
//       return {
//         ...state,
//         name: action.payload,
//       };
//     case 'email':
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

// export const RegisterForm = () => {
//   const [state, setState] = useReducer(reducer, {
//     name: '',
//     email: '',
//     password: '',
//   });

//   const hendleChengeInput = e => {
//     setState({ type: e.target.name, payload: e.target.value });
//   };

//   const dispatch = useDispatch();

//   const hendleSubmit = e => {
//     e.preventDefault();
//     dispatch(register(state));
//   };

//   return (
//     <form action="" onSubmit={hendleSubmit}>
//       <label htmlFor="">
//         name
//         <input onChange={hendleChengeInput} name="name" type="text" />
//       </label>
//       <label htmlFor="">
//         email
//         <input onChange={hendleChengeInput} email="email" type="email" />
//       </label>
//       <label htmlFor="">
//         password
//         <input
//           onChange={hendleChengeInput}
//           password="password"
//           type="password"
//         />
//       </label>
//       <button type="submit">register</button>
//     </form>
//   );
// };
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label >
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

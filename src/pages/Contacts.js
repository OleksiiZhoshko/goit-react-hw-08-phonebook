import PhoneBook from '../components/contactsForm/contactsForm';
import Comtacts from '../components/./contactsList/contactsList';
import Filter from '../components/./сontactsFilter/contactsFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/operations';
import { Loader } from '../components/./loader/loader';
import { selectIsLoading } from 'Redux/selector';
import { selectError } from 'Redux/selector';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phone book</h1>

      <PhoneBook/>

      <h2>Contacts</h2>

      <Filter />
      {isLoading && !error && <Loader />}
      <Comtacts/>
    </>
  );
};

export default Contacts;

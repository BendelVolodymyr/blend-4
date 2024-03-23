import React, { useEffect, useState } from 'react';
import { getContacts } from '../../api/axiosApi';

const Contacts = () => {
  const [contact, setContact] = useState();

  useEffect(() => {
    getContacts().then(data => setContact(data));
  }, []);

  return <div>{JSON.stringify(contact)}</div>;
};

export default Contacts;

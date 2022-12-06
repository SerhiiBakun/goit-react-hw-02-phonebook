import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      return window.alert(`${name} is already in contacts`);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChange} />
        {filteredContacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        )}
      </Container>
    );
  }
}

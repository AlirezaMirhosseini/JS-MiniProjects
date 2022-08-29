import React, {useState, useContext} from 'react';
import {data} from './data';

const PersonContext = React.createContext();

function App() {
  const [people, setPeople] = useState(data);

  const RemovePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    })
  }

  return (
    <>
      <PersonContext.Provider value={{RemovePerson, people}}>
        <h1>prop drilling</h1>
        <List />
      </PersonContext.Provider>
    </>
  );
};

const List = () => {
  const mainData = useContext(PersonContext)
  return(
    <>
      {
        mainData.people.map((person) => {
          return <SinglePerson key={person.id} {...person} />
        })
      }
    </>
  )
}

const SinglePerson = ({id, name}) => {
  const {RemovePerson} = useContext(PersonContext)
  return (
    <div className="item">
      <li>{name}
        <button className='btn' onClick={() => RemovePerson(id)} >remove</button>
      </li>
    </div>
  )
}

export default App;

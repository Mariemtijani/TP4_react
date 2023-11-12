import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import { Routes,Route } from 'react-router-dom';
import ContactForm from './Components/ContactForm';
import ContactElements from './Components/ContactElements';
import { useState } from 'react';
import React from 'react';


function App() {

  //all information about contact 
  const [allInfo,setAllInfo] = useState([{'name':'Mariem','email':'Mariem@gmail.com','tel':'06060606'}]);

  // to take the value of name input
  const [name,setName] = useState('');

  // to take the value of email input
  const [email,setEmail] = useState('');

  // to take the value of phone input
  const [tel,setTel] = useState('');

  //take the value of search input 
  const [search,setSearch] = useState('');

  const [searchResults, setSearchResults] = useState([]);



  const modifyName = (e) => {
    setName(e.target.value)
  }

  const modifyEmail = (e) => {
    setEmail(e.target.value)
  }
  const modifyPhone = (e) => {
    setTel(e.target.value)
  }

  const modifySearch = (e) => {
    setSearch(e.target.value)
  }

  const addToContact = () => {
    //
    const newContacts = [...allInfo];
    newContacts.push({'name':name,'email':email,'tel':tel});
    setAllInfo(newContacts);

    setName('');
    setEmail('');
    setTel('');

  }

  
  const filter = () => {
    
     const filterArr = allInfo.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.tel.includes(search)
    );
    setSearchResults(filterArr);
    setSearch('');
  }
  
  return (
    <div className="App ">
      < Nav modifySearch={modifySearch}  searchValue={search} filter={filter}/>

      <Routes>
      
        <Route path='/' 
        element={allInfo.map((obj,ind)=>{
        return (
          <>
            <Contact key = {ind} name={obj.name} tel = {obj.tel} email = {obj.email} />
          </>
        )
      })}
      />
 
        <Route path='/add' element={<ContactForm  
        modifyName={modifyName} modifyEmail={modifyEmail} modifyPhone={modifyPhone} 
        addToContact={addToContact} nameValue = {name} emailValue = {email}  phoneValue = {tel}/>}/>
        <Route path='/search' element={
          searchResults.map((obj,ind) => {
            return (
              <>
            <Contact key = {ind} name={obj.name} tel = {obj.tel} email = {obj.email} />
            </>
            )
          })
        } />
      </Routes>

      

      
    </div>
  );
}

export default App;

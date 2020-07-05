import React, {useState, useEffect} from 'react';

function Hooks(props) {
  // karena functional component tidak punya 
  // oleh karena itu React membuat hooks

  // seperti ini di class copmonent
  // constructor() {
  //   super()
  //   this.state: {
  //     count: 1
  //   }
  // }

  console.log(props)

  const [count, setCount] = useState(1)
  const [profile, setProfile] = useState({firstName: '', lastName: ''})

  const incrementCount = () => {
    // this.setState({
    //   count: this.state.count + 1 
    setCount(count + 1)  
  }

  const [title, setTitle] = useState('Hooks')
  
  useEffect(() => {
    console.log('Updsdfate')
    document.title = title
  }, [title]) // use effect dijalankan hanya jika title berubah

  return(
    <>
    <h3>Hitung: {count}</h3>
    <button onClick={incrementCount}> + </button>
    <p>First name: {profile.firstName}</p>
    <p>Last name: {profile.lastName}</p>
    <input type="text" value={profile.firstName} onChange={(e) => setProfile({...profile, firstName: e.target.value})} placeholder="firstname"></input>
    <input type="text" value={profile.lastName} onChange={(e) => setProfile({...profile, lastName: e.target.value})} placeholder="firstname"></input>
    </>
    )
}

export default Hooks;
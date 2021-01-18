import React from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import styles from './App.module.css';

class App extends React.Component{
    
    render(){
        return(
            <div className={styles.App}>
                <h1 className={styles.Title}>Movies Search App</h1>
                <Searchbar/>
            </div>
            
        )
    }
}

export default App;
import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

function App() {

    const [ projects, setProjects] = useState(['Desenvolvimento', 'Front-end web']);

 

    function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`)
        setProjects([...projects,`Novo Projeto ${Date.now()}`])
        
        console.log(projects)

    }

    return (
        //fragment: <> </> cria um container para envolver dois ou mais componentes e nao mostrar na arvore de elementos
        <>
            <Header title="HomePage"/>
            <img width ={100} src={backgroundImage} />
           <ul>
    {           projects.map(project => <li key={project}>{project}</li>)}
           </ul>
           <button type="button" onClick={handleAddProject}>Add projects</button>
        </>
        
    );
}

export default App;
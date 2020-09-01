import React from 'react';

import Header from './components/Header';

function App() {
    return (
        //fragment: cria um container para envolver dois ou mais componentes e nao mostrar na arvore de elementos
        <>
            <Header/>
        </>
        
    );
}

export default App;
import React from 'react';
import Header from './header';
import TodoList from './todoList';
import Footer from './footer';
import Form from './form';

export const App = () => (
    <div>
        <Header/>
        <TodoList/>
        <Footer/>
        <Form/>
    </div>
);


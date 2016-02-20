import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';
import './styles/root.css';

render(<Root/>, document.getElementById('root'));

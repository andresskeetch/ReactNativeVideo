import React from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/suggestion-list';

const App: () => React$Node = () => {
  return (
    <Home>
      <Header />
      <SuggestionList />
    </Home>
  );
};

export default App;

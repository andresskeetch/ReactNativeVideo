import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import SuggestionListLayout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';

class SuggestionList extends Component {
  renderEmpty = () => {
    return <Empty text="No hay sugerencias :(" />;
  };
  renderSeparator = () => {
    return <Separator />;
  };
  render() {
    const list = [
      {
        title: 'Avengers',
        key: '1',
      },
      {
        title: 'DC',
        ket: '2',
      },
    ];
    return (
      <SuggestionListLayout title="Recomendado para Ti!">
        <FlatList
          data={list}
          ItemSeparatorComponent={this.renderSeparator}
          ListEmptyComponent={this.renderEmpty}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </SuggestionListLayout>
    );
  }
}

export default SuggestionList;

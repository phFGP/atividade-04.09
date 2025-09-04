import { Text, View } from 'react-native';

const itens = ["lápis", "caneta", "borracha"];

function ListaItens() {
  return (
    <View>
      {itens.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}

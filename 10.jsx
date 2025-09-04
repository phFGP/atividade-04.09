import { Text, View } from 'react-native';

export default function App() {
  const nomes = ['Carlos', 'Ana', 'Bia'];

  // Criando componentes <Text> para cada nome
  const componentes = nomes.map((nome, index) => (
    <Text key={index}>{nome}</Text>
  ));

  // Unindo em uma string separada por vírgula
  const nomesString = nomes.join(", ");

  return (
    <View style={{ padding: 20 }}>
      <Text>Lista de componentes:</Text>
      {componentes}

      <Text style={{ marginTop: 20 }}>
        Nomes unidos: {nomesString}
      </Text>
    </View>
  );
}

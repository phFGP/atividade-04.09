const usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "Pedro" }
  ];
  
  const nomes = usuarios.map(usuario => usuario.nome);
  console.log(nomes);
  // ["João", "Maria", "Pedro"]
  
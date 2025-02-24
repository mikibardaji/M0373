// Dades d'exemple
const users5 = [
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        geo: { lat: 40.7128, lng: -74.0060 },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ];
  
  // Crear fitxers amb diferents opcions de stringify
  
  // 1. Usant null i 2 (amb indentació de 2 espais)
  const json1 = JSON.stringify(users5, null, 2);
  await Bun.write('output1.json', json1);
  
  // 2. Sense indentació (tercer argument omès)
  const json2 = JSON.stringify(users5, null);
  await Bun.write('output2.json', json2);
  
  // 3. Usant un replacer (filtrar només el nom i el username)
  const json3 = JSON.stringify(users5, (key, value) => {
    if (key === 'email' || key === 'phone') {
      return undefined; // Exclou l'email i el telèfon
    }
    return value;
  }, 2);
  await Bun.write('output3.json', json3);
  
  // 4. Usant un array com a replacer (només incloure 'name' i 'username')
  const json4 = JSON.stringify(users5, ['name', 'username'], 2);
  await Bun.write('output4.json', json4);
  
  console.log('Fitxers generats.');
  
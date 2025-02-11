const sales = [500, 1500, 200, -100, 700, 300, 1200, 900, 0, 450];

// 1. Filtrar les vendes vàlides (majors que 0 i menors o iguals a 1000)
const validSales = sales.filter(sale => sale > 0 && sale <= 1000);

// 2. Aplicar un descompte del 10% a les vendes vàlides
const discountedSales = validSales.map(sale => sale * 0.9); // Aplicant un 10% de descompte

// 3. Sumar el total de les vendes després de descompte
const totalSales = discountedSales.reduce((accumulator, sale) => accumulator + sale, 0);

console.log('Total de vendes després de descompte:', totalSales);

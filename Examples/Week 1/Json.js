var text = '{"car":[{"name":"Alto", "company":"Suzuki"},{"name":"Avantador", "company":"Lamborghini"}]}';

var data = JSON.parse(text);

// To access all Data
console.log(data.car);

// To access single Array
console.log(data.car[0]);

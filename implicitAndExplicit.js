// to number
{
  const string = "54";

  const implicitNumber = +string;
  const explicitNumber = Number(string);

  console.log(typeof implicitNumber, implicitNumber);
  console.log(typeof explicitNumber, explicitNumber);
}
// to string

{
  const number = 45;

  const implicitString = number + ""; // '45'
  const explicitString = String(number); // '45'

  console.log(typeof implicitString, implicitString);
  console.log(typeof explicitString, explicitString);
}

// to boolean

{
  const number = 0;

  const implicitBoolean = !!number;
  const explicitBoolean = Boolean(number);

  console.log(typeof implicitBoolean, implicitBoolean);
  console.log(typeof explicitBoolean, explicitBoolean);
}

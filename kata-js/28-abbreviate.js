function abbrevName(name) {
  const words = name.split(" ");

  const firstInitial = words[0][0];
  const secondInitial = words[1][0];

  return (firstInitial + "." + secondInitial).toUpperCase();
}

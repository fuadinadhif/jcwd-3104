function linearSearch(searchTerm, data) {
  for (let i = 0; i < data.length; i++) {
    if (searchTerm === data[i]) {
      return "Found!";
    }
  }

  return "Not Found!";
}
const data = ["DKI", "DIY", "Banten"];
console.log(linearSearch("Jawa Barat", data));

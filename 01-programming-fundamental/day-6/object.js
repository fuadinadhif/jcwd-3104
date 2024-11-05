const company = new Object({
  name: "Astra",
  location: "Jakarta",
  address: {
    country: "Indonesia",
  },
  building: "Astra Tower",
});

console.log(company);

const resesion = false;

if (resesion === true) {
  company.status = "Collapse";
} else {
  company.status = "Safe";
}

console.log(company);

delete company.building;
// delete company.location;
// delete company.name;
delete company.status;

console.log(company);

console.log(company.location.country);
console.log(company.location.country?.province);
console.log(company.address.country);

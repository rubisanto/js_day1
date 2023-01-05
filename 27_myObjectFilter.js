function myObjectFilter(users) {
  return users
    .filter((user) => user.age >= 18)
    .map((user) => `${user.surname} ${user.name}`);
}

module.exports = myObjectFilter;

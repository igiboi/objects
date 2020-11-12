const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

const luigi = Object.create(personPrototypes);
luigi.firstName = 'Luigi';
luigi.lastName = 'Matias';
luigi.age = 26;

console.log(luigi.greeting());
function Person(name, age, canVote){
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

let person1 = new Person('ashton', 17, false);
console.log(person1);
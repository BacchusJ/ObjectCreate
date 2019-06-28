//define an object that will act as a prototype
//then create a new object based on that prototype

var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth)
    }
};

var narcissus = Object.create(personProto);
narcissus.name = 'Narcissus';
narcissus.yearOfBirth = 1989;
narcissus.job = 'Sulptor';



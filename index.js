const wizards = [
    {
        name: 'Harry Potter',
        house: 'Gryfindor'
    },
    {
        name: 'Cedric Diggory',
        house: 'Hufflepuff'
    },
    {
        name: 'Tonks',
        house: 'Hufflepuff'
    },
    {
        name: 'Ronald Weasley',
        house: 'Gryfindor'
    },
    {
        name: 'Hermione Granger',
        house: 'Gryfindor'
    }];

const hufflepuff = wizards.filter(function (wizard) {
    return wizard.house === 'Hufflepuff';
}).map(function (wizard) {
    return wizard.name;
});

console.log(hufflepuff)
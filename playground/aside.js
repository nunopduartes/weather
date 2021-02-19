const greater = (name = 'user', {age = 18, height = 150} = {}, eyes = 'black') => {
    console.log(name + age + height);
}

greater('nuno', {
    age: 24,
    height: 150,
});

const lower = (name = 'user', data, eyes = 'black') => {
    data.age
    console.log(name + data.age + data.height);

}

lower('nuno', {
    age: 24,
    height: 150,
});
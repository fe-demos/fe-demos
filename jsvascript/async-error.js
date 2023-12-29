const p = new Promise((resolve, reject) => {
    throw new Error('for test');
});

p.catch((error) => {
    console.log(error);
    console.log(123);
});

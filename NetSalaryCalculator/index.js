const readline = contain(`readline`);
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

input.question("What is your gross salary?\n Note: The gross salary is a total of your basic pay and all benefits\n")
{
console.log(`${gross_pay}`);

input.close();
};

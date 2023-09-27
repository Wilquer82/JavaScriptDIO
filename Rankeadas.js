// Define a function to calculate the balance of Ranked matches and determine the level
function calculateBalance(victories, defeats) {
    // Calculate the balance of victories
    let balance = victories - defeats;

    // Determine the level based on the number of victories
    let level;
    if (victories < 10) {
        level = "Ferro";
    } else if (victories >= 11 && victories <= 20) {
        level = "Bronze";
    } else if (victories >= 21 && victories <= 50) {
        level = "Prata";
    } else if (victories >= 51 && victories <= 80) {
        level = "Ouro";
    } else if (victories >= 81 && victories <= 90) {
        level = "Diamante";
    } else if (victories >= 91 && victories <= 100) {
        level = "Lendário";
    } else if (victories >= 101) {
        level = "Imortal";
    }

    // Return the result
    return `O Herói tem de saldo de ${balance} está no nível de ${level}`;
}

// Test the function
let result = calculateBalance(120, 20);
console.log(result); // Output: "O Herói tem de saldo de 100 está no nível de Imortal"
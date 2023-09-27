// Define the hero's name and experience points (XP)
let heroName = "Your Hero's Name";
let heroXP = 5000; // Change this value to test different XP levels

// Determine the hero's level based on XP
let heroLevel;
if (heroXP < 1000) {
    heroLevel = "Ferro";
} else if (heroXP >= 1001 && heroXP <= 2000) {
    heroLevel = "Bronze";
} else if (heroXP >= 2001 && heroXP <= 5000) {
    heroLevel = "Prata";
} else if (heroXP >= 6001 && heroXP <= 7000) {
    heroLevel = "Ouro";
} else if (heroXP >= 7001 && heroXP <= 8000) {
    heroLevel = "Platina";
} else if (heroXP >= 8001 && heroXP <= 9000) {
    heroLevel = "Ascendente";
} else if (heroXP >= 9001 && heroXP <= 10000) {
    heroLevel = "Imortal";
} else if (heroXP >= 10001) {
    heroLevel = "Radiante";
}

// Output the result
console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`);
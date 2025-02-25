function calculateDamage(calculatorId) {
    const calculator = document.getElementById(calculatorId);
    const skillDamage = parseFloat(calculator.querySelector("#skillDamage").value);
    const damageBonus = parseFloat(calculator.querySelector("#damageBonus").value) / 100;
    const raiderBonus = parseFloat(calculator.querySelector("#raiderBonus").value) / 100;
    const resistance = parseFloat(calculator.querySelector("#resistance").value);
    
    const trueDamage = skillDamage * (1 + damageBonus + raiderBonus) * (1 - resistance / 100);
    
    calculator.querySelector("#trueDamage").textContent = trueDamage.toFixed(2);
}

function calculateResistance(calculatorId) {
    const calculator = document.getElementById(calculatorId);
    const trueDamage = parseFloat(calculator.querySelector("#trueDamageInput").value);
    const skillDamage = parseFloat(calculator.querySelector("#trueDamageSkillDamage").value);
    const damageBonus = parseFloat(calculator.querySelector("#trueDamageDamageBonus").value) / 100;
    const raiderBonus = parseFloat(calculator.querySelector("#trueDamageRaiderBonus").value) / 100;
    
    const resistance = 100 * (1 - trueDamage / (skillDamage * (1 + damageBonus + raiderBonus)));
    
    calculator.querySelector("#calculatedResistance").textContent = resistance.toFixed(2);
}

function calculateDamageIncrease() {
    const monsterResistance = parseFloat(document.getElementById("monsterResistance").value);
    const resistanceReduction = parseFloat(document.getElementById("resistanceReduction").value);
    
    if (monsterResistance <= resistanceReduction) {
        document.getElementById("damageIncreaseResult").textContent = "無效的抗性減少!";
        return;
    }
    
    const damageIncrease = monsterResistance / (monsterResistance - resistanceReduction);
    document.getElementById("damageIncreaseResult").textContent = damageIncrease.toFixed(2);
}




function calculateDamage(calculatorId) {
    let calculator = document.getElementById(calculatorId);
    let skillDamage = parseFloat(calculator.querySelector("#skillDamage").value);
    let damageBonus = parseFloat(calculator.querySelector("#damageBonus").value) / 100 + 1;
    let raiderBonus = parseFloat(calculator.querySelector("#raiderBonus").value) / 100 + 1;
    let resistance = parseFloat(calculator.querySelector("#resistance").value);
    
    let trueDamage = skillDamage * damageBonus * raiderBonus * (100 / (100 + resistance));
    calculator.querySelector("#trueDamage").textContent = trueDamage.toFixed(2);
}

function calculateResistance(calculatorId) {
    let calculator = document.getElementById(calculatorId);
    let skillDamage = parseFloat(calculator.querySelector("#skillDamage").value);
    let damageBonus = parseFloat(calculator.querySelector("#damageBonus").value) / 100 + 1;
    let raiderBonus = parseFloat(calculator.querySelector("#raiderBonus").value) / 100 + 1;
    let trueDamage = parseFloat(calculator.querySelector("#trueDamageInput").value);
    
    if (trueDamage > 0) {
        let resistance = 100 * ((skillDamage * damageBonus * raiderBonus) / trueDamage) - 100;
        calculator.querySelector("#calculatedResistance").textContent = resistance.toFixed(2);
    } else {
        calculator.querySelector("#calculatedResistance").textContent = "錯誤: 真實傷害必須大於0";
    }
}

function calculateDamageIncrease() {
    let monsterResistance = parseFloat(document.getElementById('monsterResistance').value);
    let resistanceReduction = parseFloat(document.getElementById('resistanceReduction').value);

    if (isNaN(monsterResistance) || isNaN(resistanceReduction)) {
        alert("請輸入有效的數字！");
        return;
    }

    if (monsterResistance <= resistanceReduction) {
        alert("抗性減少不能大於或等於怪物抗性！");
        return;
    }

    let damageIncrease = monsterResistance / (monsterResistance - resistanceReduction);
    document.getElementById('damageIncreaseResult').textContent = damageIncrease.toFixed(2);
}





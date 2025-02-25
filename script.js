function calculateDamage(calculatorId) {
    let skillDamage = parseFloat(document.getElementById("skillDamage" + calculatorId).value);
    let damageBonus = parseFloat(document.getElementById("damageBonus" + calculatorId).value) / 100 + 1;
    let raiderBonus = parseFloat(document.getElementById("raiderBonus" + calculatorId).value) / 100 + 1;
    let resistance = parseFloat(document.getElementById("resistance" + calculatorId).value);
    
    let trueDamage = skillDamage * damageBonus * raiderBonus * (100 / (100 + resistance));
    document.getElementById("trueDamage" + calculatorId).textContent = trueDamage.toFixed(2);
}

function calculateResistance(calculatorId) {
    let skillDamage = parseFloat(document.getElementById("skillDamage" + calculatorId).value);
    let damageBonus = parseFloat(document.getElementById("damageBonus" + calculatorId).value) / 100 + 1;
    let raiderBonus = parseFloat(document.getElementById("raiderBonus" + calculatorId).value) / 100 + 1;
    let trueDamage = parseFloat(document.getElementById("trueDamageInput" + calculatorId).value);
    
    if (trueDamage > 0) {
        let resistance = 100 * ((skillDamage * damageBonus * raiderBonus) / trueDamage) - 100;
        document.getElementById("calculatedResistance" + calculatorId).textContent = resistance.toFixed(2);
    } else {
        document.getElementById("calculatedResistance" + calculatorId).textContent = "错误: 真实伤害必须大于0";
    }
}

function calculateDamageIncrease(calculatorId) {
    let monsterResistance = parseFloat(document.getElementById('monsterResistance' + calculatorId).value);
    let resistanceReduction = parseFloat(document.getElementById('resistanceReduction' + calculatorId).value);

    if (isNaN(monsterResistance) || isNaN(resistanceReduction)) {
        alert("請輸入有效的數字！");
        return;
    }

    if (monsterResistance <= resistanceReduction) {
        alert("抗性減少不能大於或等於怪物抗性！");
        return;
    }

    let damageIncrease = monsterResistance / (monsterResistance - resistanceReduction);
    document.getElementById('damageIncreaseResult' + calculatorId).textContent = damageIncrease.toFixed(2);
}


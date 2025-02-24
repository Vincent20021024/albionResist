function calculateDamage() {
    let skillDamage = parseFloat(document.getElementById("skillDamage").value);
    let damageBonus = parseFloat(document.getElementById("damageBonus").value) / 100 + 1;
    let raiderBonus = parseFloat(document.getElementById("raiderBonus").value) / 100 + 1;
    let resistance = parseFloat(document.getElementById("resistance").value);
    
    let trueDamage = skillDamage * damageBonus * raiderBonus * (100 / (100 + resistance));
    document.getElementById("trueDamage").textContent = trueDamage.toFixed(2);
}

function calculateResistance() {
    let skillDamage = parseFloat(document.getElementById("skillDamage").value);
    let damageBonus = parseFloat(document.getElementById("damageBonus").value) / 100 + 1;
    let raiderBonus = parseFloat(document.getElementById("raiderBonus").value) / 100 + 1;
    let trueDamage = parseFloat(document.getElementById("trueDamageInput").value);
    
    if (trueDamage > 0) {
        let resistance = 100 * ((skillDamage * damageBonus * raiderBonus) / trueDamage) - 100;
        document.getElementById("calculatedResistance").textContent = resistance.toFixed(2);
    } else {
        document.getElementById("calculatedResistance").textContent = "错误: 真实伤害必须大于0";
    }
}

function calculateDamageIncrease() {
    // 獲取用戶輸入的怪物抗性和抗性減少
    let monsterResistance = parseFloat(document.getElementById('monsterResistance').value);
    let resistanceReduction = parseFloat(document.getElementById('resistanceReduction').value);

    // 檢查用戶輸入是否有效
    if (isNaN(monsterResistance) || isNaN(resistanceReduction)) {
        alert("請輸入有效的數字！");
        return;
    }

    // 計算傷害增幅，根據公式：damage increase = monster resistance / (monster resistance - resistance reduction)
    if (monsterResistance <= resistanceReduction) {
        alert("抗性減少不能大於或等於怪物抗性！");
        return;
    }

    let damageIncrease = monsterResistance / (monsterResistance - resistanceReduction);

    // 顯示計算結果
    document.getElementById('damageIncreaseResult').textContent = damageIncrease.toFixed(2);
}

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

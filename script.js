function calculateDamage() {
    let skillDamage = parseFloat(document.getElementById("skillDamage").value);
    let damageBonus = parseFloat(document.getElementById("damageBonus").value);
    let raiderBonus = parseFloat(document.getElementById("raiderBonus").value);
    let resistance = parseFloat(document.getElementById("resistance").value);
    
    let trueDamage = skillDamage * damageBonus * raiderBonus * (100 / (100 + resistance));
    document.getElementById("trueDamage").textContent = trueDamage.toFixed(2);
}

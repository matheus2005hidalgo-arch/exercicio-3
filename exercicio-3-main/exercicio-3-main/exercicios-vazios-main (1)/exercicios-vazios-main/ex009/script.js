let hora = Number(prompt("Digite a hora (0 a 23)"));

let periodo = 
(hora >= 5 && hora <= 11) ? "Manhã":
(hora >= 12 && hora <= 17) ? "Tarde":
(hora >= 18 && hora <= 23) ? "Noite":
(hora >= 0 && hora <= 4) ? "Madrugada":
"Hora inválida";

alert(`Periodo do dia: ${periodo}`);
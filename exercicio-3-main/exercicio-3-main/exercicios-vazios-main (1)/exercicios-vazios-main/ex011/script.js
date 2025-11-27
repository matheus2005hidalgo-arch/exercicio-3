let valorCompra = Number(prompt("Digite o valor total da compra:"))

let codigoDesconto = prompt("digite o codigo de desconto:")

let valorFinal = codigoDesconto === "DESC10"
    ? valorCompra * 0.9
    :valorCompra;

    alert("Valor final : R$ " + valorFinal.toFixed(2));
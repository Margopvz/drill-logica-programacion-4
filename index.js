function fibonacci(n){
    let serie = [];
    for(let i = 0; i < n; i++){
        if (i === 0){
            serie.push(0);
        } else if (i === 1){
            serie.push(1)
        } else {
            serie.push(serie[i - 1] + serie[i - 2]);
        }
    }
    return serie;
}
function main() {
    const input = document.getElementById("number");
    const resultDiv = document.getElementById("result");
    const value = input.value;
    if (value === "" || isNaN(value) || parseInt(value) < 1){
        alert("Por favor, Introduce un número válido mayor que 0. ");
        return;
    }
    const num = parseInt(value);
    const resultado = fibonacci(num);
    resultDiv.innerHTML = `<p>Serie de Fibonacci: ${resultado.join(", ")}</p>`;
}
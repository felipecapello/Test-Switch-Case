metragem = prompt("Insira a quantidade de metros que deseja coverter");
alternativa = prompt("Escolha uma alternativa:\nmm \ncm \ndm \ndan \nhm \nkm ");
realMetragem = parseFloat(metragem);
let novaMedida;

switch (alternativa) {
  case "mm":
    novaMedida = realMetragem * 1000;
    alert("Transformando em milímetros fica " + novaMedida);
    break;
  case "cm":
    novaMedida = realMetragem * 100;
    alert("Transformando em centímetro fica " + novaMedida);
    break;
  case "dm":
    novaMedida = realMetragem * 10;
    alert("Transformando em decímetro fica " + novaMedida);
    break;
  case "dan":
    novaMedida = realMetragem / 10;
    alert("Transformando em decâmetro fica " + novaMedida);
    break;
  case "hm":
    novaMedida = realMetragem / 100;
    alert("Transformando em hectômetro fica " + novaMedida);
    break;
  case "km":
    novaMedida = realMetragem / 1000;
    alert("Transformando em quilômetro fica " + novaMedida);
    break;
  default:
    alert("OPÇÃO INVÁLIDA");
}

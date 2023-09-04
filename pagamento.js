const paymentForm = document.getElementById("payment-form");

paymentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const cardNumber = paymentForm["card-number"].value;
  const expiration = paymentForm.expiration.value;
  const cvv = paymentForm.cvv.value;

  // Simulação de validação e processamento de pagamento seguro
  if (validateCardData(cardNumber, expiration, cvv)) {
    // Processar pagamento de forma segura
    alert("Pagamento processado com segurança!");
  } else {
    alert("Dados do cartão inválidos. Tente novamente.");
  }
});

function validateCardData(cardNumber, expiration, cvv) {
  // A verificar...
  return (
    cardNumber.length === 16 &&
    expiration.match(/^\d{2}\/\d{2}$/) &&
    cvv.length === 3
  );
}

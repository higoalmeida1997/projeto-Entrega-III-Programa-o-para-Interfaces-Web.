function saveToLocalStorage(form) {
  const data = {
    nome: form.nome.value,
    email: form.email.value,
    cpf: form.cpf.value,
    telefone: form.telefone.value,
    cep: form.cep.value,
    nascimento: form.nascimento.value,
    endereco: form.endereco.value,
  };
  localStorage.setItem("cadastroVoluntario", JSON.stringify(data));
}
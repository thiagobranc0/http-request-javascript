import ui from "./ui.js";
import api from "./api.js";

const formularioPensamento = document.getElementById("pensamento-form");
const btnLimparForm = document.getElementById("botao-cancelar");

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();

  formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);
  btnLimparForm.addEventListener("click", manipularLimpezaFormulario);
});

async function manipularSubmissaoFormulario(event) {
  event.preventDefault();
  const id = document.getElementById("pensamento-id").value;
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    if (id) {
      await api.editarPensamento({ id, conteudo, autoria });
      ui.renderizarPensamentos();
      return;
    }

    await api.salvarPensamento({ conteudo, autoria });
    ui.renderizarPensamentos();
  } catch {
    alert("Erro ao salvar pensamento");
  }
}

function manipularLimpezaFormulario() {
  ui.limparFormulario();
}

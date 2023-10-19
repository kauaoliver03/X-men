const Personagens = document.querySelectorAll('.personagem');

Personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter',() => {  
      if (window.innerHeight<450){
        window.scrollTo({top: 0, behavior: 'smooth'});
      }

      removerSelecaoDoPersonagem();
      personagem.classList.add("selecionado");
  
      alterarImagemPersonagemSelecionado(personagem); 
      
      alterarNomeDoPersonagem(personagem);
      
      alterarDescricaoPersonagem(personagem);

      });
  });



function alterarNomeDoPersonagem(personagem) {
  const nomepersonagem = document.getElementById('nome-personagem');
  nomepersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagem(personagem) {
  const descricaopersonagem = document.getElementById('descricao-personagem');
  descricaopersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector('.personagem-grande');
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector('.selecionado');
  personagemSelecionado.classList.remove('selecionado');
}


# 🔢 Sorteador de Números

> **Status:** Projeto refatorado para aplicação de boas práticas em JavaScript moderno (ES6+). 🚀

## ℹ️ Sobre
Originalmente desenvolvido como parte dos cursos de lógica de programação da **Alura**, este projeto foi revisado e totalmente refatorado por mim para implementar conceitos mais robustos de manipulação do DOM e organização de código.

### Objetivo
Sortear uma lista de números únicos dentro de um intervalo definido pelo usuário, garantindo uma interface funcional e intuitiva.

---

## Upgrades e Refatoração (O que mudou?)

Nesta revisão, decidi aplicar alguns conceitos de **Análise e Desenvolvimento de Sistemas** para tornar o código mais profissional:

* **Manipulação do DOM:** Substituí o antigo `getElementById` pelo `querySelector`, tornando a seleção de elementos mais flexível e padronizada.

* **Adição de Event Listeners:** Removi os atributos `onclick` diretamente do HTML. Agora, o comportamento é gerenciado inteiramente no JavaScript via `addEventListener`, garantindo a separação de responsabilidades.

* **Estado dos Botões:** Em vez de usar `toggle` (que pode causar bugs visuais), implementei uma lógica baseada em `classList.replace` e na propriedade booleana `.disabled`, garantindo que a interface mostre o estado real da aplicação.

* **Escalabilidade e DRY (Don't Repeat Yourself):** No processo de reiniciar o sorteio, utilizei o método `querySelectorAll` junto com o `forEach` e *Arrow Functions* para limpar todos os inputs de forma automática e escalável.

* **Experiência do Usuário (UX):** Melhorei a exibição dos números sorteados utilizando o método `.join(', ')`, entregando um resultado mais legível.

---

## Tecnologias
<div>
  <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

---

## 👤 Autor

<div align="center">
   <a href="https://github.com/Kelven-Colombo">
    <img src="img/foto_perfil_redonda_small.png" alt="Kelven Colombo" width="150">
  </a>
  <br><br>
  <a href="https://github.com/Kelven-Colombo">
    <img src="https://img.shields.io/badge/Autor-Kelven%20Colombo-blue?style=for-the-badge&logo=github">
  </a>
</div>
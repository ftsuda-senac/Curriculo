/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Variaveis globais usadas no interval.
var interval;
var i = 0;
// http://flatuicolors.com/
var cores = ["#1dd2af", "#3498db", "#9b59b6", "#f1c40f", "#e67e22", "#e74c3c"];

// Permite a execucao inicial das funcionalidades javascript
$(function () { // Abreviação para $(document).ready(function() { ... });

  interval = setInterval(function () {
    $("#titulo").css("background-color", cores[i]);
    i++;
    if (i >= cores.length) {
      i = 0;
    }
  }, 500);

  // 1) Mostar alert com o nome do curriculo
  var nome = $("h1").text();
  alert("Vc está vendo o curriculo de " + nome);

  // 2) Adiciona tratamento para os eventos de mouseover (mouse sobre o elemento)
  // e mouse out (mouse fora do elemento). Quando isso ocorre, é adicionado ou
  // removido a classe info-selecionado, que altera as propriedades visuais do
  // elemento.

  /*
   // Associa função ao evento somente nos elementos já carregados,
   // Não associa aos elementos que serão criados.
   $(".info").on("mouseover", function (ev) {
   $(this).addClass("info-selecionado");
   }).on("mouseout", function (ev) {
   $(this).removeClass("info-selecionado");
   });
   */

  // Associa função ao evento nos elementos já carregados
  // E nos elementos que serão criados.
  $("article").on("mouseover", ".info", function (ev) {
    $(this).addClass("info-selecionado");
  }).on("mouseout", ".info", function (ev) {
    $(this).removeClass("info-selecionado");
  });

  // 3) Adicionar uma nova seção no curriculo ao clicar no botão com id "botao1".
  $("#botao1").click(function (ev) {
    $("#area1").html("<section class=\"info\">" +
            "<h2>Nova área adicionada pelo JS</h2>" +
            "<div>Então, aqui, hoje, eu tô saudando a mandioca, uma das maiores conquistas do Brasil.</div>" +
            "</section>");
  });

  // 4) Criacao formal de elementos HTML.
  $("#botao2").click(function (ev) {
    var elSection = $("<section></section>");
    elSection.attr("class", "info");
    var elH2 = $("<h2></h2>").text("Título criado via Javascript");
    var elP = $("<p></p>").text("Gente que nunca morreu antes está morrendo hoje.");
    elSection.append(elH2);
    elSection.append(elP);
    $("#area2").append(elSection);
  });

  // 5) AJAX
  $("#botao3").click(function (ev) {
    $.ajax({
      method: "GET",
      url: "AjaxServlet",
      dataType: "json"
    }).done(function (dataJSON) {
      var htmlDom = "<section class=\"info\"><h2>Dados do contato</h2><ul>" +
              "<li>ID: " + dataJSON.id + "</li>" +
              "<li>Nome: " + dataJSON.nome + "</li>" +
              "<li>E-mail: " + dataJSON.email + "</li>" +
              "<li>Telefones:<ul>";
      for (var i = 0; i < dataJSON.telefones.length; i++) {
        htmlDom = htmlDom + "<li>" + dataJSON.telefones[i].numero + "</li>";
      }
      htmlDom = htmlDom + "</ul></li></ul></section>";
      $("#area3").html(htmlDom);
    }).fail(function (data) {
      alert("Erro");
    });
  });

  /*
   // Versao reduzida.
   $.getJSON("AjaxServlet", function (dataJSON) {
   ///console.log(responseText);
   //var data = $.parseJSON(responseText);
   var htmlDom = "<section class=\"info\"><h2>Dados do contato</h2><ul>" +
   "<li>ID: " + dataJSON.id + "</li>" +
   "<li>Nome: " + dataJSON.nome + "</li>" +
   "<li>E-mail: " + dataJSON.email + "</li>" +
   "<li>Telefones:<ul>";
   for (var i = 0; i < dataJSON.telefones.length; i++) {
   htmlDom = htmlDom + "<li>" + dataJSON.telefones[i].numero + "</li>";
   }
   htmlDom = htmlDom + "</ul></li></ul></section>";
   $("#area3").html(htmlDom);
   });
   */

});
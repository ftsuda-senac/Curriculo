/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.senac.tads.dsw.curriculo;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;

/**
 *
 * @author Fernando
 */
@WebServlet(name = "AjaxServlet", urlPatterns = {"/AjaxServlet"})
public class AjaxServlet extends HttpServlet {

  /**
   * Handles the HTTP <code>GET</code> method.
   *
   * @param request servlet request
   * @param response servlet response
   * @throws ServletException if a servlet-specific error occurs
   * @throws IOException if an I/O error occurs
   */
  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
          throws ServletException, IOException {
    Telefone tel1 = new Telefone(1, "(11) 99999-9999");
    Telefone tel2 = new Telefone(2, "(11) 88888-8888");
    Contato contato = new Contato(1, "Fulano da Silva", "fulano@zmail.com", Arrays.asList(tel1, tel2));
    JSONObject json = new JSONObject(contato);
    response.setContentType("application/json;charset=UTF-8");
    try (PrintWriter out = response.getWriter()) {
      out.printf(json.toString());
    }
  }

}

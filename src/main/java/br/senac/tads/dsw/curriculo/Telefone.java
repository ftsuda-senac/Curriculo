/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.senac.tads.dsw.curriculo;

import java.io.Serializable;

/**
 *
 * @author Fernando
 */
public class Telefone implements Serializable {

  private int id;
  private String numero;

  public Telefone() {
  }

  public Telefone(int id, String numero) {
    this.id = id;
    this.numero = numero;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getNumero() {
    return numero;
  }

  public void setNumero(String numero) {
    this.numero = numero;
  }
}

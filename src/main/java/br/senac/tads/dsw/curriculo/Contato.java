/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.senac.tads.dsw.curriculo;

import java.io.Serializable;
import java.util.List;

/**
 *
 * @author Fernando
 */
public class Contato implements Serializable {

  private int id;
  private String nome;
  private String email;
  private List<Telefone> telefones;

  public Contato() {
  }

  public Contato(int id, String nome, String email, List<Telefone> telefones) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefones = telefones;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public List<Telefone> getTelefones() {
    return telefones;
  }

  public void setTelefones(List<Telefone> telefones) {
    this.telefones = telefones;
  }

}

import React from "react";
import "./styles/navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <img
          src="data:image/jpeg;base64,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"
          alt="Ticket"
        />
        <a class="navbar-brand" href="/">
          Tickets
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/criar">
                Criar conta
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            {/*
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/criar">Criar conta</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>*/}
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar eventos
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

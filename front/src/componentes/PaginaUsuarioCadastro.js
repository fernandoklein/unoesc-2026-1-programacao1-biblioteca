function PaginaUsuarioCadastro() {
  return (
      <div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-lg-6">
      <div className="card shadow border-0">
        <div className="card-header bg-primary text-white py-3">
          <h5 className="mb-0">Dados do Novo Usuário</h5>
        </div>
        <div className="card-body p-4">
          <form action="usuarios-lista.html">
            <div className="mb-3">
              <label className="form-label fw-bold">Nome</label>
              <input
                type="text"
                className="form-control"
                required=""
                placeholder="Nome completo"
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Matrícula</label>
                <input
                  type="text"
                  className="form-control"
                  required=""
                  placeholder="Apenas números"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Perfil</label>
                <select className="form-select">
                  <option value={0}>Leitor</option>
                  <option value={1}>Bibliotecário</option>
                  <option value={2}>Administrador</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="form-label fw-bold">E-mail</label>
              <input
                type="email"
                className="form-control"
                required=""
                placeholder="exemplo@gmail.com"
              />
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <a href="usuarios-lista.html" className="btn btn-link text-muted">
                Voltar para a lista
              </a>
              <button type="submit" className="btn btn-primary px-5">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
export default PaginaUsuarioCadastro;
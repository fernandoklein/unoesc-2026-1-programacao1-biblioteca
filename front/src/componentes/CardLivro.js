function CardLivro() {
    return(
        <div className="col">
      <div className="card h-100 shadow-sm border-0">
        <img
          src="https://covers.openlibrary.org/b/isbn/9781491950357-L.jpg"
          className="card-img-top p-3"
          alt="Arquitetura Limpa"
        />
        <div className="card-body">
          <span className="badge bg-primary mb-2">Programação</span>
          <h5 className="card-title h6 text-truncate">Arquitetura Limpa</h5>
          <p className="card-text small text-muted">
            Robert C. Martin
            <br />
            <small>Alta Books (2019)</small>
          </p>
        </div>
        <div className="card-footer bg-white border-0 pb-3">
          <button className="btn btn-outline-primary btn-sm w-100">
            Disponibilidade
          </button>
        </div>
      </div>
    </div>
    );
}
export default CardLivro;
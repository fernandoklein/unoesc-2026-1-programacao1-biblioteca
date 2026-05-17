import CardLivro from "./CardLivro.js";
function PaginaCatalogo() {
    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>
                    <i className="bi bi-collection me-2" />
                    Nosso Acervo
                </h2>
                <div className="input-group w-50">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Pesquisar por título, autor ou categoria..."
                    />
                    <button className="btn btn-primary">
                        <i className="bi bi-search" />
                    </button>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
                <CardLivro />
                <CardLivro />
                <CardLivro />
                
            </div>
        </div>

    );
}

export default PaginaCatalogo;
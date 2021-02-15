export default function componenteProduto(props) {
  return (
    <div>
      <header className="container-fluid">
        <h2>Produtos</h2>
      </header> <hr />


      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-md-3 mx-auto">
          {props.BD && props.BD.map((item, id,) =>
            <div className="boxproduto col" id={item['categoria']}>
              <div className="bg-secondary  py-4 bg-produto">
                <img className="imgproduto" src={require('./../' + item['nome_imagem']).default} alt="" /> <br /> <hr />
                <p className="nomeproduto text-light">{item['descricao']}</p>
                <p className="preco">R${item['preco_antigo']}</p>
                <p className="novopreco">R${item['preco']}</p>

                <form onSubmit={props.enviarCompra}>
                  <input type="submit" className="btnComprar btn btn-primary" value="Comprar" onClick={props.Script.comprou} />
                  <input type="hidden" name="cliente" value="cliente_default" />
                  <input type="hidden" name="nome_produto" value={item['descricao']} />
                  <input type="hidden" name="valor_unitario" value={item['preco']} />
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div >
  )
}
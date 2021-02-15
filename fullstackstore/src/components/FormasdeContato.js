export default function FormasContato(props) {
  return (
    <div>

      <div className="social">
        <div>
          <a href="https://instagram.com" target="_blank"><img className="lgsocial" src={require('./../imagens/logos/instagram.png').default} /></a>
          <a href="https://facebook.com" target="_blank" ><img className="lgsocial" src={require('./../imagens/logos/facebook.png').default} /></a>
          <a href="https://whatsapp.com" target="_blank"><img className="lgsocial" src={require('./../imagens/logos/whats.png').default} /></a>
        </div>
      </div>

      <div id="form">
        <form className="form-group" onSubmit={props.enviarFormulario}>
          <h1>Como podemos te ajudar ?</h1>
          <hr />

          <label for="pnome">Nome:</label><br />
          <input className="form-control" type="text" id="nome" name="nome" />
          <br />
          <br />
          <label className="areaMsg">E-mail:</label><br />
          <input className="form-control" type="email" name="email"></input>

          <br /><br />
          <label className="areaMsg">Mensagem:</label><br />
          <textarea className="form-control" name="msg" id="msg" rows="5"></textarea>
          <br /><br />

          <input className="d-inline" type="checkbox" name="checkbox" id="checkbox" />
          <label className="form-check-label d-inline" for="checkbox">Concordo com termos de segurança.</label>
          <br /><br />

          <input className="form-control btn btn-primary" onClick={props.passelivre} type="submit" id="submit" style={{ width: "200px" }} />
          <br /><br />
        </form>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h3>Comentarios dos clientes</h3>
              <div className="list-group">
                {props.mensagens.map(mensagem => (
                  <div className="list-group-item">
                    <h5>{mensagem.nome}</h5>
                    <p>{mensagem.msg} </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
using System;
using Microsoft.AspNetCore.Mvc;
using NomeCompletoDevWeb.Models;

namespace NomeCompletoDevWeb.Controllers
{
    [ApiController]
        [Route("[controller]")]
    public class Nome : ControllerBase
    {
        [HttpPost]
        public ActionResult<Nomes> Post(NomeCliente nomeRecebido)
        {
            var nomeProcessado = new Nomes(){
                NomeCompleto = $"{nomeRecebido.nome} {nomeRecebido.sobrenome}",
                NomeCatalogo = $"{nomeRecebido.sobrenome.ToUpper()}, {nomeRecebido.nome}",

            };

            return Ok(nomeProcessado);
        }
    }
}
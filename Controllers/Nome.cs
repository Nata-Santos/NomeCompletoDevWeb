using System;
using Microsoft.AspNetCore.Mvc;
using NomeCompletoDevWeb.Models;

namespace aula_25_11.Controllers
{
    [ApiController]
        [Route("[controller]")]
    public class EscolaController : ControllerBase
    {
        [HttpPost]
        public ActionResult<Nomes> Post(NomeCliente nomeRecebido)
        {
            var nomeProcessado = new Nomes{
                NomeCompleto = $"{nomeRecebido.nome}{nomeRecebido.sobrenome}",
                NomeCatalogo = $"{nomeRecebido.sobrenome.ToUpper()}{nomeRecebido.nome}",

            };

            return Ok(nomeProcessado);
        }
    }
}
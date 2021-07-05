
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/EstadosEmpresa"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EstadosEmpresaRow))]
    public class EstadosEmpresaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/EstadosEmpresa/EstadosEmpresaIndex.cshtml");
        }
    }
}
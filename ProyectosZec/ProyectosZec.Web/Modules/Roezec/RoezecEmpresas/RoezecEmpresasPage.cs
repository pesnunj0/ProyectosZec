
namespace ProyectosZec.Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Roezec/RoezecEmpresas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RoezecEmpresasRow))]
    public class RoezecEmpresasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Roezec/RoezecEmpresas/RoezecEmpresasIndex.cshtml");
        }
    }
}
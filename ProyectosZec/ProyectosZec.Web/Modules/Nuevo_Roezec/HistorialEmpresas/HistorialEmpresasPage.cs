
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/HistorialEmpresas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.HistorialEmpresasRow))]
    public class HistorialEmpresasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/HistorialEmpresas/HistorialEmpresasIndex.cshtml");
        }
    }
}
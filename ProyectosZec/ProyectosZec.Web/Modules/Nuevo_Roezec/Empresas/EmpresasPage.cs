
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/Empresas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmpresasRow))]
    public class EmpresasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/Empresas/EmpresasIndex.cshtml");
        }
    }
}

namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/EmpresasContactos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmpresasContactosRow))]
    public class EmpresasContactosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/EmpresasContactos/EmpresasContactosIndex.cshtml");
        }
    }
}
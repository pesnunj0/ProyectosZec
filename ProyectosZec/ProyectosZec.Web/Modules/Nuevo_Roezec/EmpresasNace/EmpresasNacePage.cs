
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/EmpresasNace"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmpresasNaceRow))]
    public class EmpresasNaceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/EmpresasNace/EmpresasNaceIndex.cshtml");
        }
    }
}
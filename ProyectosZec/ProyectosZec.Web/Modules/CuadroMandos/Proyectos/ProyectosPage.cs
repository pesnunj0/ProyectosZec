
namespace ProyectosZec.CuadroMandos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CuadroMandos/Proyectos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProyectosRow))]
    public class ProyectosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CuadroMandos/Proyectos/ProyectosIndex.cshtml");
        }
    }
}
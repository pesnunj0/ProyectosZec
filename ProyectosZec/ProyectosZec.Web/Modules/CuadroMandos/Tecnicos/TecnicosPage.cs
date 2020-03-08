
namespace ProyectosZec.CuadroMandos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CuadroMandos/Tecnicos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TecnicosRow))]
    public class TecnicosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CuadroMandos/Tecnicos/TecnicosIndex.cshtml");
        }
    }
}
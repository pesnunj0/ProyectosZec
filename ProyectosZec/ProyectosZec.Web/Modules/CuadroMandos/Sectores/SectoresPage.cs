
namespace ProyectosZec.CuadroMandos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CuadroMandos/Sectores"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SectoresRow))]
    public class SectoresController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CuadroMandos/Sectores/SectoresIndex.cshtml");
        }
    }
}
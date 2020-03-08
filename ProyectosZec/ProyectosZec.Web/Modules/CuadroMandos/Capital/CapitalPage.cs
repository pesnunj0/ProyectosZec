
namespace ProyectosZec.CuadroMandos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CuadroMandos/Capital"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CapitalRow))]
    public class CapitalController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CuadroMandos/Capital/CapitalIndex.cshtml");
        }
    }
}
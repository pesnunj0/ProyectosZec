
namespace ProyectosZec.CuadroMandos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CuadroMandos/Presentadas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProyectosRow))]
    public class PresentadasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CuadroMandos/Presentadas/PresentadasIndex.cshtml");
        }
    }
}
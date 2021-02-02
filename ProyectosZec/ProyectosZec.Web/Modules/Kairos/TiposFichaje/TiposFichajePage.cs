
namespace ProyectosZec.Kairos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Kairos/TiposFichaje"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TiposFichajeRow))]
    public class TiposFichajeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Kairos/TiposFichaje/TiposFichajeIndex.cshtml");
        }
    }
}
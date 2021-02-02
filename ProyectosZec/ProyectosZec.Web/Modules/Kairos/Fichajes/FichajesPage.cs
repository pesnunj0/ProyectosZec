
namespace ProyectosZec.Kairos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Kairos/Fichajes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FichajesRow))]
    public class FichajesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Kairos/Fichajes/FichajesIndex.cshtml");
        }
    }
}
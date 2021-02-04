
namespace ProyectosZec.Kairos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Kairos/Diario"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DiarioRow))]
    public class DiarioController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Kairos/Diario/DiarioIndex.cshtml");
        }
    }
}
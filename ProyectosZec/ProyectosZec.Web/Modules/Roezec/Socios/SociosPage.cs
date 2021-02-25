
namespace ProyectosZec.Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Roezec/Socios"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SociosRow))]
    public class SociosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Roezec/Socios/SociosIndex.cshtml");
        }
    }
}
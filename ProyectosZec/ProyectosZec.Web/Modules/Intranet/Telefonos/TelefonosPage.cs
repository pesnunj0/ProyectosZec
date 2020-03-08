
namespace ProyectosZec.Intranet.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Intranet/Telefonos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TelefonosRow))]
    public class TelefonosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Intranet/Telefonos/TelefonosIndex.cshtml");
        }
    }
}
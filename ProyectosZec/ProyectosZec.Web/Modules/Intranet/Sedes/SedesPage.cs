
namespace ProyectosZec.Intranet.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Intranet/Sedes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SedesRow))]
    public class SedesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Intranet/Sedes/SedesIndex.cshtml");
        }
    }
}
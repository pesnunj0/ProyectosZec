
namespace ProyectosZec.Kairos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Kairos/Extras"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExtrasRow))]
    public class ExtrasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Kairos/Extras/ExtrasIndex.cshtml");
        }
    }
}
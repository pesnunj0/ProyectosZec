
namespace ProyectosZec.Kairos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Kairos/EstadosExtras"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EstadosExtrasRow))]
    public class EstadosExtrasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Kairos/EstadosExtras/EstadosExtrasIndex.cshtml");
        }
    }
}
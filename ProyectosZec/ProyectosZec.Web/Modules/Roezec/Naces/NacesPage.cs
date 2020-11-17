
namespace ProyectosZec.Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Roezec/Naces"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NacesRow))]
    public class NacesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Roezec/Naces/NacesIndex.cshtml");
        }
    }
}
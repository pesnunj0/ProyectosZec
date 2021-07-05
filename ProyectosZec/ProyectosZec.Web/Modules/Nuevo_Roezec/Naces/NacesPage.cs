
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/Naces"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NacesRow))]
    public class NacesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/Naces/NacesIndex.cshtml");
        }
    }
}

namespace ProyectosZec.Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Roezec/Representantes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RepresentantesRow))]
    public class RepresentantesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Roezec/Representantes/RepresentantesIndex.cshtml");
        }
    }
}
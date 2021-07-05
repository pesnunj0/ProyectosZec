
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/TiposGarantiaTasas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TiposGarantiaTasasRow))]
    public class TiposGarantiaTasasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/TiposGarantiaTasas/TiposGarantiaTasasIndex.cshtml");
        }
    }
}
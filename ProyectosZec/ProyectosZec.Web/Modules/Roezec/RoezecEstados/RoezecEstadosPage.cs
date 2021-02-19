
namespace ProyectosZec.Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Roezec/RoezecEstados"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RoezecEstadosRow))]
    public class RoezecEstadosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Roezec/RoezecEstados/RoezecEstadosIndex.cshtml");
        }
    }
}
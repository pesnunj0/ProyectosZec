
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/Continentes"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ContinentesRow))]
    public class ContinentesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/Continentes/ContinentesIndex.cshtml");
        }
    }
}

namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/Sectores"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SectoresRow))]
    public class SectoresController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/Sectores/SectoresIndex.cshtml");
        }
    }
}
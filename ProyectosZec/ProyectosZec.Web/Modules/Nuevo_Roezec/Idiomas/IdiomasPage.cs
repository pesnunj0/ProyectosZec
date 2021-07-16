
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/Idiomas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.IdiomasRow))]
    public class IdiomasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/Idiomas/IdiomasIndex.cshtml");
        }
    }
}
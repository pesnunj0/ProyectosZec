
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/Paises"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PaisesRow))]
    public class PaisesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/Paises/PaisesIndex.cshtml");
        }
    }
}
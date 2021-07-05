
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/Tecnicos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TecnicosRow))]
    public class TecnicosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/Tecnicos/TecnicosIndex.cshtml");
        }
    }
}
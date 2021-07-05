
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/TiposContacto"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TiposContactoRow))]
    public class TiposContactoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/TiposContacto/TiposContactoIndex.cshtml");
        }
    }
}
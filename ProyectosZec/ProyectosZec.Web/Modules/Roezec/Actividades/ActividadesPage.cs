
namespace ProyectosZec.Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Roezec/Actividades"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ActividadesRow))]
    public class ActividadesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Roezec/Actividades/ActividadesIndex.cshtml");
        }
    }
}
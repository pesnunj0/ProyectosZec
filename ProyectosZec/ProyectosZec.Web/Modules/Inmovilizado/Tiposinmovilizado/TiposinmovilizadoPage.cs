
namespace ProyectosZec.Inmovilizado.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inmovilizado/Tiposinmovilizado"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TiposinmovilizadoRow))]
    public class TiposinmovilizadoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inmovilizado/Tiposinmovilizado/TiposinmovilizadoIndex.cshtml");
        }
    }
}
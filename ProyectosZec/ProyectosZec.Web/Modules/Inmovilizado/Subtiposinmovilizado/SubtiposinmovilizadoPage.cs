
namespace ProyectosZec.Inmovilizado.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inmovilizado/Subtiposinmovilizado"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SubtiposinmovilizadoRow))]
    public class SubtiposinmovilizadoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inmovilizado/Subtiposinmovilizado/SubtiposinmovilizadoIndex.cshtml");
        }
    }
}
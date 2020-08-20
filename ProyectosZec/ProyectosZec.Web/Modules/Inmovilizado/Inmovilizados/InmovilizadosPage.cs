
namespace ProyectosZec.Inmovilizado.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inmovilizado/Inmovilizados"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.InmovilizadosRow))]
    public class InmovilizadosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inmovilizado/Inmovilizados/InmovilizadosIndex.cshtml");
        }
    }
}

namespace ProyectosZec.Kairos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Kairos/AusenciasProgramadas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AusenciasProgramadasRow))]
    public class AusenciasProgramadasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Kairos/AusenciasProgramadas/AusenciasProgramadasIndex.cshtml");
        }
    }
}
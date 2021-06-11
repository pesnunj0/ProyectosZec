
namespace ProyectosZec.Kairos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Kairos/KrsAusenciasProgramadasTipos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.KrsAusenciasProgramadasTiposRow))]
    public class KrsAusenciasProgramadasTiposController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Kairos/KrsAusenciasProgramadasTipos/KrsAusenciasProgramadasTiposIndex.cshtml");
        }
    }
}
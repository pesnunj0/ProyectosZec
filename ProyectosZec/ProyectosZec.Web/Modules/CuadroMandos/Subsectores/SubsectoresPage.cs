
namespace ProyectosZec.CuadroMandos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CuadroMandos/Subsectores"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SubsectoresRow))]
    public class SubsectoresController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CuadroMandos/Subsectores/SubsectoresIndex.cshtml");
        }
    }
}
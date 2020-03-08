
namespace ProyectosZec.CuadroMandos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CuadroMandos/Prescriptorinversor"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PrescriptorinversorRow))]
    public class PrescriptorinversorController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CuadroMandos/Prescriptorinversor/PrescriptorinversorIndex.cshtml");
        }
    }
}
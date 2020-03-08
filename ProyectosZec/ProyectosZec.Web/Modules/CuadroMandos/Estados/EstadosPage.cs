
namespace ProyectosZec.CuadroMandos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CuadroMandos/Estados"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EstadosRow))]
    public class EstadosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CuadroMandos/Estados/EstadosIndex.cshtml");
        }
    }
}
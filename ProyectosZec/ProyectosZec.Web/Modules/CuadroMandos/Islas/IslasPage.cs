
namespace ProyectosZec.CuadroMandos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CuadroMandos/Islas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.IslasRow))]
    public class IslasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CuadroMandos/Islas/IslasIndex.cshtml");
        }
    }
}
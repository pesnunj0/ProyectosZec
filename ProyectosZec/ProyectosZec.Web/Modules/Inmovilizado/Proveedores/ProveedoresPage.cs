
namespace ProyectosZec.Inmovilizado.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inmovilizado/Proveedores"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProveedoresRow))]
    public class ProveedoresController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inmovilizado/Proveedores/ProveedoresIndex.cshtml");
        }
    }
}
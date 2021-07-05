
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/Islas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.IslasRow))]
    public class IslasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/Islas/IslasIndex.cshtml");
        }
    }
}
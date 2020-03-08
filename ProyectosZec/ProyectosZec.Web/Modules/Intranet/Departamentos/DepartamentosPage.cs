
namespace ProyectosZec.Intranet.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Intranet/Departamentos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DepartamentosRow))]
    public class DepartamentosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Intranet/Departamentos/DepartamentosIndex.cshtml");
        }
    }
}
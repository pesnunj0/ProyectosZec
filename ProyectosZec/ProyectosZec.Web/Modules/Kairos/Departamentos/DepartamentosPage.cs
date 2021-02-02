
namespace ProyectosZec.Kairos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Kairos/Departamentos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DepartamentosRow))]
    public class DepartamentosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Kairos/Departamentos/DepartamentosIndex.cshtml");
        }
    }
}
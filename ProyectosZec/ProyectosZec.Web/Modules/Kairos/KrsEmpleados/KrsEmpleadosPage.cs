
namespace ProyectosZec.Kairos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Kairos/KrsEmpleados"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.KrsEmpleadosRow))]
    public class KrsEmpleadosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Kairos/KrsEmpleados/KrsEmpleadosIndex.cshtml");
        }
    }
}
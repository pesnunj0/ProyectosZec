
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/Procedimientos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProcedimientosRow))]
    public class ProcedimientosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/Procedimientos/ProcedimientosIndex.cshtml");
        }
    }
}
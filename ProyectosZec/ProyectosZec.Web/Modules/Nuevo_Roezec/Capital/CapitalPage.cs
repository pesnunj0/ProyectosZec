
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/Capital"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CapitalRow))]
    public class CapitalController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/Capital/CapitalIndex.cshtml");
        }
    }
}
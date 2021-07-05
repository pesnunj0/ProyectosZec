
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/Subsectores"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SubsectoresRow))]
    public class SubsectoresController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/Subsectores/SubsectoresIndex.cshtml");
        }
    }
}
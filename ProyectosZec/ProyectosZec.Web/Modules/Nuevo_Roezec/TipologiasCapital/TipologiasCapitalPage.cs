
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/TipologiasCapital"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TipologiasCapitalRow))]
    public class TipologiasCapitalController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/TipologiasCapital/TipologiasCapitalIndex.cshtml");
        }
    }
}
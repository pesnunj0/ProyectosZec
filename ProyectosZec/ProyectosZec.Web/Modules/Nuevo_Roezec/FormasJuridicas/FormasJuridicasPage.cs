
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/FormasJuridicas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FormasJuridicasRow))]
    public class FormasJuridicasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/FormasJuridicas/FormasJuridicasIndex.cshtml");
        }
    }
}

namespace ProyectosZec.Kairos.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Kairos/HorasExtraConsumidas"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.HorasExtraConsumidasRow))]
    public class HorasExtraConsumidasController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Kairos/HorasExtraConsumidas/HorasExtraConsumidasIndex.cshtml");
        }
    }
}
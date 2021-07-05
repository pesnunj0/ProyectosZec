
namespace ProyectosZec.Nuevo_Roezec.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Nuevo_Roezec/Contactos"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ContactosRow))]
    public class ContactosController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Nuevo_Roezec/Contactos/ContactosIndex.cshtml");
        }
    }
}
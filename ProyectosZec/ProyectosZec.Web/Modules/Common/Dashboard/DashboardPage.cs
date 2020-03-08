
namespace ProyectosZec.Common.Pages
{
    using CuadroMandos;
    using CuadroMandos.Entities;
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                ProyectosRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    var o = ProyectosRow.Fields;
                    using (var connection = SqlConnections.NewFor<ProyectosRow>())
                    {
                        model.OpenOrders = connection.Count<ProyectosRow>(o.EstadoId == 4);
                        var closedOrders = connection.Count<ProyectosRow>(o.EstadoId == 6);
                        var totalOrders = model.OpenOrders + closedOrders;
                        model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
                            ((double)closedOrders / (double)totalOrders * 100));
                        model.CustomerCount = connection.Count<ProyectosRow>();
                        model.ProductCount = connection.Count<ProyectosRow>();
                    }
                    return model;
                });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}

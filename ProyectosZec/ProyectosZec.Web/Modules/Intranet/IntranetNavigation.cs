using Serenity.Navigation;
using MyPages = ProyectosZec.Intranet.Pages;

[assembly: NavigationMenu(6000, "Intranet", icon: "fa-newspaper-o")]
[assembly: NavigationLink(int.MaxValue, "Intranet/Departamentos", typeof(MyPages.DepartamentosController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Intranet/Sedes", typeof(MyPages.SedesController), icon: "fa-map-pin")]
[assembly: NavigationLink(int.MaxValue, "Intranet/Telefonos", typeof(MyPages.TelefonosController), icon: "fa-phone")]
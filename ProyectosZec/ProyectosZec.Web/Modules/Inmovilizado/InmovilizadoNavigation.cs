using Serenity.Navigation;
using MyPages = ProyectosZec.Inmovilizado.Pages;

[assembly: NavigationMenu(5000, "Inmovilizado", icon: "fa-money")]
[assembly: NavigationLink(5001, "Inmovilizado/Inmovilizados", typeof(MyPages.InmovilizadosController), icon: "fa-navicon")]
[assembly: NavigationLink(5002, "Inmovilizado/Proveedores", typeof(MyPages.ProveedoresController), icon: "fa-group")]
[assembly: NavigationLink(5003, "Inmovilizado/Tipos Inmovilizado", typeof(MyPages.TiposinmovilizadoController), icon: "fa-industry")]
[assembly: NavigationLink(5004, "Inmovilizado/Subtipos Inmovilizado", typeof(MyPages.SubtiposinmovilizadoController), icon: "fa-industry")]
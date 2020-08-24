using Serenity.Navigation;
using MyPages = ProyectosZec.Inmovilizado.Pages;

[assembly: NavigationMenu(int.MaxValue, "Inmovilizado", icon: "fa-money")]
[assembly: NavigationLink(int.MaxValue, "Inmovilizado/Inmovilizados", typeof(MyPages.InmovilizadosController), icon: "fa-navicon")]
[assembly: NavigationLink(int.MaxValue, "Inmovilizado/Proveedores", typeof(MyPages.ProveedoresController), icon: "fa-group")]
//[assembly: NavigationLink(int.MaxValue, "Inmovilizado/Tipos Inmovilizado", typeof(MyPages.TiposinmovilizadoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inmovilizado/Subtipos Inmovilizado", typeof(MyPages.SubtiposinmovilizadoController), icon: "fa-industry")]
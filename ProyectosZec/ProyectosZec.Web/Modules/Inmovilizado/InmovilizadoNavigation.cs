using Serenity.Navigation;
using MyPages = ProyectosZec.Inmovilizado.Pages;

[assembly: NavigationLink(int.MaxValue, "Inmovilizado/Proveedores", typeof(MyPages.ProveedoresController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inmovilizado/Subtiposinmovilizado", typeof(MyPages.SubtiposinmovilizadoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inmovilizado/Tiposinmovilizado", typeof(MyPages.TiposinmovilizadoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inmovilizado/Inmovilizados", typeof(MyPages.InmovilizadosController), icon: null)]
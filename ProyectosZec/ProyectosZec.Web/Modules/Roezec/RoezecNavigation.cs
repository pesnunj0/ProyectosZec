using Serenity.Navigation;
using MyPages = ProyectosZec.Roezec.Pages;

[assembly: NavigationMenu(int.MaxValue, "Roezec", icon: "fa-database")]
[assembly: NavigationLink(int.MaxValue, "Roezec/Empresas", typeof(MyPages.RoezecEmpresasController), icon: "fa-industry")]
[assembly: NavigationLink(int.MaxValue, "Roezec/Nace", typeof(MyPages.NacesController), icon: "fa-file-archive-o")]
[assembly: NavigationLink(int.MaxValue, "Roezec/Empresas-Nace", typeof(MyPages.ActividadesController), icon: "fa-industry")]

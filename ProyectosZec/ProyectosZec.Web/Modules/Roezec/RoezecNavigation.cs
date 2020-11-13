using Serenity.Navigation;
using MyPages = ProyectosZec.Roezec.Pages;

[assembly: NavigationMenu(int.MaxValue, "Roezec", icon: "fa-database")]
[assembly: NavigationLink(int.MaxValue, "Roezec/Empresas", typeof(MyPages.RoezecEmpresasController), icon: "fa-industry")]
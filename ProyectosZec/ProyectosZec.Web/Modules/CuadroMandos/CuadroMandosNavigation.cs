using Serenity.Navigation;
using MyPages = ProyectosZec.CuadroMandos.Pages;


[assembly: NavigationMenu(7000, "CuadroMandos", icon: "fa-dashboard")]
[assembly: NavigationLink(7100, "CuadroMandos/Proyectos", typeof(MyPages.ProyectosController), icon: "fa-folder-open-o")]
[assembly: NavigationMenu(7100, "CuadroMandos/Informes", icon: "fa-navicon")]
[assembly: NavigationLink(7110, "CuadroMandos/Informes/Presentadas", typeof(MyPages.PresentadasController), icon: "fa-file-excel-o")]
[assembly: NavigationLink(7200, "CuadroMandos/Sectores", typeof(MyPages.SectoresController), icon: "fa-industry")]
[assembly: NavigationLink(7400, "CuadroMandos/Subsectores", typeof(MyPages.SubsectoresController), icon: "fa-industry")]
[assembly: NavigationLink(7500, "CuadroMandos/Capital", typeof(MyPages.CapitalController), icon: "fa-money")]
[assembly: NavigationLink(7600, "CuadroMandos/Estados", typeof(MyPages.EstadosController), icon: "fa-list-ul")]
[assembly: NavigationLink(7700, "CuadroMandos/Prescriptorinversor", typeof(MyPages.PrescriptorinversorController), icon: "fa-user")]
[assembly: NavigationLink(7800, "CuadroMandos/Islas", typeof(MyPages.IslasController), icon: "fa-map-pin")]
[assembly: NavigationLink(7900, "CuadroMandos/Tecnicos", typeof(MyPages.TecnicosController), icon: " fa-user-plus")]
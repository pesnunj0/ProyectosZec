using Serenity.Navigation;
using MyPages = ProyectosZec.CuadroMandos.Pages;


[assembly: NavigationMenu(7000, "CuadroMandos", icon: "fa-dashboard")]
[assembly: NavigationLink(7100, "CuadroMandos/Proyectos", typeof(MyPages.ProyectosController), icon: "fa-folder-open-o")]
[assembly: NavigationMenu(7100, "CuadroMandos/Informes", icon: "fa-navicon")]
[assembly: NavigationLink(7110, "CuadroMandos/Informes/Presentadas", typeof(MyPages.PresentadasController), icon: "fa-file-excel-o")]
[assembly: NavigationMenu(7200, "CuadroMandos/Ficheros Auxiliares", icon: " fa-gears")]
[assembly: NavigationLink(7210, "CuadroMandos/Ficheros Auxiliares/Sectores", typeof(MyPages.SectoresController), icon: "fa-industry")]
[assembly: NavigationLink(7210, "CuadroMandos/Ficheros Auxiliares/Subsectores", typeof(MyPages.SubsectoresController), icon: "fa-industry")]
[assembly: NavigationLink(7210, "CuadroMandos/Ficheros Auxiliares/Capital", typeof(MyPages.CapitalController), icon: "fa-money")]
[assembly: NavigationLink(7210, "CuadroMandos/Ficheros Auxiliares/Estados", typeof(MyPages.EstadosController), icon: "fa-list-ul")]
[assembly: NavigationLink(7210, "CuadroMandos/Ficheros Auxiliares/Prescriptorinversor", typeof(MyPages.PrescriptorinversorController), icon: "fa-user")]
[assembly: NavigationLink(7210, "CuadroMandos/Ficheros Auxiliares/Islas", typeof(MyPages.IslasController), icon: "fa-map-pin")]
[assembly: NavigationLink(7210, "CuadroMandos/Ficheros Auxiliares/Tecnicos", typeof(MyPages.TecnicosController), icon: " fa-user-plus")]
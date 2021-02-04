using Serenity.Navigation;
using MyPages = ProyectosZec.Kairos.Pages;

[assembly: NavigationMenu(int.MaxValue, "Kairos", icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Kairos/Empleados", typeof(MyPages.KrsEmpleadosController), icon: "fa-user")]
[assembly: NavigationLink(int.MaxValue, "Kairos/Fichajes", typeof(MyPages.FichajesController), icon: "fa-calendar")]
//[assembly: NavigationLink(int.MaxValue, "Kairos/Sedes", typeof(MyPages.SedesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Kairos/Tipos Fichaje", typeof(MyPages.TiposFichajeController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Kairos/Departamentos", typeof(MyPages.DepartamentosController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Kairos/Diario", typeof(MyPages.DiarioController), icon: "fa-hourglass-end")]
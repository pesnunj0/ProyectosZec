using Serenity.Navigation;
using MyPages = ProyectosZec.Kairos.Pages;

[assembly: NavigationMenu(int.MaxValue, "Kairos", icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Kairos/Empleados", typeof(MyPages.KrsEmpleadosController), icon: "fa-user")]
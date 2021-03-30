using Serenity.Navigation;
using MyPages = ProyectosZec.Kairos.Pages;

[assembly: NavigationMenu(int.MaxValue, "Kairos", icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Kairos/Empleados", typeof(MyPages.KrsEmpleadosController), icon: "fa-user")]
[assembly: NavigationLink(int.MaxValue, "Kairos/Fichajes", typeof(MyPages.FichajesController), icon: "fa-check-square-o")]
[assembly: NavigationLink(int.MaxValue, "Kairos/Diario", typeof(MyPages.DiarioController), icon: "fa-calendar")]
[assembly: NavigationLink(int.MaxValue, "Kairos/Horas Extra", typeof(MyPages.ExtrasController), icon: "fa-calendar-check-o")]
//[assembly: NavigationLink(int.MaxValue, "Kairos/Estados Extras", typeof(MyPages.EstadosExtrasController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Kairos/Horas Extra Consumidas", typeof(MyPages.HorasExtraConsumidasController), icon: "fa-ship")]
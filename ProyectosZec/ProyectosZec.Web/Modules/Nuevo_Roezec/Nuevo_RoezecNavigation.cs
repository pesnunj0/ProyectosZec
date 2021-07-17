﻿using Serenity.Navigation;
using MyPages = ProyectosZec.Nuevo_Roezec.Pages;

[assembly: NavigationMenu(int.MaxValue, "Nuevo Roezec", icon: "fa-database")]
[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Empresas", typeof(MyPages.EmpresasController), icon:"fa-building")]
//[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Capital", typeof(MyPages.CapitalController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Contactos", typeof(MyPages.ContactosController), icon: "fa-user-plus")]
//[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Estados Empresa", typeof(MyPages.EstadosEmpresaController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Formas Juridicas", typeof(MyPages.FormasJuridicasController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Islas", typeof(MyPages.IslasController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Naces", typeof(MyPages.NacesController), icon: "fa-industry")]
//[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Paises", typeof(MyPages.PaisesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Sectores", typeof(MyPages.SectoresController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Subsectores", typeof(MyPages.SubsectoresController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Tecnicos", typeof(MyPages.TecnicosController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Tipologias Capital", typeof(MyPages.TipologiasCapitalController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Tipos Contacto", typeof(MyPages.TiposContactoController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Tipos Garantia Tasas", typeof(MyPages.TiposGarantiaTasasController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Procedimientos", typeof(MyPages.ProcedimientosController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Nuevo_Roezec/Continentes", typeof(MyPages.ContinentesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Empresas Contactos", typeof(MyPages.EmpresasContactosController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Empresas Nace", typeof(MyPages.EmpresasNaceController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Nuevo Roezec/Historial Empresas", typeof(MyPages.HistorialEmpresasController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Nuevo_Roezec/Idiomas", typeof(MyPages.IdiomasController), icon: null)]
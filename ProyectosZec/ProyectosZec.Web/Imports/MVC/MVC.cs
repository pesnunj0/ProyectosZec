using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }

        }

        public static class CuadroMandos
        {
            public static class Capital
            {
                public const string CapitalIndex = "~/Modules/CuadroMandos/Capital/CapitalIndex.cshtml";
            }

            public static class Estados
            {
                public const string EstadosIndex = "~/Modules/CuadroMandos/Estados/EstadosIndex.cshtml";
            }

            public static class Islas
            {
                public const string IslasIndex = "~/Modules/CuadroMandos/Islas/IslasIndex.cshtml";
            }

            public static class Prescriptorinversor
            {
                public const string PrescriptorinversorIndex = "~/Modules/CuadroMandos/Prescriptorinversor/PrescriptorinversorIndex.cshtml";
            }

            public static class Presentadas
            {
                public const string PresentadasIndex = "~/Modules/CuadroMandos/Presentadas/PresentadasIndex.cshtml";
            }

            public static class Proyectos
            {
                public const string ProyectosIndex = "~/Modules/CuadroMandos/Proyectos/ProyectosIndex.cshtml";
            }

            public static class Sectores
            {
                public const string SectoresIndex = "~/Modules/CuadroMandos/Sectores/SectoresIndex.cshtml";
            }

            public static class Subsectores
            {
                public const string SubsectoresIndex = "~/Modules/CuadroMandos/Subsectores/SubsectoresIndex.cshtml";
            }

            public static class Tecnicos
            {
                public const string TecnicosIndex = "~/Modules/CuadroMandos/Tecnicos/TecnicosIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Inmovilizado
        {
            public static class Inmovilizados
            {
                public const string InmovilizadosIndex = "~/Modules/Inmovilizado/Inmovilizados/InmovilizadosIndex.cshtml";
            }

            public static class Proveedores
            {
                public const string ProveedoresIndex = "~/Modules/Inmovilizado/Proveedores/ProveedoresIndex.cshtml";
            }

            public static class Subtiposinmovilizado
            {
                public const string SubtiposinmovilizadoIndex = "~/Modules/Inmovilizado/Subtiposinmovilizado/SubtiposinmovilizadoIndex.cshtml";
            }

            public static class Tiposinmovilizado
            {
                public const string TiposinmovilizadoIndex = "~/Modules/Inmovilizado/Tiposinmovilizado/TiposinmovilizadoIndex.cshtml";
            }

        }

        public static class Intranet
        {
            public static class Departamentos
            {
                public const string DepartamentosIndex = "~/Modules/Intranet/Departamentos/DepartamentosIndex.cshtml";
            }

            public static class Sedes
            {
                public const string SedesIndex = "~/Modules/Intranet/Sedes/SedesIndex.cshtml";
            }

            public static class Telefonos
            {
                public const string TelefonosIndex = "~/Modules/Intranet/Telefonos/TelefonosIndex.cshtml";
            }

        }

        public static class Kairos
        {
            public static class Departamentos
            {
                public const string DepartamentosIndex = "~/Modules/Kairos/Departamentos/DepartamentosIndex.cshtml";
            }

            public static class Diario
            {
                public const string DiarioIndex = "~/Modules/Kairos/Diario/DiarioIndex.cshtml";
            }

            public static class EstadosExtras
            {
                public const string EstadosExtrasIndex = "~/Modules/Kairos/EstadosExtras/EstadosExtrasIndex.cshtml";
            }

            public static class Extras
            {
                public const string ExtrasIndex = "~/Modules/Kairos/Extras/ExtrasIndex.cshtml";
            }

            public static class Fichajes
            {
                public const string FichajesIndex = "~/Modules/Kairos/Fichajes/FichajesIndex.cshtml";
            }

            public static class HorasExtraConsumidas
            {
                public const string HorasExtraConsumidasIndex = "~/Modules/Kairos/HorasExtraConsumidas/HorasExtraConsumidasIndex.cshtml";
            }

            public static class KrsEmpleados
            {
                public const string KrsEmpleadosIndex = "~/Modules/Kairos/KrsEmpleados/KrsEmpleadosIndex.cshtml";
            }

            public static class TiposFichaje
            {
                public const string TiposFichajeIndex = "~/Modules/Kairos/TiposFichaje/TiposFichajeIndex.cshtml";
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class Roezec
        {
            public static class Actividades
            {
                public const string ActividadesIndex = "~/Modules/Roezec/Actividades/ActividadesIndex.cshtml";
            }

            public static class Naces
            {
                public const string NacesIndex = "~/Modules/Roezec/Naces/NacesIndex.cshtml";
            }

            public static class Representantes
            {
                public const string RepresentantesIndex = "~/Modules/Roezec/Representantes/RepresentantesIndex.cshtml";
            }

            public static class RoezecEmpresas
            {
                public const string RoezecEmpresasIndex = "~/Modules/Roezec/RoezecEmpresas/RoezecEmpresasIndex.cshtml";
            }

            public static class RoezecEstados
            {
                public const string RoezecEstadosIndex = "~/Modules/Roezec/RoezecEstados/RoezecEstadosIndex.cshtml";
            }

            public static class Socios
            {
                public const string SociosIndex = "~/Modules/Roezec/Socios/SociosIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }
    }
}


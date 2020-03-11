﻿namespace ProyectosZec.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace CuadroMandos {

            namespace Capital {
                export const Capital: string;
                export const CapitalId: string;
            }

            namespace Estados {
                export const Estado: string;
                export const EstadoId: string;
            }

            namespace Islas {
                export const Isla: string;
                export const IslaId: string;
                export const NombreIsla: string;
            }

            namespace Prescriptorinversor {
                export const PrescriptorInversor: string;
                export const PrescriptorInversorId: string;
            }

            namespace Proyectos {
                export const Capital: string;
                export const CapitalId: string;
                export const Captacion: string;
                export const Contacto: string;
                export const Denominacion: string;
                export const Descripcion: string;
                export const Email: string;
                export const EmpleoReal: string;
                export const Empleos: string;
                export const Estado: string;
                export const EstadoId: string;
                export const Expediente: string;
                export const FechaAmpliacion: string;
                export const FechaAutorizacion: string;
                export const FechaBaja: string;
                export const FechaInicio: string;
                export const FechaInscripcion: string;
                export const FechaPresentacion: string;
                export const Inversion: string;
                export const InversionReal: string;
                export const Isla: string;
                export const IslaId: string;
                export const Nace: string;
                export const NombreTecnico: string;
                export const PrescriptorInversor: string;
                export const PrescriptorInversorId: string;
                export const ProyectoId: string;
                export const Sector: string;
                export const SectorId: string;
                export const Subsector: string;
                export const SubsectorId: string;
                export const SubsectorSectorId: string;
                export const Tecnico: string;
                export const TecnicoId: string;
                export const Telefono: string;
            }

            namespace Sectores {
                export const Sector: string;
                export const SectorId: string;
            }

            namespace Subsectores {
                export const Sector: string;
                export const SectorId: string;
                export const Subsector: string;
                export const SubsectorId: string;
            }

            namespace Tecnicos {
                export const NombreTecnico: string;
                export const Tecnico: string;
                export const TecnicoId: string;
            }
        }

        namespace Intranet {

            namespace Departamentos {
                export const Departamento: string;
                export const DepartamentoId: string;
            }

            namespace Sedes {
                export const Sede: string;
                export const SedeId: string;
            }

            namespace Telefonos {
                export const Departamento: string;
                export const DepartamentoId: string;
                export const ExtCorta: string;
                export const Fijo: string;
                export const Movil: string;
                export const Nombre: string;
                export const Sede: string;
                export const SedeId: string;
                export const TelefonoId: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    ProyectosZec['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},CuadroMandos:{Capital:{Capital:1,CapitalId:1},Estados:{Estado:1,EstadoId:1},Islas:{Isla:1,IslaId:1,NombreIsla:1},Prescriptorinversor:{PrescriptorInversor:1,PrescriptorInversorId:1},Proyectos:{Capital:1,CapitalId:1,Captacion:1,Contacto:1,Denominacion:1,Descripcion:1,Email:1,EmpleoReal:1,Empleos:1,Estado:1,EstadoId:1,Expediente:1,FechaAmpliacion:1,FechaAutorizacion:1,FechaBaja:1,FechaInicio:1,FechaInscripcion:1,FechaPresentacion:1,Inversion:1,InversionReal:1,Isla:1,IslaId:1,Nace:1,NombreTecnico:1,PrescriptorInversor:1,PrescriptorInversorId:1,ProyectoId:1,Sector:1,SectorId:1,Subsector:1,SubsectorId:1,SubsectorSectorId:1,Tecnico:1,TecnicoId:1,Telefono:1},Sectores:{Sector:1,SectorId:1},Subsectores:{Sector:1,SectorId:1,Subsector:1,SubsectorId:1},Tecnicos:{NombreTecnico:1,Tecnico:1,TecnicoId:1}},Intranet:{Departamentos:{Departamento:1,DepartamentoId:1},Sedes:{Sede:1,SedeId:1},Telefonos:{Departamento:1,DepartamentoId:1,ExtCorta:1,Fijo:1,Movil:1,Nombre:1,Sede:1,SedeId:1,TelefonoId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}


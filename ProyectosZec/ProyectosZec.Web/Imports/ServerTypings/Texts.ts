namespace ProyectosZec.Texts {

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

        namespace Inmovilizado {

            namespace Inmovilizados {
                export const Amortizacion: string;
                export const Codigo: string;
                export const Descripcion: string;
                export const Factura: string;
                export const FechaBaja: string;
                export const FechaCompra: string;
                export const Files: string;
                export const GalleryImages: string;
                export const Garantia: string;
                export const InmovilizadoId: string;
                export const NumeroSerie: string;
                export const Pg: string;
                export const Proveedor: string;
                export const ProveedorId: string;
                export const Sede: string;
                export const SedeId: string;
                export const SubTipo: string;
                export const SubTipoInmovilizadoId: string;
                export const Tipo: string;
                export const TipoInmovilizadoId: string;
                export const Ubicacion: string;
                export const Valor: string;
                export const ValorResidual: string;
            }

            namespace Proveedores {
                export const Contacto: string;
                export const Email: string;
                export const Proveedor: string;
                export const ProveedorId: string;
                export const Telefono: string;
            }

            namespace Subtiposinmovilizado {
                export const SubTipo: string;
                export const SubTipoInmovilizadoId: string;
                export const TipoInmovilizadoId: string;
                export const TipoInmovilizadoTipo: string;
            }

            namespace Tiposinmovilizado {
                export const Tipo: string;
                export const TipoInmovilizadoId: string;
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
                export const Contrato: string;
                export const CortoMovil: string;
                export const Departamento: string;
                export const DepartamentoId: string;
                export const ExtCorta: string;
                export const Fijo: string;
                export const Movil: string;
                export const Multisim: string;
                export const Nombre: string;
                export const PUK: string;
                export const Sede: string;
                export const SedeId: string;
                export const TelefonoId: string;
            }
        }

        namespace Kairos {

            namespace Departamentos {
                export const Codigo: string;
                export const CodigoCliente: string;
                export const Descripcion: string;
                export const FechaBorrado: string;
                export const Id: string;
                export const SedeId: string;
            }

            namespace Diario {
                export const Empleado: string;
                export const Entrada: string;
                export const Fecha: string;
                export const HoraEntrada: string;
                export const HoraSalida: string;
                export const Id: string;
                export const IdDepartamento: string;
                export const IdEmpleado: string;
                export const Salida: string;
                export const Sede: string;
                export const SedeId: string;
            }

            namespace EstadosExtras {
                export const Descripcion: string;
                export const EstadoId: string;
            }

            namespace Extras {
                export const CodigoCliente: string;
                export const Convertidas: string;
                export const Dia: string;
                export const DptoId: string;
                export const Empleado: string;
                export const Estado: string;
                export const EstadoDesc: string;
                export const Fecha: string;
                export const FechaAceptacionCancelacion: string;
                export const Id: string;
                export const IdAusenciaProgramadaTipo: string;
                export const IdEmpleado: string;
                export const IdHoraExtraCabecera: string;
                export const IdHoraExtraCabeceraCodigo: string;
                export const IdHoraExtraCabeceraCodigoCliente: string;
                export const IdHoraExtraCabeceraDescripcion: string;
                export const IdHoraExtraCabeceraFechaBorrado: string;
                export const MotivoCancelacion: string;
                export const Sede: string;
                export const SedeId: string;
                export const Tipo: string;
                export const TotalHorasExtrasConvertidas: string;
                export const TotalHorasExtrasReales: string;
            }

            namespace Fichajes {
                export const Anulado: string;
                export const CodigoCliente: string;
                export const Dispositivo: string;
                export const DptoId: string;
                export const Empleado: string;
                export const EntradaSalida: string;
                export const Fecha: string;
                export const FechaHora: string;
                export const Fichaje: string;
                export const Files: string;
                export const GpsAltitud: string;
                export const GpsFechaHora: string;
                export const GpsPosicionLatitud: string;
                export const GpsPosicionLongitud: string;
                export const GpsProveedor: string;
                export const Hora: string;
                export const Id: string;
                export const IdDispositivoModelo: string;
                export const IdDispositivoModeloCodigoCliente: string;
                export const IdDispositivoModeloFabricante: string;
                export const IdDispositivoModeloFechaBorrado: string;
                export const IdDispositivoModeloMac: string;
                export const IdDispositivoModeloMarca: string;
                export const IdDispositivoModeloModelo: string;
                export const IdEmpleado: string;
                export const IdEmpresa: string;
                export const IdTerminal: string;
                export const IdTerminalCodigo: string;
                export const IdTerminalCodigoCliente: string;
                export const IdTerminalDescripcion: string;
                export const IdTerminalDispositivoHuellaDactilar: string;
                export const IdTerminalDispositivoHuellaDactilarDns: string;
                export const IdTerminalDispositivoHuellaDactilarFirmware: string;
                export const IdTerminalDispositivoHuellaDactilarIp: string;
                export const IdTerminalDispositivoHuellaDactilarMarca: string;
                export const IdTerminalDispositivoHuellaDactilarModelo: string;
                export const IdTerminalDispositivoHuellaDactilarNumero: string;
                export const IdTerminalDispositivoHuellaDactilarPuerto: string;
                export const IdTerminalFechaActualizacion: string;
                export const IdTerminalFechaBorrado: string;
                export const IdTerminalIdDepartamento: string;
                export const IdTerminalTipoDispositivo: string;
                export const Modificado: string;
                export const Observaciones: string;
                export const Sede: string;
                export const SedeId: string;
                export const TipoDispositivo: string;
                export const Validado: string;
            }

            namespace HorasExtraConsumidas {
                export const Dia: string;
                export const FechaAutorizacion: string;
                export const Id: string;
                export const IdHoraExtra: string;
                export const IdHoraExtraCodigoCliente: string;
                export const IdHoraExtraDia: string;
                export const IdHoraExtraEstado: string;
                export const IdHoraExtraFecha: string;
                export const IdHoraExtraFechaAceptacionCancelacion: string;
                export const IdHoraExtraIdAusenciaProgramadaTipo: string;
                export const IdHoraExtraIdEmpleado: string;
                export const IdHoraExtraIdHoraExtraCabecera: string;
                export const IdHoraExtraMotivoCancelacion: string;
                export const IdHoraExtraTipo: string;
                export const IdHoraExtraTotalHorasExtrasConvertidas: string;
                export const IdHoraExtraTotalHorasExtrasReales: string;
                export const Tiempo: string;
            }

            namespace KrsEmpleados {
                export const ClaveAccesoWeb: string;
                export const CodigoCliente: string;
                export const CodigoValidacion: string;
                export const Email: string;
                export const FechaActualizacion: string;
                export const FechaBaja: string;
                export const FechaBorrado: string;
                export const Id: string;
                export const IdDepartamento: string;
                export const IdEmpresa: string;
                export const IdEmpresaFichajeAutomatico: string;
                export const IdHoraExtraCabecera: string;
                export const IdHoraExtraCabeceraCodigo: string;
                export const IdHoraExtraCabeceraCodigoCliente: string;
                export const IdHoraExtraCabeceraDescripcion: string;
                export const IdHoraExtraCabeceraFechaBorrado: string;
                export const Nombre: string;
                export const NumeroTarjetaFichaje: string;
                export const PermiteFichajeAutomatico: string;
                export const PermiteFichajeWeb: string;
                export const PermiteRecordatorio: string;
                export const Pin: string;
                export const ProgramaExternoDescripcion: string;
                export const ProgramaExternoIdEmpleado: string;
                export const SacarFotoFichaje: string;
                export const Tecnico: string;
                export const UsoHorario: string;
            }

            namespace TiposFichaje {
                export const Id: string;
                export const Tipo: string;
            }
        }

        namespace Roezec {

            namespace Actividades {
                export const Actividad: string;
                export const Agencia: string;
                export const AnyoExpediente: string;
                export const Cif: string;
                export const Codigo: string;
                export const Cp: string;
                export const Direccion: string;
                export const Empresa: string;
                export const Estado: string;
                export const ExentaAreaAcotada: string;
                export const FechaAlta: string;
                export const FechaBaja: string;
                export const FechaModificacion: string;
                export const FormaJuridica: string;
                export const Id: string;
                export const IdEmpresa: string;
                export const IdNace: string;
                export const Isla: string;
                export const MotivosExencion: string;
                export const NotasMarginales: string;
                export const NumExpediente: string;
                export const ObjetivoEmpleo: string;
                export const ObjetivoInversion: string;
                export const ObservacionesEmpleo: string;
                export const ObservacionesInversion: string;
                export const Poblacion: string;
                export const PreEmpleo: string;
                export const PreInversion: string;
                export const Provincia: string;
                export const SituacionId: string;
                export const Superficie: string;
                export const Tecnico: string;
                export const TrasEmpleo: string;
                export const TrasInversion: string;
                export const UsrAlta: string;
                export const UsrBaja: string;
                export const UsrModificacion: string;
            }

            namespace Naces {
                export const Actividad: string;
                export const Codigo: string;
                export const FechaAlta: string;
                export const Id: string;
                export const Nace: string;
                export const UsrAlta: string;
            }

            namespace Representantes {
                export const Agencia: string;
                export const AnyoExpediente: string;
                export const Cif: string;
                export const Cp: string;
                export const Descripcion: string;
                export const Direccion: string;
                export const Doc: string;
                export const Email: string;
                export const Empresa: string;
                export const Estado: string;
                export const ExentaAreaAcotada: string;
                export const FechaAlta: string;
                export const FechaBaja: string;
                export const FechaModificacion: string;
                export const FormaJuridica: string;
                export const Id: string;
                export const IdEmpresa: string;
                export const IdRepresentanteFisico: string;
                export const Isla: string;
                export const MotivoBaja: string;
                export const MotivosExencion: string;
                export const Nombre: string;
                export const NotasMarginales: string;
                export const NumExpediente: string;
                export const ObjetivoEmpleo: string;
                export const ObjetivoInversion: string;
                export const ObservacionesEmpleo: string;
                export const ObservacionesInversion: string;
                export const Pais: string;
                export const Poblacion: string;
                export const PreEmpleo: string;
                export const PreInversion: string;
                export const Provincia: string;
                export const SituacionId: string;
                export const Superficie: string;
                export const Tecnico: string;
                export const Telefono: string;
                export const TipoDoc: string;
                export const TrasEmpleo: string;
                export const TrasInversion: string;
                export const UsrAlta: string;
                export const UsrBaja: string;
                export const UsrModificacion: string;
            }

            namespace RoezecEmpresas {
                export const Agencia: string;
                export const AnyoExpediente: string;
                export const Cif: string;
                export const Cp: string;
                export const DenominacionSocial: string;
                export const Direccion: string;
                export const Estado: string;
                export const ExentaAreaAcotada: string;
                export const FechaAlta: string;
                export const FechaBaja: string;
                export const FechaModificacion: string;
                export const FormaJuridica: string;
                export const Id: string;
                export const Isla: string;
                export const MotivosExencion: string;
                export const NotasMarginales: string;
                export const NumExpediente: string;
                export const ObjetivoEmpleo: string;
                export const ObjetivoInversion: string;
                export const ObservacionesEmpleo: string;
                export const ObservacionesInversion: string;
                export const Poblacion: string;
                export const PreEmpleo: string;
                export const PreInversion: string;
                export const Provincia: string;
                export const SituacionId: string;
                export const Superficie: string;
                export const Tecnico: string;
                export const TrasEmpleo: string;
                export const TrasInversion: string;
                export const UsrAlta: string;
                export const UsrBaja: string;
                export const UsrModificacion: string;
            }

            namespace RoezecEstados {
                export const Codigo: string;
                export const Descripcion: string;
            }

            namespace Socios {
                export const Agencia: string;
                export const AnyoExpediente: string;
                export const Cif: string;
                export const Cp: string;
                export const Descripcion: string;
                export const Direccion: string;
                export const Doc: string;
                export const Email: string;
                export const Empresa: string;
                export const Estado: string;
                export const ExentaAreaAcotada: string;
                export const FechaAlta: string;
                export const FechaBaja: string;
                export const FechaModificacion: string;
                export const FormaJuridica: string;
                export const Id: string;
                export const IdEmpresa: string;
                export const Isla: string;
                export const MotivoBaja: string;
                export const MotivosExencion: string;
                export const Nombre: string;
                export const NotasMarginales: string;
                export const NumExpediente: string;
                export const ObjetivoEmpleo: string;
                export const ObjetivoInversion: string;
                export const ObservacionesEmpleo: string;
                export const ObservacionesInversion: string;
                export const Pais: string;
                export const Participacion: string;
                export const Poblacion: string;
                export const PreEmpleo: string;
                export const PreInversion: string;
                export const Provincia: string;
                export const SituacionId: string;
                export const Superficie: string;
                export const Tecnico: string;
                export const Telefono: string;
                export const TipoDoc: string;
                export const TipoPersona: string;
                export const TrasEmpleo: string;
                export const TrasInversion: string;
                export const UsrAlta: string;
                export const UsrBaja: string;
                export const UsrModificacion: string;
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

    ProyectosZec['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},CuadroMandos:{Capital:{Capital:1,CapitalId:1},Estados:{Estado:1,EstadoId:1},Islas:{Isla:1,IslaId:1,NombreIsla:1},Prescriptorinversor:{PrescriptorInversor:1,PrescriptorInversorId:1},Proyectos:{Capital:1,CapitalId:1,Captacion:1,Contacto:1,Denominacion:1,Descripcion:1,Email:1,EmpleoReal:1,Empleos:1,Estado:1,EstadoId:1,Expediente:1,FechaAmpliacion:1,FechaAutorizacion:1,FechaBaja:1,FechaInicio:1,FechaInscripcion:1,FechaPresentacion:1,Inversion:1,InversionReal:1,Isla:1,IslaId:1,Nace:1,NombreTecnico:1,PrescriptorInversor:1,PrescriptorInversorId:1,ProyectoId:1,Sector:1,SectorId:1,Subsector:1,SubsectorId:1,SubsectorSectorId:1,Tecnico:1,TecnicoId:1,Telefono:1},Sectores:{Sector:1,SectorId:1},Subsectores:{Sector:1,SectorId:1,Subsector:1,SubsectorId:1},Tecnicos:{NombreTecnico:1,Tecnico:1,TecnicoId:1}},Inmovilizado:{Inmovilizados:{Amortizacion:1,Codigo:1,Descripcion:1,Factura:1,FechaBaja:1,FechaCompra:1,Files:1,GalleryImages:1,Garantia:1,InmovilizadoId:1,NumeroSerie:1,Pg:1,Proveedor:1,ProveedorId:1,Sede:1,SedeId:1,SubTipo:1,SubTipoInmovilizadoId:1,Tipo:1,TipoInmovilizadoId:1,Ubicacion:1,Valor:1,ValorResidual:1},Proveedores:{Contacto:1,Email:1,Proveedor:1,ProveedorId:1,Telefono:1},Subtiposinmovilizado:{SubTipo:1,SubTipoInmovilizadoId:1,TipoInmovilizadoId:1,TipoInmovilizadoTipo:1},Tiposinmovilizado:{Tipo:1,TipoInmovilizadoId:1}},Intranet:{Departamentos:{Departamento:1,DepartamentoId:1},Sedes:{Sede:1,SedeId:1},Telefonos:{Contrato:1,CortoMovil:1,Departamento:1,DepartamentoId:1,ExtCorta:1,Fijo:1,Movil:1,Multisim:1,Nombre:1,PUK:1,Sede:1,SedeId:1,TelefonoId:1}},Kairos:{Departamentos:{Codigo:1,CodigoCliente:1,Descripcion:1,FechaBorrado:1,Id:1,SedeId:1},Diario:{Empleado:1,Entrada:1,Fecha:1,HoraEntrada:1,HoraSalida:1,Id:1,IdDepartamento:1,IdEmpleado:1,Salida:1,Sede:1,SedeId:1},EstadosExtras:{Descripcion:1,EstadoId:1},Extras:{CodigoCliente:1,Convertidas:1,Dia:1,DptoId:1,Empleado:1,Estado:1,EstadoDesc:1,Fecha:1,FechaAceptacionCancelacion:1,Id:1,IdAusenciaProgramadaTipo:1,IdEmpleado:1,IdHoraExtraCabecera:1,IdHoraExtraCabeceraCodigo:1,IdHoraExtraCabeceraCodigoCliente:1,IdHoraExtraCabeceraDescripcion:1,IdHoraExtraCabeceraFechaBorrado:1,MotivoCancelacion:1,Sede:1,SedeId:1,Tipo:1,TotalHorasExtrasConvertidas:1,TotalHorasExtrasReales:1},Fichajes:{Anulado:1,CodigoCliente:1,Dispositivo:1,DptoId:1,Empleado:1,EntradaSalida:1,Fecha:1,FechaHora:1,Fichaje:1,Files:1,GpsAltitud:1,GpsFechaHora:1,GpsPosicionLatitud:1,GpsPosicionLongitud:1,GpsProveedor:1,Hora:1,Id:1,IdDispositivoModelo:1,IdDispositivoModeloCodigoCliente:1,IdDispositivoModeloFabricante:1,IdDispositivoModeloFechaBorrado:1,IdDispositivoModeloMac:1,IdDispositivoModeloMarca:1,IdDispositivoModeloModelo:1,IdEmpleado:1,IdEmpresa:1,IdTerminal:1,IdTerminalCodigo:1,IdTerminalCodigoCliente:1,IdTerminalDescripcion:1,IdTerminalDispositivoHuellaDactilar:1,IdTerminalDispositivoHuellaDactilarDns:1,IdTerminalDispositivoHuellaDactilarFirmware:1,IdTerminalDispositivoHuellaDactilarIp:1,IdTerminalDispositivoHuellaDactilarMarca:1,IdTerminalDispositivoHuellaDactilarModelo:1,IdTerminalDispositivoHuellaDactilarNumero:1,IdTerminalDispositivoHuellaDactilarPuerto:1,IdTerminalFechaActualizacion:1,IdTerminalFechaBorrado:1,IdTerminalIdDepartamento:1,IdTerminalTipoDispositivo:1,Modificado:1,Observaciones:1,Sede:1,SedeId:1,TipoDispositivo:1,Validado:1},HorasExtraConsumidas:{Dia:1,FechaAutorizacion:1,Id:1,IdHoraExtra:1,IdHoraExtraCodigoCliente:1,IdHoraExtraDia:1,IdHoraExtraEstado:1,IdHoraExtraFecha:1,IdHoraExtraFechaAceptacionCancelacion:1,IdHoraExtraIdAusenciaProgramadaTipo:1,IdHoraExtraIdEmpleado:1,IdHoraExtraIdHoraExtraCabecera:1,IdHoraExtraMotivoCancelacion:1,IdHoraExtraTipo:1,IdHoraExtraTotalHorasExtrasConvertidas:1,IdHoraExtraTotalHorasExtrasReales:1,Tiempo:1},KrsEmpleados:{ClaveAccesoWeb:1,CodigoCliente:1,CodigoValidacion:1,Email:1,FechaActualizacion:1,FechaBaja:1,FechaBorrado:1,Id:1,IdDepartamento:1,IdEmpresa:1,IdEmpresaFichajeAutomatico:1,IdHoraExtraCabecera:1,IdHoraExtraCabeceraCodigo:1,IdHoraExtraCabeceraCodigoCliente:1,IdHoraExtraCabeceraDescripcion:1,IdHoraExtraCabeceraFechaBorrado:1,Nombre:1,NumeroTarjetaFichaje:1,PermiteFichajeAutomatico:1,PermiteFichajeWeb:1,PermiteRecordatorio:1,Pin:1,ProgramaExternoDescripcion:1,ProgramaExternoIdEmpleado:1,SacarFotoFichaje:1,Tecnico:1,UsoHorario:1},TiposFichaje:{Id:1,Tipo:1}},Roezec:{Actividades:{Actividad:1,Agencia:1,AnyoExpediente:1,Cif:1,Codigo:1,Cp:1,Direccion:1,Empresa:1,Estado:1,ExentaAreaAcotada:1,FechaAlta:1,FechaBaja:1,FechaModificacion:1,FormaJuridica:1,Id:1,IdEmpresa:1,IdNace:1,Isla:1,MotivosExencion:1,NotasMarginales:1,NumExpediente:1,ObjetivoEmpleo:1,ObjetivoInversion:1,ObservacionesEmpleo:1,ObservacionesInversion:1,Poblacion:1,PreEmpleo:1,PreInversion:1,Provincia:1,SituacionId:1,Superficie:1,Tecnico:1,TrasEmpleo:1,TrasInversion:1,UsrAlta:1,UsrBaja:1,UsrModificacion:1},Naces:{Actividad:1,Codigo:1,FechaAlta:1,Id:1,Nace:1,UsrAlta:1},Representantes:{Agencia:1,AnyoExpediente:1,Cif:1,Cp:1,Descripcion:1,Direccion:1,Doc:1,Email:1,Empresa:1,Estado:1,ExentaAreaAcotada:1,FechaAlta:1,FechaBaja:1,FechaModificacion:1,FormaJuridica:1,Id:1,IdEmpresa:1,IdRepresentanteFisico:1,Isla:1,MotivoBaja:1,MotivosExencion:1,Nombre:1,NotasMarginales:1,NumExpediente:1,ObjetivoEmpleo:1,ObjetivoInversion:1,ObservacionesEmpleo:1,ObservacionesInversion:1,Pais:1,Poblacion:1,PreEmpleo:1,PreInversion:1,Provincia:1,SituacionId:1,Superficie:1,Tecnico:1,Telefono:1,TipoDoc:1,TrasEmpleo:1,TrasInversion:1,UsrAlta:1,UsrBaja:1,UsrModificacion:1},RoezecEmpresas:{Agencia:1,AnyoExpediente:1,Cif:1,Cp:1,DenominacionSocial:1,Direccion:1,Estado:1,ExentaAreaAcotada:1,FechaAlta:1,FechaBaja:1,FechaModificacion:1,FormaJuridica:1,Id:1,Isla:1,MotivosExencion:1,NotasMarginales:1,NumExpediente:1,ObjetivoEmpleo:1,ObjetivoInversion:1,ObservacionesEmpleo:1,ObservacionesInversion:1,Poblacion:1,PreEmpleo:1,PreInversion:1,Provincia:1,SituacionId:1,Superficie:1,Tecnico:1,TrasEmpleo:1,TrasInversion:1,UsrAlta:1,UsrBaja:1,UsrModificacion:1},RoezecEstados:{Codigo:1,Descripcion:1},Socios:{Agencia:1,AnyoExpediente:1,Cif:1,Cp:1,Descripcion:1,Direccion:1,Doc:1,Email:1,Empresa:1,Estado:1,ExentaAreaAcotada:1,FechaAlta:1,FechaBaja:1,FechaModificacion:1,FormaJuridica:1,Id:1,IdEmpresa:1,Isla:1,MotivoBaja:1,MotivosExencion:1,Nombre:1,NotasMarginales:1,NumExpediente:1,ObjetivoEmpleo:1,ObjetivoInversion:1,ObservacionesEmpleo:1,ObservacionesInversion:1,Pais:1,Participacion:1,Poblacion:1,PreEmpleo:1,PreInversion:1,Provincia:1,SituacionId:1,Superficie:1,Tecnico:1,Telefono:1,TipoDoc:1,TipoPersona:1,TrasEmpleo:1,TrasInversion:1,UsrAlta:1,UsrBaja:1,UsrModificacion:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}


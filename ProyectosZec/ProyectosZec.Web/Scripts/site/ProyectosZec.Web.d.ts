/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace ProyectosZec.Administration {
}
declare namespace ProyectosZec.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace ProyectosZec.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace ProyectosZec.Administration {
}
declare namespace ProyectosZec.Administration {
}
declare namespace ProyectosZec.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace ProyectosZec.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace ProyectosZec.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace ProyectosZec.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace ProyectosZec.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace ProyectosZec.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace ProyectosZec.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace ProyectosZec.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace ProyectosZec.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace ProyectosZec.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace ProyectosZec.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace ProyectosZec.Administration {
}
declare namespace ProyectosZec.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace ProyectosZec.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace ProyectosZec.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace ProyectosZec.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace ProyectosZec.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace ProyectosZec.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace ProyectosZec.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace ProyectosZec.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace ProyectosZec.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace ProyectosZec.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ProyectosZec.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace ProyectosZec.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace ProyectosZec.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace ProyectosZec.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace ProyectosZec.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace ProyectosZec.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace ProyectosZec.CuadroMandos {
}
declare namespace ProyectosZec.CuadroMandos {
    interface CapitalForm {
        Capital: Serenity.StringEditor;
    }
    class CapitalForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    interface CapitalRow {
        CapitalId?: number;
        Capital?: string;
    }
    namespace CapitalRow {
        const idProperty = "CapitalId";
        const nameProperty = "Capital";
        const localTextPrefix = "CuadroMandos.Capital";
        const lookupKey = "CuadroMandos.Capital";
        function getLookup(): Q.Lookup<CapitalRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CapitalId = "CapitalId",
            Capital = "Capital"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
    namespace CapitalService {
        const baseUrl = "CuadroMandos/Capital";
        function Create(request: Serenity.SaveRequest<CapitalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CapitalRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CapitalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CapitalRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CuadroMandos/Capital/Create",
            Update = "CuadroMandos/Capital/Update",
            Delete = "CuadroMandos/Capital/Delete",
            Retrieve = "CuadroMandos/Capital/Retrieve",
            List = "CuadroMandos/Capital/List"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
}
declare namespace ProyectosZec.CuadroMandos {
    interface EstadosForm {
        Estado: Serenity.StringEditor;
    }
    class EstadosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    interface EstadosRow {
        EstadoId?: number;
        Estado?: string;
    }
    namespace EstadosRow {
        const idProperty = "EstadoId";
        const nameProperty = "Estado";
        const localTextPrefix = "CuadroMandos.Estados";
        const lookupKey = "CuadroMandos.Estados";
        function getLookup(): Q.Lookup<EstadosRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            EstadoId = "EstadoId",
            Estado = "Estado"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
    namespace EstadosService {
        const baseUrl = "CuadroMandos/Estados";
        function Create(request: Serenity.SaveRequest<EstadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EstadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EstadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EstadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CuadroMandos/Estados/Create",
            Update = "CuadroMandos/Estados/Update",
            Delete = "CuadroMandos/Estados/Delete",
            Retrieve = "CuadroMandos/Estados/Retrieve",
            List = "CuadroMandos/Estados/List"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
}
declare namespace ProyectosZec.CuadroMandos {
    interface IslasForm {
        NombreIsla: Serenity.StringEditor;
        Isla: Serenity.StringEditor;
    }
    class IslasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    interface IslasRow {
        IslaId?: number;
        NombreIsla?: string;
        Isla?: string;
    }
    namespace IslasRow {
        const idProperty = "IslaId";
        const nameProperty = "NombreIsla";
        const localTextPrefix = "CuadroMandos.Islas";
        const lookupKey = "CuadroMandos.Islas";
        function getLookup(): Q.Lookup<IslasRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            IslaId = "IslaId",
            NombreIsla = "NombreIsla",
            Isla = "Isla"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
    namespace IslasService {
        const baseUrl = "CuadroMandos/Islas";
        function Create(request: Serenity.SaveRequest<IslasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<IslasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<IslasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<IslasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CuadroMandos/Islas/Create",
            Update = "CuadroMandos/Islas/Update",
            Delete = "CuadroMandos/Islas/Delete",
            Retrieve = "CuadroMandos/Islas/Retrieve",
            List = "CuadroMandos/Islas/List"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
}
declare namespace ProyectosZec.CuadroMandos {
    interface PrescriptorinversorForm {
        PrescriptorInversor: Serenity.StringEditor;
    }
    class PrescriptorinversorForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    interface PrescriptorinversorRow {
        PrescriptorInversorId?: number;
        PrescriptorInversor?: string;
    }
    namespace PrescriptorinversorRow {
        const idProperty = "PrescriptorInversorId";
        const nameProperty = "PrescriptorInversor";
        const localTextPrefix = "CuadroMandos.Prescriptorinversor";
        const lookupKey = "CuadroMandos.Prescriptorinversor";
        function getLookup(): Q.Lookup<PrescriptorinversorRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PrescriptorInversorId = "PrescriptorInversorId",
            PrescriptorInversor = "PrescriptorInversor"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
    namespace PrescriptorinversorService {
        const baseUrl = "CuadroMandos/Prescriptorinversor";
        function Create(request: Serenity.SaveRequest<PrescriptorinversorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PrescriptorinversorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PrescriptorinversorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PrescriptorinversorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CuadroMandos/Prescriptorinversor/Create",
            Update = "CuadroMandos/Prescriptorinversor/Update",
            Delete = "CuadroMandos/Prescriptorinversor/Delete",
            Retrieve = "CuadroMandos/Prescriptorinversor/Retrieve",
            List = "CuadroMandos/Prescriptorinversor/List"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
}
declare namespace ProyectosZec.CuadroMandos {
    interface PresentadasForm {
        Denominacion: Serenity.StringEditor;
        TecnicoId: Serenity.LookupEditor;
        SubsectorId: Serenity.LookupEditor;
        IslaId: Serenity.LookupEditor;
        CapitalId: Serenity.LookupEditor;
        Captacion: Serenity.StringEditor;
        PrescriptorInversorId: Serenity.LookupEditor;
        Descripcion: Serenity.StringEditor;
        Contacto: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        EstadoId: Serenity.LookupEditor;
        FechaInicio: Serenity.DateEditor;
        FechaPresentacion: Serenity.DateEditor;
        FechaInscripcion: Serenity.DateEditor;
        FechaAutorizacion: Serenity.DateEditor;
        FechaAmpliacion: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        Empleos: Serenity.IntegerEditor;
        Inversion: Serenity.IntegerEditor;
        EmpleoReal: Serenity.IntegerEditor;
        Expediente: Serenity.StringEditor;
        Nace: Serenity.StringEditor;
        InversionReal: Serenity.IntegerEditor;
    }
    class PresentadasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    namespace PresentadasService {
        const baseUrl = "CuadroMandos/Presentadas";
        function Create(request: Serenity.SaveRequest<ProyectosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProyectosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProyectosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProyectosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CuadroMandos/Presentadas/Create",
            Update = "CuadroMandos/Presentadas/Update",
            Delete = "CuadroMandos/Presentadas/Delete",
            Retrieve = "CuadroMandos/Presentadas/Retrieve",
            List = "CuadroMandos/Presentadas/List"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
}
declare namespace ProyectosZec.CuadroMandos {
    interface ProyectosForm {
        Denominacion: Serenity.StringEditor;
        TecnicoId: Serenity.LookupEditor;
        SectorId: Serenity.LookupEditor;
        SubsectorId: Serenity.LookupEditor;
        IslaId: Serenity.LookupEditor;
        CapitalId: Serenity.LookupEditor;
        Captacion: Serenity.StringEditor;
        Empleos: Serenity.IntegerEditor;
        Inversion: Serenity.IntegerEditor;
        EmpleoReal: Serenity.IntegerEditor;
        InversionReal: Serenity.IntegerEditor;
        PrescriptorInversorId: Serenity.LookupEditor;
        Expediente: Serenity.StringEditor;
        Nace: Serenity.StringEditor;
        EstadoId: Serenity.LookupEditor;
        Descripcion: Serenity.TextAreaEditor;
        Contacto: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        FechaInicio: Serenity.DateEditor;
        FechaPresentacion: Serenity.DateEditor;
        FechaInscripcion: Serenity.DateEditor;
        FechaAutorizacion: Serenity.DateEditor;
        FechaAmpliacion: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
    }
    class ProyectosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    interface ProyectosRow {
        ProyectoId?: number;
        Denominacion?: string;
        TecnicoId?: number;
        SubsectorId?: number;
        SectorId?: number;
        IslaId?: number;
        CapitalId?: number;
        Captacion?: string;
        PrescriptorInversorId?: number;
        Descripcion?: string;
        Contacto?: string;
        Telefono?: string;
        Email?: string;
        EstadoId?: number;
        FechaInicio?: string;
        FechaPresentacion?: string;
        FechaInscripcion?: string;
        FechaAutorizacion?: string;
        FechaAmpliacion?: string;
        FechaBaja?: string;
        Empleos?: number;
        Inversion?: number;
        EmpleoReal?: number;
        InversionReal?: number;
        Tecnico?: string;
        NombreTecnico?: string;
        Nace?: string;
        Expediente?: string;
        SubsectorSectorId?: number;
        Subsector?: string;
        Sector?: string;
        Isla?: string;
        Capital?: string;
        PrescriptorInversor?: string;
        Estado?: string;
    }
    namespace ProyectosRow {
        const idProperty = "ProyectoId";
        const nameProperty = "Denominacion";
        const localTextPrefix = "CuadroMandos.Proyectos";
        const lookupKey = "CuadroMandos.Proyectos";
        function getLookup(): Q.Lookup<ProyectosRow>;
        const deletePermission = "CuadroMandos:Delete";
        const insertPermission = "CuadroMandos:Insert";
        const readPermission = "CuadroMandos:Read";
        const updatePermission = "CuadroMandos:Modify";
        const enum Fields {
            ProyectoId = "ProyectoId",
            Denominacion = "Denominacion",
            TecnicoId = "TecnicoId",
            SubsectorId = "SubsectorId",
            SectorId = "SectorId",
            IslaId = "IslaId",
            CapitalId = "CapitalId",
            Captacion = "Captacion",
            PrescriptorInversorId = "PrescriptorInversorId",
            Descripcion = "Descripcion",
            Contacto = "Contacto",
            Telefono = "Telefono",
            Email = "Email",
            EstadoId = "EstadoId",
            FechaInicio = "FechaInicio",
            FechaPresentacion = "FechaPresentacion",
            FechaInscripcion = "FechaInscripcion",
            FechaAutorizacion = "FechaAutorizacion",
            FechaAmpliacion = "FechaAmpliacion",
            FechaBaja = "FechaBaja",
            Empleos = "Empleos",
            Inversion = "Inversion",
            EmpleoReal = "EmpleoReal",
            InversionReal = "InversionReal",
            Tecnico = "Tecnico",
            NombreTecnico = "NombreTecnico",
            Nace = "Nace",
            Expediente = "Expediente",
            SubsectorSectorId = "SubsectorSectorId",
            Subsector = "Subsector",
            Sector = "Sector",
            Isla = "Isla",
            Capital = "Capital",
            PrescriptorInversor = "PrescriptorInversor",
            Estado = "Estado"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
    namespace ProyectosService {
        const baseUrl = "CuadroMandos/Proyectos";
        function Create(request: Serenity.SaveRequest<ProyectosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProyectosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProyectosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProyectosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CuadroMandos/Proyectos/Create",
            Update = "CuadroMandos/Proyectos/Update",
            Delete = "CuadroMandos/Proyectos/Delete",
            Retrieve = "CuadroMandos/Proyectos/Retrieve",
            List = "CuadroMandos/Proyectos/List"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
}
declare namespace ProyectosZec.CuadroMandos {
    interface SectoresForm {
        Sector: Serenity.StringEditor;
    }
    class SectoresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    interface SectoresRow {
        SectorId?: number;
        Sector?: string;
    }
    namespace SectoresRow {
        const idProperty = "SectorId";
        const nameProperty = "Sector";
        const localTextPrefix = "CuadroMandos.Sectores";
        const lookupKey = "CuadroMandos.Sectores";
        function getLookup(): Q.Lookup<SectoresRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SectorId = "SectorId",
            Sector = "Sector"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
    namespace SectoresService {
        const baseUrl = "CuadroMandos/Sectores";
        function Create(request: Serenity.SaveRequest<SectoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SectoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SectoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SectoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CuadroMandos/Sectores/Create",
            Update = "CuadroMandos/Sectores/Update",
            Delete = "CuadroMandos/Sectores/Delete",
            Retrieve = "CuadroMandos/Sectores/Retrieve",
            List = "CuadroMandos/Sectores/List"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
}
declare namespace ProyectosZec.CuadroMandos {
    interface SubsectoresForm {
        SectorId: Serenity.IntegerEditor;
        Subsector: Serenity.StringEditor;
    }
    class SubsectoresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    interface SubsectoresRow {
        SubsectorId?: number;
        SectorId?: number;
        Sector?: string;
        Subsector?: string;
    }
    namespace SubsectoresRow {
        const idProperty = "SubsectorId";
        const nameProperty = "Subsector";
        const localTextPrefix = "CuadroMandos.Subsectores";
        const lookupKey = "CuadroMandos.Subsectores";
        function getLookup(): Q.Lookup<SubsectoresRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SubsectorId = "SubsectorId",
            SectorId = "SectorId",
            Sector = "Sector",
            Subsector = "Subsector"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
    namespace SubsectoresService {
        const baseUrl = "CuadroMandos/Subsectores";
        function Create(request: Serenity.SaveRequest<SubsectoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SubsectoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SubsectoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SubsectoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CuadroMandos/Subsectores/Create",
            Update = "CuadroMandos/Subsectores/Update",
            Delete = "CuadroMandos/Subsectores/Delete",
            Retrieve = "CuadroMandos/Subsectores/Retrieve",
            List = "CuadroMandos/Subsectores/List"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
}
declare namespace ProyectosZec.CuadroMandos {
    interface TecnicosForm {
        NombreTecnico: Serenity.StringEditor;
        Tecnico: Serenity.StringEditor;
    }
    class TecnicosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    interface TecnicosRow {
        TecnicoId?: number;
        NombreTecnico?: string;
        Tecnico?: string;
    }
    namespace TecnicosRow {
        const idProperty = "TecnicoId";
        const nameProperty = "NombreTecnico";
        const localTextPrefix = "CuadroMandos.Tecnicos";
        const lookupKey = "CuadroMandos.Tecnicos";
        function getLookup(): Q.Lookup<TecnicosRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            TecnicoId = "TecnicoId",
            NombreTecnico = "NombreTecnico",
            Tecnico = "Tecnico"
        }
    }
}
declare namespace ProyectosZec.CuadroMandos {
    namespace TecnicosService {
        const baseUrl = "CuadroMandos/Tecnicos";
        function Create(request: Serenity.SaveRequest<TecnicosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TecnicosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TecnicosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TecnicosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CuadroMandos/Tecnicos/Create",
            Update = "CuadroMandos/Tecnicos/Update",
            Delete = "CuadroMandos/Tecnicos/Delete",
            Retrieve = "CuadroMandos/Tecnicos/Retrieve",
            List = "CuadroMandos/Tecnicos/List"
        }
    }
}
declare namespace ProyectosZec {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace ProyectosZec {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace ProyectosZec {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace ProyectosZec {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace ProyectosZec.Inmovilizado {
}
declare namespace ProyectosZec.Inmovilizado {
    interface InmovilizadosForm {
        Codigo: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        Ubicacion: Serenity.StringEditor;
        NumeroSerie: Serenity.StringEditor;
        TipoInmovilizadoId: Serenity.LookupEditor;
        SubTipoInmovilizadoId: Serenity.LookupEditor;
        Pg: Serenity.StringEditor;
        SedeId: Serenity.LookupEditor;
        ProveedorId: Serenity.LookupEditor;
        FechaCompra: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        Valor: Serenity.DecimalEditor;
        Amortizacion: Serenity.IntegerEditor;
        Garantia: Serenity.IntegerEditor;
        Factura: Serenity.StringEditor;
        GalleryImages: Serenity.MultipleImageUploadEditor;
        Files: Serenity.MultipleImageUploadEditor;
    }
    class InmovilizadosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Inmovilizado {
    interface InmovilizadosRow {
        InmovilizadoId?: number;
        Ubicacion?: string;
        Codigo?: string;
        Pg?: string;
        Descripcion?: string;
        NumeroSerie?: string;
        SubTipoInmovilizadoId?: number;
        TipoInmovilizadoId?: number;
        SedeId?: number;
        ProveedorId?: number;
        FechaCompra?: string;
        FechaBaja?: string;
        Valor?: number;
        Amortizacion?: number;
        Garantia?: number;
        Factura?: string;
        GalleryImages?: string;
        Files?: string;
        SubTipo?: string;
        Sede?: string;
        Tipo?: string;
        Proveedor?: string;
        ValorResidual?: number;
    }
    namespace InmovilizadosRow {
        const idProperty = "InmovilizadoId";
        const nameProperty = "Descripcion";
        const localTextPrefix = "Inmovilizado.Inmovilizados";
        const deletePermission = "Inmovilizado:Modify";
        const insertPermission = "Inmovilizado:Modify";
        const readPermission = "Inmovilizado:Read";
        const updatePermission = "Inmovilizado:Modify";
        const enum Fields {
            InmovilizadoId = "InmovilizadoId",
            Ubicacion = "Ubicacion",
            Codigo = "Codigo",
            Pg = "Pg",
            Descripcion = "Descripcion",
            NumeroSerie = "NumeroSerie",
            SubTipoInmovilizadoId = "SubTipoInmovilizadoId",
            TipoInmovilizadoId = "TipoInmovilizadoId",
            SedeId = "SedeId",
            ProveedorId = "ProveedorId",
            FechaCompra = "FechaCompra",
            FechaBaja = "FechaBaja",
            Valor = "Valor",
            Amortizacion = "Amortizacion",
            Garantia = "Garantia",
            Factura = "Factura",
            GalleryImages = "GalleryImages",
            Files = "Files",
            SubTipo = "SubTipo",
            Sede = "Sede",
            Tipo = "Tipo",
            Proveedor = "Proveedor",
            ValorResidual = "ValorResidual"
        }
    }
}
declare namespace ProyectosZec.Inmovilizado {
    namespace InmovilizadosService {
        const baseUrl = "Inmovilizado/Inmovilizados";
        function Create(request: Serenity.SaveRequest<InmovilizadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InmovilizadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InmovilizadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InmovilizadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inmovilizado/Inmovilizados/Create",
            Update = "Inmovilizado/Inmovilizados/Update",
            Delete = "Inmovilizado/Inmovilizados/Delete",
            Retrieve = "Inmovilizado/Inmovilizados/Retrieve",
            List = "Inmovilizado/Inmovilizados/List"
        }
    }
}
declare namespace ProyectosZec.Inmovilizado {
}
declare namespace ProyectosZec.Inmovilizado {
    interface ProveedoresForm {
        Proveedor: Serenity.StringEditor;
        Contacto: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }
    class ProveedoresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Inmovilizado {
    interface ProveedoresRow {
        ProveedorId?: number;
        Proveedor?: string;
        Contacto?: string;
        Telefono?: string;
        Email?: string;
    }
    namespace ProveedoresRow {
        const idProperty = "ProveedorId";
        const nameProperty = "Proveedor";
        const localTextPrefix = "Inmovilizado.Proveedores";
        const lookupKey = "Inmovilizado.Proveedores";
        function getLookup(): Q.Lookup<ProveedoresRow>;
        const deletePermission = "Inmovilizado:Modify";
        const insertPermission = "Inmovilizado:Modify";
        const readPermission = "Inmovilizado:Read";
        const updatePermission = "Inmovilizado:Modify";
        const enum Fields {
            ProveedorId = "ProveedorId",
            Proveedor = "Proveedor",
            Contacto = "Contacto",
            Telefono = "Telefono",
            Email = "Email"
        }
    }
}
declare namespace ProyectosZec.Inmovilizado {
    namespace ProveedoresService {
        const baseUrl = "Inmovilizado/Proveedores";
        function Create(request: Serenity.SaveRequest<ProveedoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProveedoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProveedoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProveedoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inmovilizado/Proveedores/Create",
            Update = "Inmovilizado/Proveedores/Update",
            Delete = "Inmovilizado/Proveedores/Delete",
            Retrieve = "Inmovilizado/Proveedores/Retrieve",
            List = "Inmovilizado/Proveedores/List"
        }
    }
}
declare namespace ProyectosZec.Inmovilizado {
}
declare namespace ProyectosZec.Inmovilizado {
    interface SubtiposinmovilizadoForm {
        TipoInmovilizadoId: Serenity.LookupEditor;
        SubTipo: Serenity.StringEditor;
    }
    class SubtiposinmovilizadoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Inmovilizado {
    interface SubtiposinmovilizadoRow {
        SubTipoInmovilizadoId?: number;
        SubTipo?: string;
        TipoInmovilizadoId?: number;
        TipoInmovilizadoTipo?: string;
    }
    namespace SubtiposinmovilizadoRow {
        const idProperty = "SubTipoInmovilizadoId";
        const nameProperty = "SubTipo";
        const localTextPrefix = "Inmovilizado.Subtiposinmovilizado";
        const lookupKey = "Inmovilizado.Subtiposinmovilizado";
        function getLookup(): Q.Lookup<SubtiposinmovilizadoRow>;
        const deletePermission = "Inmovilizado:Modify";
        const insertPermission = "Inmovilizado:Modify";
        const readPermission = "Inmovilizado:Read";
        const updatePermission = "Inmovilizado:Modify";
        const enum Fields {
            SubTipoInmovilizadoId = "SubTipoInmovilizadoId",
            SubTipo = "SubTipo",
            TipoInmovilizadoId = "TipoInmovilizadoId",
            TipoInmovilizadoTipo = "TipoInmovilizadoTipo"
        }
    }
}
declare namespace ProyectosZec.Inmovilizado {
    namespace SubtiposinmovilizadoService {
        const baseUrl = "Inmovilizado/Subtiposinmovilizado";
        function Create(request: Serenity.SaveRequest<SubtiposinmovilizadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SubtiposinmovilizadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SubtiposinmovilizadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SubtiposinmovilizadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inmovilizado/Subtiposinmovilizado/Create",
            Update = "Inmovilizado/Subtiposinmovilizado/Update",
            Delete = "Inmovilizado/Subtiposinmovilizado/Delete",
            Retrieve = "Inmovilizado/Subtiposinmovilizado/Retrieve",
            List = "Inmovilizado/Subtiposinmovilizado/List"
        }
    }
}
declare namespace ProyectosZec.Inmovilizado {
}
declare namespace ProyectosZec.Inmovilizado {
    interface TiposinmovilizadoForm {
        Tipo: Serenity.StringEditor;
    }
    class TiposinmovilizadoForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Inmovilizado {
    interface TiposinmovilizadoRow {
        TipoInmovilizadoId?: number;
        Tipo?: string;
    }
    namespace TiposinmovilizadoRow {
        const idProperty = "TipoInmovilizadoId";
        const nameProperty = "Tipo";
        const localTextPrefix = "Inmovilizado.Tiposinmovilizado";
        const lookupKey = "Inmovilizado.Tiposinmovilizado";
        function getLookup(): Q.Lookup<TiposinmovilizadoRow>;
        const deletePermission = "Inmovilizado:General";
        const insertPermission = "Inmovilizado:General";
        const readPermission = "Inmovilizado:General";
        const updatePermission = "Inmovilizado:General";
        const enum Fields {
            TipoInmovilizadoId = "TipoInmovilizadoId",
            Tipo = "Tipo"
        }
    }
}
declare namespace ProyectosZec.Inmovilizado {
    namespace TiposinmovilizadoService {
        const baseUrl = "Inmovilizado/Tiposinmovilizado";
        function Create(request: Serenity.SaveRequest<TiposinmovilizadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposinmovilizadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposinmovilizadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposinmovilizadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inmovilizado/Tiposinmovilizado/Create",
            Update = "Inmovilizado/Tiposinmovilizado/Update",
            Delete = "Inmovilizado/Tiposinmovilizado/Delete",
            Retrieve = "Inmovilizado/Tiposinmovilizado/Retrieve",
            List = "Inmovilizado/Tiposinmovilizado/List"
        }
    }
}
declare namespace ProyectosZec.Intranet {
}
declare namespace ProyectosZec.Intranet {
    interface DepartamentosForm {
        Departamento: Serenity.StringEditor;
    }
    class DepartamentosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Intranet {
    interface DepartamentosRow {
        DepartamentoId?: number;
        Departamento?: string;
    }
    namespace DepartamentosRow {
        const idProperty = "DepartamentoId";
        const nameProperty = "Departamento";
        const localTextPrefix = "Intranet.Departamentos";
        const lookupKey = "Intranet.Departamentos";
        function getLookup(): Q.Lookup<DepartamentosRow>;
        const deletePermission = "Telefonos:Modify";
        const insertPermission = "Telefonos:Modify";
        const readPermission = "Telefonos:Read";
        const updatePermission = "Telefonos:Modify";
        const enum Fields {
            DepartamentoId = "DepartamentoId",
            Departamento = "Departamento"
        }
    }
}
declare namespace ProyectosZec.Intranet {
    namespace DepartamentosService {
        const baseUrl = "Intranet/Departamentos";
        function Create(request: Serenity.SaveRequest<DepartamentosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DepartamentosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DepartamentosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DepartamentosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Intranet/Departamentos/Create",
            Update = "Intranet/Departamentos/Update",
            Delete = "Intranet/Departamentos/Delete",
            Retrieve = "Intranet/Departamentos/Retrieve",
            List = "Intranet/Departamentos/List"
        }
    }
}
declare namespace ProyectosZec.Intranet {
}
declare namespace ProyectosZec.Intranet {
    interface SedesForm {
        Sede: Serenity.StringEditor;
    }
    class SedesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Intranet {
    interface SedesRow {
        SedeId?: number;
        Sede?: string;
    }
    namespace SedesRow {
        const idProperty = "SedeId";
        const nameProperty = "Sede";
        const localTextPrefix = "Intranet.Sedes";
        const lookupKey = "Intranet.Sedes";
        function getLookup(): Q.Lookup<SedesRow>;
        const deletePermission = "Telefonos:Modify";
        const insertPermission = "Telefonos:Modify";
        const readPermission = "Telefonos:Read";
        const updatePermission = "Telefonos:Modify";
        const enum Fields {
            SedeId = "SedeId",
            Sede = "Sede"
        }
    }
}
declare namespace ProyectosZec.Intranet {
    namespace SedesService {
        const baseUrl = "Intranet/Sedes";
        function Create(request: Serenity.SaveRequest<SedesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SedesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SedesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SedesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Intranet/Sedes/Create",
            Update = "Intranet/Sedes/Update",
            Delete = "Intranet/Sedes/Delete",
            Retrieve = "Intranet/Sedes/Retrieve",
            List = "Intranet/Sedes/List"
        }
    }
}
declare namespace ProyectosZec.Intranet {
}
declare namespace ProyectosZec.Intranet {
    interface TelefonosForm {
        SedeId: Serenity.LookupEditor;
        DepartamentoId: Serenity.LookupEditor;
        Nombre: Serenity.StringEditor;
        ExtCorta: Serenity.StringEditor;
        Fijo: Serenity.StringEditor;
        Movil: Serenity.StringEditor;
        CortoMovil: Serenity.StringEditor;
        Contrato: Serenity.StringEditor;
        PUK: Serenity.StringEditor;
        Multisim: Serenity.StringEditor;
    }
    class TelefonosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Intranet {
    interface TelefonosRow {
        TelefonoId?: number;
        SedeId?: number;
        DepartamentoId?: number;
        Nombre?: string;
        ExtCorta?: string;
        Fijo?: string;
        Movil?: string;
        CortoMovil?: string;
        Contrato?: string;
        Sede?: string;
        Departamento?: string;
        PUK?: string;
        Multisim?: string;
    }
    namespace TelefonosRow {
        const idProperty = "TelefonoId";
        const nameProperty = "Nombre";
        const localTextPrefix = "Intranet.Telefonos";
        const lookupKey = "Telefonos.Telefonos";
        function getLookup(): Q.Lookup<TelefonosRow>;
        const deletePermission = "Telefonos:Delete";
        const insertPermission = "Telefonos:Insert";
        const readPermission = "Telefonos:Read";
        const updatePermission = "Telefonos:Modify";
        const enum Fields {
            TelefonoId = "TelefonoId",
            SedeId = "SedeId",
            DepartamentoId = "DepartamentoId",
            Nombre = "Nombre",
            ExtCorta = "ExtCorta",
            Fijo = "Fijo",
            Movil = "Movil",
            CortoMovil = "CortoMovil",
            Contrato = "Contrato",
            Sede = "Sede",
            Departamento = "Departamento",
            PUK = "PUK",
            Multisim = "Multisim"
        }
    }
}
declare namespace ProyectosZec.Intranet {
    namespace TelefonosService {
        const baseUrl = "Intranet/Telefonos";
        function Create(request: Serenity.SaveRequest<TelefonosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TelefonosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TelefonosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TelefonosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Intranet/Telefonos/Create",
            Update = "Intranet/Telefonos/Update",
            Delete = "Intranet/Telefonos/Delete",
            Retrieve = "Intranet/Telefonos/Retrieve",
            List = "Intranet/Telefonos/List"
        }
    }
}
declare namespace ProyectosZec.Kairos {
}
declare namespace ProyectosZec.Kairos {
    interface DepartamentosForm {
        CodigoCliente: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        FechaBorrado: Serenity.DateEditor;
        SedeId: Serenity.IntegerEditor;
    }
    class DepartamentosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Kairos {
    interface DepartamentosRow {
        Id?: number;
        CodigoCliente?: number;
        Codigo?: string;
        Descripcion?: string;
        FechaBorrado?: string;
        SedeId?: number;
    }
    namespace DepartamentosRow {
        const idProperty = "Id";
        const nameProperty = "Codigo";
        const localTextPrefix = "Kairos.Departamentos";
        const deletePermission = "Kairos:General";
        const insertPermission = "Kairos:General";
        const readPermission = "Kairos:General";
        const updatePermission = "Kairos:General";
        const enum Fields {
            Id = "Id",
            CodigoCliente = "CodigoCliente",
            Codigo = "Codigo",
            Descripcion = "Descripcion",
            FechaBorrado = "FechaBorrado",
            SedeId = "SedeId"
        }
    }
}
declare namespace ProyectosZec.Kairos {
    namespace DepartamentosService {
        const baseUrl = "Kairos/Departamentos";
        function Create(request: Serenity.SaveRequest<DepartamentosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DepartamentosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DepartamentosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DepartamentosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Kairos/Departamentos/Create",
            Update = "Kairos/Departamentos/Update",
            Delete = "Kairos/Departamentos/Delete",
            Retrieve = "Kairos/Departamentos/Retrieve",
            List = "Kairos/Departamentos/List"
        }
    }
}
declare namespace ProyectosZec.Kairos {
}
declare namespace ProyectosZec.Kairos {
    interface DiarioForm {
        IdDepartamento: Serenity.StringEditor;
        Empleado: Serenity.StringEditor;
        Fecha: Serenity.DateEditor;
        Entrada: Serenity.DateEditor;
        HoraEntrada: Serenity.StringEditor;
        Salida: Serenity.DateEditor;
        HoraSalida: Serenity.StringEditor;
    }
    class DiarioForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Kairos {
    interface DiarioRow {
        Id?: number;
        IdEmpleado?: number;
        IdDepartamento?: number;
        Empleado?: string;
        Fecha?: string;
        Entrada?: string;
        HoraEntrada?: string;
        Salida?: string;
        HoraSalida?: string;
        SedeId?: number;
        Sede?: string;
    }
    namespace DiarioRow {
        const idProperty = "Id";
        const nameProperty = "Empleado";
        const localTextPrefix = "Kairos.Diario";
        const deletePermission = "Kairos:Delete";
        const insertPermission = "Kairos:Insert";
        const readPermission = "Kairos:Read";
        const updatePermission = "Kairos:Modify";
        const enum Fields {
            Id = "Id",
            IdEmpleado = "IdEmpleado",
            IdDepartamento = "IdDepartamento",
            Empleado = "Empleado",
            Fecha = "Fecha",
            Entrada = "Entrada",
            HoraEntrada = "HoraEntrada",
            Salida = "Salida",
            HoraSalida = "HoraSalida",
            SedeId = "SedeId",
            Sede = "Sede"
        }
    }
}
declare namespace ProyectosZec.Kairos {
    namespace DiarioService {
        const baseUrl = "Kairos/Diario";
        function Create(request: Serenity.SaveRequest<DiarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DiarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DiarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DiarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Kairos/Diario/Create",
            Update = "Kairos/Diario/Update",
            Delete = "Kairos/Diario/Delete",
            Retrieve = "Kairos/Diario/Retrieve",
            List = "Kairos/Diario/List"
        }
    }
}
declare namespace ProyectosZec.Kairos {
}
declare namespace ProyectosZec.Kairos {
    interface FichajesForm {
        IdEmpleado: Serenity.StringEditor;
        CodigoCliente: Serenity.StringEditor;
        FechaHora: Serenity.DateEditor;
        Observaciones: Serenity.StringEditor;
        GpsPosicionLatitud: Serenity.StringEditor;
        GpsPosicionLongitud: Serenity.StringEditor;
        GpsFechaHora: Serenity.DateEditor;
        GpsProveedor: Serenity.StringEditor;
        GpsAltitud: Serenity.StringEditor;
        IdTerminal: Serenity.StringEditor;
        IdDispositivoModelo: Serenity.StringEditor;
        Modificado: Serenity.DateEditor;
        Anulado: Serenity.DateEditor;
        Validado: Serenity.IntegerEditor;
        TipoDispositivo: Serenity.IntegerEditor;
        EntradaSalida: Serenity.LookupEditor;
        IdEmpresa: Serenity.StringEditor;
    }
    class FichajesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Kairos {
    interface FichajesRow {
        Id?: number;
        IdEmpleado?: number;
        CodigoCliente?: number;
        FechaHora?: string;
        Observaciones?: string;
        GpsPosicionLatitud?: string;
        GpsPosicionLongitud?: string;
        GpsFechaHora?: string;
        GpsProveedor?: string;
        GpsAltitud?: string;
        IdTerminal?: number;
        IdDispositivoModelo?: number;
        Modificado?: string;
        Anulado?: string;
        Validado?: number;
        TipoDispositivo?: number;
        EntradaSalida?: string;
        IdEmpresa?: number;
        IdTerminalCodigoCliente?: number;
        IdTerminalCodigo?: string;
        IdTerminalDescripcion?: string;
        IdTerminalTipoDispositivo?: number;
        IdTerminalIdDepartamento?: number;
        IdTerminalFechaActualizacion?: string;
        IdTerminalFechaBorrado?: string;
        IdTerminalDispositivoHuellaDactilar?: boolean;
        IdTerminalDispositivoHuellaDactilarNumero?: number;
        IdTerminalDispositivoHuellaDactilarIp?: string;
        IdTerminalDispositivoHuellaDactilarMarca?: string;
        IdTerminalDispositivoHuellaDactilarModelo?: string;
        IdTerminalDispositivoHuellaDactilarFirmware?: string;
        IdTerminalDispositivoHuellaDactilarPuerto?: string;
        IdTerminalDispositivoHuellaDactilarDns?: boolean;
        IdDispositivoModeloCodigoCliente?: number;
        IdDispositivoModeloFabricante?: string;
        IdDispositivoModeloMarca?: string;
        IdDispositivoModeloModelo?: string;
        IdDispositivoModeloMac?: string;
        IdDispositivoModeloFechaBorrado?: string;
        Empleado?: string;
        Hora?: string;
        Fecha?: string;
        DptoId?: number;
        SedeId?: number;
        Sede?: string;
        Dispositivo?: string;
        Fichaje?: string;
    }
    namespace FichajesRow {
        const idProperty = "Id";
        const nameProperty = "Observaciones";
        const localTextPrefix = "Kairos.Fichajes";
        const deletePermission = "Kairos:Delete";
        const insertPermission = "Kairos:Insert";
        const readPermission = "Kairos:Read";
        const updatePermission = "Kairos:Modify";
        const enum Fields {
            Id = "Id",
            IdEmpleado = "IdEmpleado",
            CodigoCliente = "CodigoCliente",
            FechaHora = "FechaHora",
            Observaciones = "Observaciones",
            GpsPosicionLatitud = "GpsPosicionLatitud",
            GpsPosicionLongitud = "GpsPosicionLongitud",
            GpsFechaHora = "GpsFechaHora",
            GpsProveedor = "GpsProveedor",
            GpsAltitud = "GpsAltitud",
            IdTerminal = "IdTerminal",
            IdDispositivoModelo = "IdDispositivoModelo",
            Modificado = "Modificado",
            Anulado = "Anulado",
            Validado = "Validado",
            TipoDispositivo = "TipoDispositivo",
            EntradaSalida = "EntradaSalida",
            IdEmpresa = "IdEmpresa",
            IdTerminalCodigoCliente = "IdTerminalCodigoCliente",
            IdTerminalCodigo = "IdTerminalCodigo",
            IdTerminalDescripcion = "IdTerminalDescripcion",
            IdTerminalTipoDispositivo = "IdTerminalTipoDispositivo",
            IdTerminalIdDepartamento = "IdTerminalIdDepartamento",
            IdTerminalFechaActualizacion = "IdTerminalFechaActualizacion",
            IdTerminalFechaBorrado = "IdTerminalFechaBorrado",
            IdTerminalDispositivoHuellaDactilar = "IdTerminalDispositivoHuellaDactilar",
            IdTerminalDispositivoHuellaDactilarNumero = "IdTerminalDispositivoHuellaDactilarNumero",
            IdTerminalDispositivoHuellaDactilarIp = "IdTerminalDispositivoHuellaDactilarIp",
            IdTerminalDispositivoHuellaDactilarMarca = "IdTerminalDispositivoHuellaDactilarMarca",
            IdTerminalDispositivoHuellaDactilarModelo = "IdTerminalDispositivoHuellaDactilarModelo",
            IdTerminalDispositivoHuellaDactilarFirmware = "IdTerminalDispositivoHuellaDactilarFirmware",
            IdTerminalDispositivoHuellaDactilarPuerto = "IdTerminalDispositivoHuellaDactilarPuerto",
            IdTerminalDispositivoHuellaDactilarDns = "IdTerminalDispositivoHuellaDactilarDns",
            IdDispositivoModeloCodigoCliente = "IdDispositivoModeloCodigoCliente",
            IdDispositivoModeloFabricante = "IdDispositivoModeloFabricante",
            IdDispositivoModeloMarca = "IdDispositivoModeloMarca",
            IdDispositivoModeloModelo = "IdDispositivoModeloModelo",
            IdDispositivoModeloMac = "IdDispositivoModeloMac",
            IdDispositivoModeloFechaBorrado = "IdDispositivoModeloFechaBorrado",
            Empleado = "Empleado",
            Hora = "Hora",
            Fecha = "Fecha",
            DptoId = "DptoId",
            SedeId = "SedeId",
            Sede = "Sede",
            Dispositivo = "Dispositivo",
            Fichaje = "Fichaje"
        }
    }
}
declare namespace ProyectosZec.Kairos {
    namespace FichajesService {
        const baseUrl = "Kairos/Fichajes";
        function Create(request: Serenity.SaveRequest<FichajesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FichajesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FichajesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FichajesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Kairos/Fichajes/Create",
            Update = "Kairos/Fichajes/Update",
            Delete = "Kairos/Fichajes/Delete",
            Retrieve = "Kairos/Fichajes/Retrieve",
            List = "Kairos/Fichajes/List"
        }
    }
}
declare namespace ProyectosZec.Kairos {
}
declare namespace ProyectosZec.Kairos {
    interface KrsEmpleadosForm {
        CodigoCliente: Serenity.StringEditor;
        Nombre: Serenity.StringEditor;
        CodigoValidacion: Serenity.StringEditor;
        FechaBaja: Serenity.DateEditor;
        Pin: Serenity.IntegerEditor;
        Tecnico: Serenity.BooleanEditor;
        UsoHorario: Serenity.StringEditor;
        SacarFotoFichaje: Serenity.BooleanEditor;
        FechaActualizacion: Serenity.DateEditor;
        FechaBorrado: Serenity.DateEditor;
        NumeroTarjetaFichaje: Serenity.StringEditor;
        IdDepartamento: Serenity.StringEditor;
        IdEmpresa: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        PermiteRecordatorio: Serenity.BooleanEditor;
        PermiteFichajeAutomatico: Serenity.BooleanEditor;
        IdEmpresaFichajeAutomatico: Serenity.StringEditor;
        ProgramaExternoIdEmpleado: Serenity.StringEditor;
        ProgramaExternoDescripcion: Serenity.StringEditor;
        IdHoraExtraCabecera: Serenity.StringEditor;
        ClaveAccesoWeb: Serenity.StringEditor;
        PermiteFichajeWeb: Serenity.BooleanEditor;
    }
    class KrsEmpleadosForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Kairos {
    interface KrsEmpleadosRow {
        Id?: number;
        CodigoCliente?: number;
        Nombre?: string;
        CodigoValidacion?: string;
        FechaBaja?: string;
        Pin?: number;
        Tecnico?: boolean;
        UsoHorario?: string;
        SacarFotoFichaje?: boolean;
        FechaActualizacion?: string;
        FechaBorrado?: string;
        NumeroTarjetaFichaje?: string;
        IdDepartamento?: number;
        IdEmpresa?: number;
        Email?: string;
        PermiteRecordatorio?: boolean;
        PermiteFichajeAutomatico?: boolean;
        IdEmpresaFichajeAutomatico?: number;
        ProgramaExternoIdEmpleado?: string;
        ProgramaExternoDescripcion?: string;
        IdHoraExtraCabecera?: number;
        ClaveAccesoWeb?: string;
        PermiteFichajeWeb?: boolean;
        IdHoraExtraCabeceraCodigoCliente?: number;
        IdHoraExtraCabeceraCodigo?: string;
        IdHoraExtraCabeceraDescripcion?: string;
        IdHoraExtraCabeceraFechaBorrado?: string;
    }
    namespace KrsEmpleadosRow {
        const idProperty = "Id";
        const nameProperty = "Nombre";
        const localTextPrefix = "Kairos.KrsEmpleados";
        const lookupKey = "Kairos.KrsEmpleados";
        function getLookup(): Q.Lookup<KrsEmpleadosRow>;
        const deletePermission = "Kairos:Delete";
        const insertPermission = "Kairos:Insert";
        const readPermission = "Kairos:Read";
        const updatePermission = "Kairos:Modify";
        const enum Fields {
            Id = "Id",
            CodigoCliente = "CodigoCliente",
            Nombre = "Nombre",
            CodigoValidacion = "CodigoValidacion",
            FechaBaja = "FechaBaja",
            Pin = "Pin",
            Tecnico = "Tecnico",
            UsoHorario = "UsoHorario",
            SacarFotoFichaje = "SacarFotoFichaje",
            FechaActualizacion = "FechaActualizacion",
            FechaBorrado = "FechaBorrado",
            NumeroTarjetaFichaje = "NumeroTarjetaFichaje",
            IdDepartamento = "IdDepartamento",
            IdEmpresa = "IdEmpresa",
            Email = "Email",
            PermiteRecordatorio = "PermiteRecordatorio",
            PermiteFichajeAutomatico = "PermiteFichajeAutomatico",
            IdEmpresaFichajeAutomatico = "IdEmpresaFichajeAutomatico",
            ProgramaExternoIdEmpleado = "ProgramaExternoIdEmpleado",
            ProgramaExternoDescripcion = "ProgramaExternoDescripcion",
            IdHoraExtraCabecera = "IdHoraExtraCabecera",
            ClaveAccesoWeb = "ClaveAccesoWeb",
            PermiteFichajeWeb = "PermiteFichajeWeb",
            IdHoraExtraCabeceraCodigoCliente = "IdHoraExtraCabeceraCodigoCliente",
            IdHoraExtraCabeceraCodigo = "IdHoraExtraCabeceraCodigo",
            IdHoraExtraCabeceraDescripcion = "IdHoraExtraCabeceraDescripcion",
            IdHoraExtraCabeceraFechaBorrado = "IdHoraExtraCabeceraFechaBorrado"
        }
    }
}
declare namespace ProyectosZec.Kairos {
    namespace KrsEmpleadosService {
        const baseUrl = "Kairos/KrsEmpleados";
        function Create(request: Serenity.SaveRequest<KrsEmpleadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<KrsEmpleadosRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<KrsEmpleadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<KrsEmpleadosRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Kairos/KrsEmpleados/Create",
            Update = "Kairos/KrsEmpleados/Update",
            Delete = "Kairos/KrsEmpleados/Delete",
            Retrieve = "Kairos/KrsEmpleados/Retrieve",
            List = "Kairos/KrsEmpleados/List"
        }
    }
}
declare namespace ProyectosZec.Kairos {
}
declare namespace ProyectosZec.Kairos {
    interface TiposFichajeForm {
        Tipo: Serenity.StringEditor;
    }
    class TiposFichajeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Kairos {
    interface TiposFichajeRow {
        Id?: string;
        Tipo?: string;
    }
    namespace TiposFichajeRow {
        const idProperty = "Id";
        const nameProperty = "Tipo";
        const localTextPrefix = "Kairos.TiposFichaje";
        const lookupKey = "Kairos.TiposFichaje";
        function getLookup(): Q.Lookup<TiposFichajeRow>;
        const deletePermission = "Kairos:Delete";
        const insertPermission = "Kairos:Insert";
        const readPermission = "Kairos:Read";
        const updatePermission = "Kairos:Modify";
        const enum Fields {
            Id = "Id",
            Tipo = "Tipo"
        }
    }
}
declare namespace ProyectosZec.Kairos {
    namespace TiposFichajeService {
        const baseUrl = "Kairos/TiposFichaje";
        function Create(request: Serenity.SaveRequest<TiposFichajeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TiposFichajeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TiposFichajeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TiposFichajeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Kairos/TiposFichaje/Create",
            Update = "Kairos/TiposFichaje/Update",
            Delete = "Kairos/TiposFichaje/Delete",
            Retrieve = "Kairos/TiposFichaje/Retrieve",
            List = "Kairos/TiposFichaje/List"
        }
    }
}
declare namespace ProyectosZec.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace ProyectosZec.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace ProyectosZec.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace ProyectosZec.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace ProyectosZec.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace ProyectosZec.Roezec {
}
declare namespace ProyectosZec.Roezec {
    interface ActividadesForm {
        IdNace: Serenity.LookupEditor;
        IdEmpresa: Serenity.LookupEditor;
    }
    class ActividadesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Roezec {
    interface ActividadesRow {
        Id?: number;
        IdNace?: number;
        IdEmpresa?: number;
        Actividad?: string;
        Empresa?: string;
        Cif?: string;
        Direccion?: string;
        Cp?: string;
        Poblacion?: string;
        Provincia?: string;
        Isla?: string;
        NotasMarginales?: string;
        AnyoExpediente?: number;
        NumExpediente?: number;
        Agencia?: number;
        Tecnico?: string;
        FormaJuridica?: string;
        Superficie?: number;
        ExentaAreaAcotada?: string;
        MotivosExencion?: string;
        ObjetivoEmpleo?: number;
        ObjetivoInversion?: number;
        ObservacionesEmpleo?: string;
        ObservacionesInversion?: string;
        PreEmpleo?: number;
        PreInversion?: number;
        TrasEmpleo?: number;
        TrasInversion?: number;
        FechaAlta?: string;
        FechaModificacion?: string;
        FechaBaja?: string;
        Situacion?: string;
        UsrAlta?: string;
        UsrModificacion?: string;
        UsrBaja?: string;
        Codigo?: string;
    }
    namespace ActividadesRow {
        const idProperty = "Id";
        const nameProperty = "Actividad";
        const localTextPrefix = "Roezec.Actividades";
        const deletePermission = "Roezec:Read";
        const insertPermission = "Roezec:Read";
        const readPermission = "Roezec:Read";
        const updatePermission = "Roezec:Read";
        const enum Fields {
            Id = "Id",
            IdNace = "IdNace",
            IdEmpresa = "IdEmpresa",
            Actividad = "Actividad",
            Empresa = "Empresa",
            Cif = "Cif",
            Direccion = "Direccion",
            Cp = "Cp",
            Poblacion = "Poblacion",
            Provincia = "Provincia",
            Isla = "Isla",
            NotasMarginales = "NotasMarginales",
            AnyoExpediente = "AnyoExpediente",
            NumExpediente = "NumExpediente",
            Agencia = "Agencia",
            Tecnico = "Tecnico",
            FormaJuridica = "FormaJuridica",
            Superficie = "Superficie",
            ExentaAreaAcotada = "ExentaAreaAcotada",
            MotivosExencion = "MotivosExencion",
            ObjetivoEmpleo = "ObjetivoEmpleo",
            ObjetivoInversion = "ObjetivoInversion",
            ObservacionesEmpleo = "ObservacionesEmpleo",
            ObservacionesInversion = "ObservacionesInversion",
            PreEmpleo = "PreEmpleo",
            PreInversion = "PreInversion",
            TrasEmpleo = "TrasEmpleo",
            TrasInversion = "TrasInversion",
            FechaAlta = "FechaAlta",
            FechaModificacion = "FechaModificacion",
            FechaBaja = "FechaBaja",
            Situacion = "Situacion",
            UsrAlta = "UsrAlta",
            UsrModificacion = "UsrModificacion",
            UsrBaja = "UsrBaja",
            Codigo = "Codigo"
        }
    }
}
declare namespace ProyectosZec.Roezec {
    namespace ActividadesService {
        const baseUrl = "Roezec/Actividades";
        function Create(request: Serenity.SaveRequest<ActividadesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ActividadesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActividadesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActividadesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Roezec/Actividades/Create",
            Update = "Roezec/Actividades/Update",
            Delete = "Roezec/Actividades/Delete",
            Retrieve = "Roezec/Actividades/Retrieve",
            List = "Roezec/Actividades/List"
        }
    }
}
declare namespace ProyectosZec.Roezec {
}
declare namespace ProyectosZec.Roezec {
    interface NacesForm {
        Nace: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Actividad: Serenity.StringEditor;
        FechaAlta: Serenity.DateEditor;
        UsrAlta: Serenity.StringEditor;
    }
    class NacesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Roezec {
    interface NacesRow {
        Id?: number;
        Nace?: string;
        Codigo?: string;
        Actividad?: string;
        FechaAlta?: string;
        UsrAlta?: string;
    }
    namespace NacesRow {
        const idProperty = "Id";
        const nameProperty = "Actividad";
        const localTextPrefix = "Roezec.Naces";
        const lookupKey = "Roezec.Naces";
        function getLookup(): Q.Lookup<NacesRow>;
        const deletePermission = "Roezec:Delete";
        const insertPermission = "Roezec:Insert";
        const readPermission = "Roezec:Read";
        const updatePermission = "Roezec:Modify";
        const enum Fields {
            Id = "Id",
            Nace = "Nace",
            Codigo = "Codigo",
            Actividad = "Actividad",
            FechaAlta = "FechaAlta",
            UsrAlta = "UsrAlta"
        }
    }
}
declare namespace ProyectosZec.Roezec {
    namespace NacesService {
        const baseUrl = "Roezec/Naces";
        function Create(request: Serenity.SaveRequest<NacesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NacesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NacesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NacesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Roezec/Naces/Create",
            Update = "Roezec/Naces/Update",
            Delete = "Roezec/Naces/Delete",
            Retrieve = "Roezec/Naces/Retrieve",
            List = "Roezec/Naces/List"
        }
    }
}
declare namespace ProyectosZec.Roezec {
}
declare namespace ProyectosZec.Roezec {
    interface RoezecEmpresasForm {
        DenominacionSocial: Serenity.StringEditor;
        Cif: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Cp: Serenity.StringEditor;
        Poblacion: Serenity.StringEditor;
        Provincia: Serenity.StringEditor;
        Isla: Serenity.StringEditor;
        NotasMarginales: Serenity.StringEditor;
        AnyoExpediente: Serenity.IntegerEditor;
        NumExpediente: Serenity.IntegerEditor;
        Agencia: Serenity.IntegerEditor;
        Tecnico: Serenity.StringEditor;
        FormaJuridica: Serenity.StringEditor;
        Superficie: Serenity.DecimalEditor;
        ExentaAreaAcotada: Serenity.StringEditor;
        MotivosExencion: Serenity.StringEditor;
        ObjetivoEmpleo: Serenity.DecimalEditor;
        ObjetivoInversion: Serenity.DecimalEditor;
        ObservacionesEmpleo: Serenity.StringEditor;
        ObservacionesInversion: Serenity.StringEditor;
        PreEmpleo: Serenity.IntegerEditor;
        PreInversion: Serenity.IntegerEditor;
        TrasEmpleo: Serenity.IntegerEditor;
        TrasInversion: Serenity.IntegerEditor;
        FechaAlta: Serenity.DateEditor;
        FechaModificacion: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        Situacion: Serenity.StringEditor;
        UsrAlta: Serenity.StringEditor;
        UsrModificacion: Serenity.StringEditor;
        UsrBaja: Serenity.StringEditor;
    }
    class RoezecEmpresasForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ProyectosZec.Roezec {
    interface RoezecEmpresasRow {
        Id?: number;
        DenominacionSocial?: string;
        Cif?: string;
        Direccion?: string;
        Cp?: string;
        Poblacion?: string;
        Provincia?: string;
        Isla?: string;
        NotasMarginales?: string;
        AnyoExpediente?: number;
        NumExpediente?: number;
        Agencia?: number;
        Tecnico?: string;
        FormaJuridica?: string;
        Superficie?: number;
        ExentaAreaAcotada?: string;
        MotivosExencion?: string;
        ObjetivoEmpleo?: number;
        ObjetivoInversion?: number;
        ObservacionesEmpleo?: string;
        ObservacionesInversion?: string;
        PreEmpleo?: number;
        PreInversion?: number;
        TrasEmpleo?: number;
        TrasInversion?: number;
        FechaAlta?: string;
        FechaModificacion?: string;
        FechaBaja?: string;
        Situacion?: string;
        UsrAlta?: string;
        UsrModificacion?: string;
        UsrBaja?: string;
    }
    namespace RoezecEmpresasRow {
        const idProperty = "Id";
        const nameProperty = "DenominacionSocial";
        const localTextPrefix = "Roezec.RoezecEmpresas";
        const lookupKey = "Roezec.RoezecEmpresas";
        function getLookup(): Q.Lookup<RoezecEmpresasRow>;
        const deletePermission = "Roezec:Delete";
        const insertPermission = "Roezec:Insert";
        const readPermission = "Roezec:Read";
        const updatePermission = "Roezec:Modify";
        const enum Fields {
            Id = "Id",
            DenominacionSocial = "DenominacionSocial",
            Cif = "Cif",
            Direccion = "Direccion",
            Cp = "Cp",
            Poblacion = "Poblacion",
            Provincia = "Provincia",
            Isla = "Isla",
            NotasMarginales = "NotasMarginales",
            AnyoExpediente = "AnyoExpediente",
            NumExpediente = "NumExpediente",
            Agencia = "Agencia",
            Tecnico = "Tecnico",
            FormaJuridica = "FormaJuridica",
            Superficie = "Superficie",
            ExentaAreaAcotada = "ExentaAreaAcotada",
            MotivosExencion = "MotivosExencion",
            ObjetivoEmpleo = "ObjetivoEmpleo",
            ObjetivoInversion = "ObjetivoInversion",
            ObservacionesEmpleo = "ObservacionesEmpleo",
            ObservacionesInversion = "ObservacionesInversion",
            PreEmpleo = "PreEmpleo",
            PreInversion = "PreInversion",
            TrasEmpleo = "TrasEmpleo",
            TrasInversion = "TrasInversion",
            FechaAlta = "FechaAlta",
            FechaModificacion = "FechaModificacion",
            FechaBaja = "FechaBaja",
            Situacion = "Situacion",
            UsrAlta = "UsrAlta",
            UsrModificacion = "UsrModificacion",
            UsrBaja = "UsrBaja"
        }
    }
}
declare namespace ProyectosZec.Roezec {
    namespace RoezecEmpresasService {
        const baseUrl = "Roezec/RoezecEmpresas";
        function Create(request: Serenity.SaveRequest<RoezecEmpresasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoezecEmpresasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoezecEmpresasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoezecEmpresasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Roezec/RoezecEmpresas/Create",
            Update = "Roezec/RoezecEmpresas/Update",
            Delete = "Roezec/RoezecEmpresas/Delete",
            Retrieve = "Roezec/RoezecEmpresas/Retrieve",
            List = "Roezec/RoezecEmpresas/List"
        }
    }
}
declare namespace ProyectosZec {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace ProyectosZec.Texts {
}
declare namespace ProyectosZec.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace ProyectosZec.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace ProyectosZec.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ProyectosZec.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace ProyectosZec.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace ProyectosZec.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace ProyectosZec.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace ProyectosZec.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace ProyectosZec.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace ProyectosZec.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace ProyectosZec.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace ProyectosZec.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace ProyectosZec.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace ProyectosZec.LanguageList {
    function getValue(): string[][];
}
declare namespace ProyectosZec.ScriptInitialization {
}
declare namespace ProyectosZec {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace ProyectosZec.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace ProyectosZec.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace ProyectosZec.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace ProyectosZec.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace ProyectosZec.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace ProyectosZec.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace ProyectosZec {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace ProyectosZec.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace ProyectosZec.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace ProyectosZec.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace ProyectosZec.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace ProyectosZec.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace ProyectosZec.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace ProyectosZec.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace ProyectosZec.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class CapitalDialog extends Serenity.EntityDialog<CapitalRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CapitalForm;
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class CapitalGrid extends Serenity.EntityGrid<CapitalRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CapitalDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class EstadosDialog extends Serenity.EntityDialog<EstadosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EstadosForm;
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class EstadosGrid extends Serenity.EntityGrid<EstadosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EstadosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class IslasDialog extends Serenity.EntityDialog<IslasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: IslasForm;
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class IslasGrid extends Serenity.EntityGrid<IslasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof IslasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class PrescriptorinversorDialog extends Serenity.EntityDialog<PrescriptorinversorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PrescriptorinversorForm;
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class PrescriptorinversorGrid extends Serenity.EntityGrid<PrescriptorinversorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PrescriptorinversorDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class PresentadasDialog extends Serenity.EntityDialog<ProyectosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProyectosForm;
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class PresentadasGrid extends Serenity.EntityGrid<ProyectosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PresentadasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): ProyectosRow.Fields[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected onViewSubmit(): boolean;
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class ProyectosDialog extends Serenity.EntityDialog<ProyectosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProyectosForm;
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class ProyectosGrid extends Serenity.EntityGrid<ProyectosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProyectosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): ProyectosRow.Fields[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class SectoresDialog extends Serenity.EntityDialog<SectoresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SectoresForm;
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class SectoresGrid extends Serenity.EntityGrid<SectoresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SectoresDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): SectoresRow.Fields[];
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class SubsectoresDialog extends Serenity.EntityDialog<SubsectoresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SubsectoresForm;
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class SubsectoresGrid extends Serenity.EntityGrid<SubsectoresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SubsectoresDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): SubsectoresRow.Fields[];
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class TecnicosDialog extends Serenity.EntityDialog<TecnicosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TecnicosForm;
    }
}
declare namespace ProyectosZec.CuadroMandos {
    class TecnicosGrid extends Serenity.EntityGrid<TecnicosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TecnicosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.Inmovilizado {
    class InmovilizadosDialog extends Serenity.EntityDialog<InmovilizadosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InmovilizadosForm;
    }
}
declare namespace ProyectosZec.Inmovilizado {
    class InmovilizadosGrid extends Serenity.EntityGrid<InmovilizadosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InmovilizadosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        getButtons(): Serenity.ToolButton[];
        /**
 * We override getColumns() to be able to add a custom CSS class to UnitPrice
 * We could also add this class in ProductColumns.cs but didn't want to modify
 * it solely for this sample.
 */
        protected getColumns(): Slick.Column[];
        /**
 * This method is called for all rows
 * @param item Data item for current row
 * @param index Index of the row in grid
 */
        protected getItemCssClass(item: Inmovilizado.InmovilizadosRow, index: number): string;
    }
}
declare namespace ProyectosZec.Inmovilizado {
    class ProveedoresDialog extends Serenity.EntityDialog<ProveedoresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProveedoresForm;
    }
}
declare namespace ProyectosZec.Inmovilizado {
    class ProveedoresGrid extends Serenity.EntityGrid<ProveedoresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProveedoresDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ProyectosZec.Inmovilizado {
    class SubtiposinmovilizadoDialog extends Serenity.EntityDialog<SubtiposinmovilizadoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SubtiposinmovilizadoForm;
    }
}
declare namespace ProyectosZec.Inmovilizado {
    class SubtiposinmovilizadoGrid extends Serenity.EntityGrid<SubtiposinmovilizadoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SubtiposinmovilizadoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ProyectosZec.Inmovilizado {
    class TiposinmovilizadoDialog extends Serenity.EntityDialog<TiposinmovilizadoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TiposinmovilizadoForm;
    }
}
declare namespace ProyectosZec.Inmovilizado {
    class TiposinmovilizadoGrid extends Serenity.EntityGrid<TiposinmovilizadoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TiposinmovilizadoDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.Intranet {
    class DepartamentosDialog extends Serenity.EntityDialog<DepartamentosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DepartamentosForm;
    }
}
declare namespace ProyectosZec.Intranet {
    class DepartamentosGrid extends Serenity.EntityGrid<DepartamentosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DepartamentosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.Intranet {
    class SedesDialog extends Serenity.EntityDialog<SedesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SedesForm;
    }
}
declare namespace ProyectosZec.Intranet {
    class SedesGrid extends Serenity.EntityGrid<SedesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SedesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.Intranet {
    class TelefonosDialog extends Serenity.EntityDialog<TelefonosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TelefonosForm;
    }
}
declare namespace ProyectosZec.Intranet {
    class TelefonosGrid extends Serenity.EntityGrid<TelefonosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TelefonosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): TelefonosRow.Fields[];
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ProyectosZec.Kairos {
    class DepartamentosDialog extends Serenity.EntityDialog<DepartamentosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DepartamentosForm;
    }
}
declare namespace ProyectosZec.Kairos {
    class DepartamentosGrid extends Serenity.EntityGrid<DepartamentosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DepartamentosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.Kairos {
    class DiarioDialog extends Serenity.EntityDialog<DiarioRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DiarioForm;
    }
}
declare namespace ProyectosZec.Kairos {
    class DiarioGrid extends Serenity.EntityGrid<DiarioRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DiarioDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ProyectosZec.Kairos {
    class FichajesDialog extends Serenity.EntityDialog<FichajesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FichajesForm;
    }
}
declare namespace ProyectosZec.Kairos {
    class FichajesGrid extends Serenity.EntityGrid<FichajesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FichajesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ProyectosZec.Kairos {
    class KrsEmpleadosDialog extends Serenity.EntityDialog<KrsEmpleadosRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: KrsEmpleadosForm;
    }
}
declare namespace ProyectosZec.Kairos {
    class KrsEmpleadosGrid extends Serenity.EntityGrid<KrsEmpleadosRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof KrsEmpleadosDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.Kairos {
    class TiposFichajeDialog extends Serenity.EntityDialog<TiposFichajeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TiposFichajeForm;
    }
}
declare namespace ProyectosZec.Kairos {
    class TiposFichajeGrid extends Serenity.EntityGrid<TiposFichajeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TiposFichajeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ProyectosZec.Roezec {
    class ActividadesDialog extends Serenity.EntityDialog<ActividadesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ActividadesForm;
    }
}
declare namespace ProyectosZec.Roezec {
    class ActividadesGrid extends Serenity.EntityGrid<ActividadesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ActividadesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ProyectosZec.Roezec {
    class NacesDialog extends Serenity.EntityDialog<NacesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: NacesForm;
    }
}
declare namespace ProyectosZec.Roezec {
    class NacesGrid extends Serenity.EntityGrid<NacesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NacesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ProyectosZec.Roezec {
    class RoezecEmpresasDialog extends Serenity.EntityDialog<RoezecEmpresasRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: RoezecEmpresasForm;
    }
}
declare namespace ProyectosZec.Roezec {
    class RoezecEmpresasGrid extends Serenity.EntityGrid<RoezecEmpresasRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoezecEmpresasDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        getButtons(): Serenity.ToolButton[];
    }
}

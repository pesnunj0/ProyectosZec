var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var CapitalForm = /** @class */ (function (_super) {
            __extends(CapitalForm, _super);
            function CapitalForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CapitalForm.init) {
                    CapitalForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CapitalForm, [
                        'Capital', w0
                    ]);
                }
                return _this;
            }
            CapitalForm.formKey = 'CuadroMandos.Capital';
            return CapitalForm;
        }(Serenity.PrefixedContext));
        CuadroMandos.CapitalForm = CapitalForm;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var CapitalRow;
        (function (CapitalRow) {
            CapitalRow.idProperty = 'CapitalId';
            CapitalRow.nameProperty = 'Capital';
            CapitalRow.localTextPrefix = 'CuadroMandos.Capital';
            CapitalRow.lookupKey = 'CuadroMandos.Capital';
            function getLookup() {
                return Q.getLookup('CuadroMandos.Capital');
            }
            CapitalRow.getLookup = getLookup;
            CapitalRow.deletePermission = 'Administration:General';
            CapitalRow.insertPermission = 'Administration:General';
            CapitalRow.readPermission = 'Administration:General';
            CapitalRow.updatePermission = 'Administration:General';
        })(CapitalRow = CuadroMandos.CapitalRow || (CuadroMandos.CapitalRow = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var CapitalService;
        (function (CapitalService) {
            CapitalService.baseUrl = 'CuadroMandos/Capital';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CapitalService[x] = function (r, s, o) {
                    return Q.serviceRequest(CapitalService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CapitalService = CuadroMandos.CapitalService || (CuadroMandos.CapitalService = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var EstadosForm = /** @class */ (function (_super) {
            __extends(EstadosForm, _super);
            function EstadosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EstadosForm.init) {
                    EstadosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(EstadosForm, [
                        'Estado', w0
                    ]);
                }
                return _this;
            }
            EstadosForm.formKey = 'CuadroMandos.Estados';
            return EstadosForm;
        }(Serenity.PrefixedContext));
        CuadroMandos.EstadosForm = EstadosForm;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var EstadosRow;
        (function (EstadosRow) {
            EstadosRow.idProperty = 'EstadoId';
            EstadosRow.nameProperty = 'Estado';
            EstadosRow.localTextPrefix = 'CuadroMandos.Estados';
            EstadosRow.lookupKey = 'CuadroMandos.Estados';
            function getLookup() {
                return Q.getLookup('CuadroMandos.Estados');
            }
            EstadosRow.getLookup = getLookup;
            EstadosRow.deletePermission = 'Administration:General';
            EstadosRow.insertPermission = 'Administration:General';
            EstadosRow.readPermission = 'Administration:General';
            EstadosRow.updatePermission = 'Administration:General';
        })(EstadosRow = CuadroMandos.EstadosRow || (CuadroMandos.EstadosRow = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var EstadosService;
        (function (EstadosService) {
            EstadosService.baseUrl = 'CuadroMandos/Estados';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EstadosService[x] = function (r, s, o) {
                    return Q.serviceRequest(EstadosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EstadosService = CuadroMandos.EstadosService || (CuadroMandos.EstadosService = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var IslasForm = /** @class */ (function (_super) {
            __extends(IslasForm, _super);
            function IslasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!IslasForm.init) {
                    IslasForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(IslasForm, [
                        'NombreIsla', w0,
                        'Isla', w0
                    ]);
                }
                return _this;
            }
            IslasForm.formKey = 'CuadroMandos.Islas';
            return IslasForm;
        }(Serenity.PrefixedContext));
        CuadroMandos.IslasForm = IslasForm;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var IslasRow;
        (function (IslasRow) {
            IslasRow.idProperty = 'IslaId';
            IslasRow.nameProperty = 'NombreIsla';
            IslasRow.localTextPrefix = 'CuadroMandos.Islas';
            IslasRow.lookupKey = 'CuadroMandos.Islas';
            function getLookup() {
                return Q.getLookup('CuadroMandos.Islas');
            }
            IslasRow.getLookup = getLookup;
            IslasRow.deletePermission = 'Administration:General';
            IslasRow.insertPermission = 'Administration:General';
            IslasRow.readPermission = 'Administration:General';
            IslasRow.updatePermission = 'Administration:General';
        })(IslasRow = CuadroMandos.IslasRow || (CuadroMandos.IslasRow = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var IslasService;
        (function (IslasService) {
            IslasService.baseUrl = 'CuadroMandos/Islas';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                IslasService[x] = function (r, s, o) {
                    return Q.serviceRequest(IslasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(IslasService = CuadroMandos.IslasService || (CuadroMandos.IslasService = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var PrescriptorinversorForm = /** @class */ (function (_super) {
            __extends(PrescriptorinversorForm, _super);
            function PrescriptorinversorForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PrescriptorinversorForm.init) {
                    PrescriptorinversorForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(PrescriptorinversorForm, [
                        'PrescriptorInversor', w0
                    ]);
                }
                return _this;
            }
            PrescriptorinversorForm.formKey = 'CuadroMandos.Prescriptorinversor';
            return PrescriptorinversorForm;
        }(Serenity.PrefixedContext));
        CuadroMandos.PrescriptorinversorForm = PrescriptorinversorForm;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var PrescriptorinversorRow;
        (function (PrescriptorinversorRow) {
            PrescriptorinversorRow.idProperty = 'PrescriptorInversorId';
            PrescriptorinversorRow.nameProperty = 'PrescriptorInversor';
            PrescriptorinversorRow.localTextPrefix = 'CuadroMandos.Prescriptorinversor';
            PrescriptorinversorRow.lookupKey = 'CuadroMandos.Prescriptorinversor';
            function getLookup() {
                return Q.getLookup('CuadroMandos.Prescriptorinversor');
            }
            PrescriptorinversorRow.getLookup = getLookup;
            PrescriptorinversorRow.deletePermission = 'Administration:General';
            PrescriptorinversorRow.insertPermission = 'Administration:General';
            PrescriptorinversorRow.readPermission = 'Administration:General';
            PrescriptorinversorRow.updatePermission = 'Administration:General';
        })(PrescriptorinversorRow = CuadroMandos.PrescriptorinversorRow || (CuadroMandos.PrescriptorinversorRow = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var PrescriptorinversorService;
        (function (PrescriptorinversorService) {
            PrescriptorinversorService.baseUrl = 'CuadroMandos/Prescriptorinversor';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PrescriptorinversorService[x] = function (r, s, o) {
                    return Q.serviceRequest(PrescriptorinversorService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PrescriptorinversorService = CuadroMandos.PrescriptorinversorService || (CuadroMandos.PrescriptorinversorService = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var PresentadasForm = /** @class */ (function (_super) {
            __extends(PresentadasForm, _super);
            function PresentadasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PresentadasForm.init) {
                    PresentadasForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(PresentadasForm, [
                        'Denominacion', w0,
                        'TecnicoId', w1,
                        'SubsectorId', w1,
                        'IslaId', w1,
                        'CapitalId', w1,
                        'Captacion', w0,
                        'PrescriptorInversorId', w1,
                        'Descripcion', w0,
                        'Contacto', w0,
                        'Telefono', w0,
                        'Email', w0,
                        'EstadoId', w1,
                        'FechaInicio', w2,
                        'FechaPresentacion', w2,
                        'FechaInscripcion', w2,
                        'FechaAutorizacion', w2,
                        'FechaAmpliacion', w2,
                        'FechaBaja', w2,
                        'Empleos', w3,
                        'Inversion', w3,
                        'EmpleoReal', w3,
                        'Expediente', w0,
                        'Nace', w0,
                        'InversionReal', w3
                    ]);
                }
                return _this;
            }
            PresentadasForm.formKey = 'CuadroMandos.Presentadas';
            return PresentadasForm;
        }(Serenity.PrefixedContext));
        CuadroMandos.PresentadasForm = PresentadasForm;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var PresentadasService;
        (function (PresentadasService) {
            PresentadasService.baseUrl = 'CuadroMandos/Presentadas';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PresentadasService[x] = function (r, s, o) {
                    return Q.serviceRequest(PresentadasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PresentadasService = CuadroMandos.PresentadasService || (CuadroMandos.PresentadasService = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var ProyectosForm = /** @class */ (function (_super) {
            __extends(ProyectosForm, _super);
            function ProyectosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProyectosForm.init) {
                    ProyectosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.TextAreaEditor;
                    var w4 = s.DateEditor;
                    Q.initFormType(ProyectosForm, [
                        'Denominacion', w0,
                        'TecnicoId', w1,
                        'SectorId', w1,
                        'SubsectorId', w1,
                        'IslaId', w1,
                        'CapitalId', w1,
                        'Captacion', w0,
                        'Empleos', w2,
                        'Inversion', w2,
                        'EmpleoReal', w2,
                        'InversionReal', w2,
                        'PrescriptorInversorId', w1,
                        'Expediente', w0,
                        'Nace', w0,
                        'EstadoId', w1,
                        'Descripcion', w3,
                        'Contacto', w0,
                        'Telefono', w0,
                        'Email', w0,
                        'FechaInicio', w4,
                        'FechaPresentacion', w4,
                        'FechaInscripcion', w4,
                        'FechaAutorizacion', w4,
                        'FechaAmpliacion', w4,
                        'FechaBaja', w4
                    ]);
                }
                return _this;
            }
            ProyectosForm.formKey = 'CuadroMandos.Proyectos';
            return ProyectosForm;
        }(Serenity.PrefixedContext));
        CuadroMandos.ProyectosForm = ProyectosForm;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var ProyectosRow;
        (function (ProyectosRow) {
            ProyectosRow.idProperty = 'ProyectoId';
            ProyectosRow.nameProperty = 'Denominacion';
            ProyectosRow.localTextPrefix = 'CuadroMandos.Proyectos';
            ProyectosRow.lookupKey = 'CuadroMandos.Proyectos';
            function getLookup() {
                return Q.getLookup('CuadroMandos.Proyectos');
            }
            ProyectosRow.getLookup = getLookup;
            ProyectosRow.deletePermission = 'CuadroMandos:Delete';
            ProyectosRow.insertPermission = 'CuadroMandos:Insert';
            ProyectosRow.readPermission = 'CuadroMandos:Read';
            ProyectosRow.updatePermission = 'CuadroMandos:Modify';
        })(ProyectosRow = CuadroMandos.ProyectosRow || (CuadroMandos.ProyectosRow = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var ProyectosService;
        (function (ProyectosService) {
            ProyectosService.baseUrl = 'CuadroMandos/Proyectos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProyectosService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProyectosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProyectosService = CuadroMandos.ProyectosService || (CuadroMandos.ProyectosService = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var SectoresForm = /** @class */ (function (_super) {
            __extends(SectoresForm, _super);
            function SectoresForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SectoresForm.init) {
                    SectoresForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SectoresForm, [
                        'Sector', w0
                    ]);
                }
                return _this;
            }
            SectoresForm.formKey = 'CuadroMandos.Sectores';
            return SectoresForm;
        }(Serenity.PrefixedContext));
        CuadroMandos.SectoresForm = SectoresForm;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var SectoresRow;
        (function (SectoresRow) {
            SectoresRow.idProperty = 'SectorId';
            SectoresRow.nameProperty = 'Sector';
            SectoresRow.localTextPrefix = 'CuadroMandos.Sectores';
            SectoresRow.lookupKey = 'CuadroMandos.Sectores';
            function getLookup() {
                return Q.getLookup('CuadroMandos.Sectores');
            }
            SectoresRow.getLookup = getLookup;
            SectoresRow.deletePermission = 'Administration:General';
            SectoresRow.insertPermission = 'Administration:General';
            SectoresRow.readPermission = 'Administration:General';
            SectoresRow.updatePermission = 'Administration:General';
        })(SectoresRow = CuadroMandos.SectoresRow || (CuadroMandos.SectoresRow = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var SectoresService;
        (function (SectoresService) {
            SectoresService.baseUrl = 'CuadroMandos/Sectores';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SectoresService[x] = function (r, s, o) {
                    return Q.serviceRequest(SectoresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SectoresService = CuadroMandos.SectoresService || (CuadroMandos.SectoresService = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var SubsectoresForm = /** @class */ (function (_super) {
            __extends(SubsectoresForm, _super);
            function SubsectoresForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SubsectoresForm.init) {
                    SubsectoresForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(SubsectoresForm, [
                        'SectorId', w0,
                        'Subsector', w1
                    ]);
                }
                return _this;
            }
            SubsectoresForm.formKey = 'CuadroMandos.Subsectores';
            return SubsectoresForm;
        }(Serenity.PrefixedContext));
        CuadroMandos.SubsectoresForm = SubsectoresForm;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var SubsectoresRow;
        (function (SubsectoresRow) {
            SubsectoresRow.idProperty = 'SubsectorId';
            SubsectoresRow.nameProperty = 'Subsector';
            SubsectoresRow.localTextPrefix = 'CuadroMandos.Subsectores';
            SubsectoresRow.lookupKey = 'CuadroMandos.Subsectores';
            function getLookup() {
                return Q.getLookup('CuadroMandos.Subsectores');
            }
            SubsectoresRow.getLookup = getLookup;
            SubsectoresRow.deletePermission = 'Administration:General';
            SubsectoresRow.insertPermission = 'Administration:General';
            SubsectoresRow.readPermission = 'Administration:General';
            SubsectoresRow.updatePermission = 'Administration:General';
        })(SubsectoresRow = CuadroMandos.SubsectoresRow || (CuadroMandos.SubsectoresRow = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var SubsectoresService;
        (function (SubsectoresService) {
            SubsectoresService.baseUrl = 'CuadroMandos/Subsectores';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SubsectoresService[x] = function (r, s, o) {
                    return Q.serviceRequest(SubsectoresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SubsectoresService = CuadroMandos.SubsectoresService || (CuadroMandos.SubsectoresService = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var TecnicosForm = /** @class */ (function (_super) {
            __extends(TecnicosForm, _super);
            function TecnicosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TecnicosForm.init) {
                    TecnicosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TecnicosForm, [
                        'NombreTecnico', w0,
                        'Tecnico', w0
                    ]);
                }
                return _this;
            }
            TecnicosForm.formKey = 'CuadroMandos.Tecnicos';
            return TecnicosForm;
        }(Serenity.PrefixedContext));
        CuadroMandos.TecnicosForm = TecnicosForm;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var TecnicosRow;
        (function (TecnicosRow) {
            TecnicosRow.idProperty = 'TecnicoId';
            TecnicosRow.nameProperty = 'NombreTecnico';
            TecnicosRow.localTextPrefix = 'CuadroMandos.Tecnicos';
            TecnicosRow.lookupKey = 'CuadroMandos.Tecnicos';
            function getLookup() {
                return Q.getLookup('CuadroMandos.Tecnicos');
            }
            TecnicosRow.getLookup = getLookup;
            TecnicosRow.deletePermission = 'Administration:General';
            TecnicosRow.insertPermission = 'Administration:General';
            TecnicosRow.readPermission = 'Administration:General';
            TecnicosRow.updatePermission = 'Administration:General';
        })(TecnicosRow = CuadroMandos.TecnicosRow || (CuadroMandos.TecnicosRow = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var TecnicosService;
        (function (TecnicosService) {
            TecnicosService.baseUrl = 'CuadroMandos/Tecnicos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TecnicosService[x] = function (r, s, o) {
                    return Q.serviceRequest(TecnicosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TecnicosService = CuadroMandos.TecnicosService || (CuadroMandos.TecnicosService = {}));
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var InmovilizadosForm = /** @class */ (function (_super) {
            __extends(InmovilizadosForm, _super);
            function InmovilizadosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InmovilizadosForm.init) {
                    InmovilizadosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    var w4 = s.IntegerEditor;
                    var w5 = s.MultipleImageUploadEditor;
                    Q.initFormType(InmovilizadosForm, [
                        'Codigo', w0,
                        'Descripcion', w0,
                        'Ubicacion', w0,
                        'NumeroSerie', w0,
                        'TipoInmovilizadoId', w1,
                        'SubTipoInmovilizadoId', w1,
                        'Pg', w0,
                        'SedeId', w1,
                        'ProveedorId', w1,
                        'FechaCompra', w2,
                        'FechaBaja', w2,
                        'Valor', w3,
                        'Amortizacion', w4,
                        'Garantia', w4,
                        'Factura', w0,
                        'GalleryImages', w5,
                        'Files', w5
                    ]);
                }
                return _this;
            }
            InmovilizadosForm.formKey = 'Inmovilizado.Inmovilizados';
            return InmovilizadosForm;
        }(Serenity.PrefixedContext));
        Inmovilizado.InmovilizadosForm = InmovilizadosForm;
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var InmovilizadosRow;
        (function (InmovilizadosRow) {
            InmovilizadosRow.idProperty = 'InmovilizadoId';
            InmovilizadosRow.nameProperty = 'Descripcion';
            InmovilizadosRow.localTextPrefix = 'Inmovilizado.Inmovilizados';
            InmovilizadosRow.deletePermission = 'Inmovilizado:Modify';
            InmovilizadosRow.insertPermission = 'Inmovilizado:Modify';
            InmovilizadosRow.readPermission = 'Inmovilizado:Read';
            InmovilizadosRow.updatePermission = 'Inmovilizado:Modify';
        })(InmovilizadosRow = Inmovilizado.InmovilizadosRow || (Inmovilizado.InmovilizadosRow = {}));
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var InmovilizadosService;
        (function (InmovilizadosService) {
            InmovilizadosService.baseUrl = 'Inmovilizado/Inmovilizados';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InmovilizadosService[x] = function (r, s, o) {
                    return Q.serviceRequest(InmovilizadosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InmovilizadosService = Inmovilizado.InmovilizadosService || (Inmovilizado.InmovilizadosService = {}));
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var ProveedoresForm = /** @class */ (function (_super) {
            __extends(ProveedoresForm, _super);
            function ProveedoresForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProveedoresForm.init) {
                    ProveedoresForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ProveedoresForm, [
                        'Proveedor', w0,
                        'Contacto', w0,
                        'Telefono', w0,
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ProveedoresForm.formKey = 'Inmovilizado.Proveedores';
            return ProveedoresForm;
        }(Serenity.PrefixedContext));
        Inmovilizado.ProveedoresForm = ProveedoresForm;
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var ProveedoresRow;
        (function (ProveedoresRow) {
            ProveedoresRow.idProperty = 'ProveedorId';
            ProveedoresRow.nameProperty = 'Proveedor';
            ProveedoresRow.localTextPrefix = 'Inmovilizado.Proveedores';
            ProveedoresRow.lookupKey = 'Inmovilizado.Proveedores';
            function getLookup() {
                return Q.getLookup('Inmovilizado.Proveedores');
            }
            ProveedoresRow.getLookup = getLookup;
            ProveedoresRow.deletePermission = 'Inmovilizado:Modify';
            ProveedoresRow.insertPermission = 'Inmovilizado:Modify';
            ProveedoresRow.readPermission = 'Inmovilizado:Read';
            ProveedoresRow.updatePermission = 'Inmovilizado:Modify';
        })(ProveedoresRow = Inmovilizado.ProveedoresRow || (Inmovilizado.ProveedoresRow = {}));
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var ProveedoresService;
        (function (ProveedoresService) {
            ProveedoresService.baseUrl = 'Inmovilizado/Proveedores';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProveedoresService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProveedoresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProveedoresService = Inmovilizado.ProveedoresService || (Inmovilizado.ProveedoresService = {}));
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var SubtiposinmovilizadoForm = /** @class */ (function (_super) {
            __extends(SubtiposinmovilizadoForm, _super);
            function SubtiposinmovilizadoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SubtiposinmovilizadoForm.init) {
                    SubtiposinmovilizadoForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(SubtiposinmovilizadoForm, [
                        'TipoInmovilizadoId', w0,
                        'SubTipo', w1
                    ]);
                }
                return _this;
            }
            SubtiposinmovilizadoForm.formKey = 'Inmovilizado.Subtiposinmovilizado';
            return SubtiposinmovilizadoForm;
        }(Serenity.PrefixedContext));
        Inmovilizado.SubtiposinmovilizadoForm = SubtiposinmovilizadoForm;
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var SubtiposinmovilizadoRow;
        (function (SubtiposinmovilizadoRow) {
            SubtiposinmovilizadoRow.idProperty = 'SubTipoInmovilizadoId';
            SubtiposinmovilizadoRow.nameProperty = 'SubTipo';
            SubtiposinmovilizadoRow.localTextPrefix = 'Inmovilizado.Subtiposinmovilizado';
            SubtiposinmovilizadoRow.lookupKey = 'Inmovilizado.Subtiposinmovilizado';
            function getLookup() {
                return Q.getLookup('Inmovilizado.Subtiposinmovilizado');
            }
            SubtiposinmovilizadoRow.getLookup = getLookup;
            SubtiposinmovilizadoRow.deletePermission = 'Inmovilizado:Modify';
            SubtiposinmovilizadoRow.insertPermission = 'Inmovilizado:Modify';
            SubtiposinmovilizadoRow.readPermission = 'Inmovilizado:Read';
            SubtiposinmovilizadoRow.updatePermission = 'Inmovilizado:Modify';
        })(SubtiposinmovilizadoRow = Inmovilizado.SubtiposinmovilizadoRow || (Inmovilizado.SubtiposinmovilizadoRow = {}));
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var SubtiposinmovilizadoService;
        (function (SubtiposinmovilizadoService) {
            SubtiposinmovilizadoService.baseUrl = 'Inmovilizado/Subtiposinmovilizado';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SubtiposinmovilizadoService[x] = function (r, s, o) {
                    return Q.serviceRequest(SubtiposinmovilizadoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SubtiposinmovilizadoService = Inmovilizado.SubtiposinmovilizadoService || (Inmovilizado.SubtiposinmovilizadoService = {}));
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var TiposinmovilizadoForm = /** @class */ (function (_super) {
            __extends(TiposinmovilizadoForm, _super);
            function TiposinmovilizadoForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TiposinmovilizadoForm.init) {
                    TiposinmovilizadoForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TiposinmovilizadoForm, [
                        'Tipo', w0
                    ]);
                }
                return _this;
            }
            TiposinmovilizadoForm.formKey = 'Inmovilizado.Tiposinmovilizado';
            return TiposinmovilizadoForm;
        }(Serenity.PrefixedContext));
        Inmovilizado.TiposinmovilizadoForm = TiposinmovilizadoForm;
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var TiposinmovilizadoRow;
        (function (TiposinmovilizadoRow) {
            TiposinmovilizadoRow.idProperty = 'TipoInmovilizadoId';
            TiposinmovilizadoRow.nameProperty = 'Tipo';
            TiposinmovilizadoRow.localTextPrefix = 'Inmovilizado.Tiposinmovilizado';
            TiposinmovilizadoRow.lookupKey = 'Inmovilizado.Tiposinmovilizado';
            function getLookup() {
                return Q.getLookup('Inmovilizado.Tiposinmovilizado');
            }
            TiposinmovilizadoRow.getLookup = getLookup;
            TiposinmovilizadoRow.deletePermission = 'Inmovilizado:General';
            TiposinmovilizadoRow.insertPermission = 'Inmovilizado:General';
            TiposinmovilizadoRow.readPermission = 'Inmovilizado:General';
            TiposinmovilizadoRow.updatePermission = 'Inmovilizado:General';
        })(TiposinmovilizadoRow = Inmovilizado.TiposinmovilizadoRow || (Inmovilizado.TiposinmovilizadoRow = {}));
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var TiposinmovilizadoService;
        (function (TiposinmovilizadoService) {
            TiposinmovilizadoService.baseUrl = 'Inmovilizado/Tiposinmovilizado';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TiposinmovilizadoService[x] = function (r, s, o) {
                    return Q.serviceRequest(TiposinmovilizadoService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TiposinmovilizadoService = Inmovilizado.TiposinmovilizadoService || (Inmovilizado.TiposinmovilizadoService = {}));
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var DepartamentosForm = /** @class */ (function (_super) {
            __extends(DepartamentosForm, _super);
            function DepartamentosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DepartamentosForm.init) {
                    DepartamentosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(DepartamentosForm, [
                        'Departamento', w0
                    ]);
                }
                return _this;
            }
            DepartamentosForm.formKey = 'Intranet.Departamentos';
            return DepartamentosForm;
        }(Serenity.PrefixedContext));
        Intranet.DepartamentosForm = DepartamentosForm;
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var DepartamentosRow;
        (function (DepartamentosRow) {
            DepartamentosRow.idProperty = 'DepartamentoId';
            DepartamentosRow.nameProperty = 'Departamento';
            DepartamentosRow.localTextPrefix = 'Intranet.Departamentos';
            DepartamentosRow.lookupKey = 'Intranet.Departamentos';
            function getLookup() {
                return Q.getLookup('Intranet.Departamentos');
            }
            DepartamentosRow.getLookup = getLookup;
            DepartamentosRow.deletePermission = 'Telefonos:Modify';
            DepartamentosRow.insertPermission = 'Telefonos:Modify';
            DepartamentosRow.readPermission = 'Telefonos:Read';
            DepartamentosRow.updatePermission = 'Telefonos:Modify';
        })(DepartamentosRow = Intranet.DepartamentosRow || (Intranet.DepartamentosRow = {}));
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var DepartamentosService;
        (function (DepartamentosService) {
            DepartamentosService.baseUrl = 'Intranet/Departamentos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DepartamentosService[x] = function (r, s, o) {
                    return Q.serviceRequest(DepartamentosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DepartamentosService = Intranet.DepartamentosService || (Intranet.DepartamentosService = {}));
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var SedesForm = /** @class */ (function (_super) {
            __extends(SedesForm, _super);
            function SedesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SedesForm.init) {
                    SedesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SedesForm, [
                        'Sede', w0
                    ]);
                }
                return _this;
            }
            SedesForm.formKey = 'Intranet.Sedes';
            return SedesForm;
        }(Serenity.PrefixedContext));
        Intranet.SedesForm = SedesForm;
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var SedesRow;
        (function (SedesRow) {
            SedesRow.idProperty = 'SedeId';
            SedesRow.nameProperty = 'Sede';
            SedesRow.localTextPrefix = 'Intranet.Sedes';
            SedesRow.lookupKey = 'Intranet.Sedes';
            function getLookup() {
                return Q.getLookup('Intranet.Sedes');
            }
            SedesRow.getLookup = getLookup;
            SedesRow.deletePermission = 'Telefonos:Modify';
            SedesRow.insertPermission = 'Telefonos:Modify';
            SedesRow.readPermission = 'Telefonos:Read';
            SedesRow.updatePermission = 'Telefonos:Modify';
        })(SedesRow = Intranet.SedesRow || (Intranet.SedesRow = {}));
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var SedesService;
        (function (SedesService) {
            SedesService.baseUrl = 'Intranet/Sedes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SedesService[x] = function (r, s, o) {
                    return Q.serviceRequest(SedesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SedesService = Intranet.SedesService || (Intranet.SedesService = {}));
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var TelefonosForm = /** @class */ (function (_super) {
            __extends(TelefonosForm, _super);
            function TelefonosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TelefonosForm.init) {
                    TelefonosForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(TelefonosForm, [
                        'SedeId', w0,
                        'DepartamentoId', w0,
                        'Nombre', w1,
                        'ExtCorta', w1,
                        'Fijo', w1,
                        'Movil', w1,
                        'CortoMovil', w1,
                        'Contrato', w1,
                        'PUK', w1,
                        'Multisim', w1
                    ]);
                }
                return _this;
            }
            TelefonosForm.formKey = 'Intranet.Telefonos';
            return TelefonosForm;
        }(Serenity.PrefixedContext));
        Intranet.TelefonosForm = TelefonosForm;
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var TelefonosRow;
        (function (TelefonosRow) {
            TelefonosRow.idProperty = 'TelefonoId';
            TelefonosRow.nameProperty = 'Nombre';
            TelefonosRow.localTextPrefix = 'Intranet.Telefonos';
            TelefonosRow.lookupKey = 'Telefonos.Telefonos';
            function getLookup() {
                return Q.getLookup('Telefonos.Telefonos');
            }
            TelefonosRow.getLookup = getLookup;
            TelefonosRow.deletePermission = 'Telefonos:Delete';
            TelefonosRow.insertPermission = 'Telefonos:Insert';
            TelefonosRow.readPermission = 'Telefonos:Read';
            TelefonosRow.updatePermission = 'Telefonos:Modify';
        })(TelefonosRow = Intranet.TelefonosRow || (Intranet.TelefonosRow = {}));
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var TelefonosService;
        (function (TelefonosService) {
            TelefonosService.baseUrl = 'Intranet/Telefonos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TelefonosService[x] = function (r, s, o) {
                    return Q.serviceRequest(TelefonosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TelefonosService = Intranet.TelefonosService || (Intranet.TelefonosService = {}));
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var DepartamentosForm = /** @class */ (function (_super) {
            __extends(DepartamentosForm, _super);
            function DepartamentosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DepartamentosForm.init) {
                    DepartamentosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(DepartamentosForm, [
                        'CodigoCliente', w0,
                        'Codigo', w0,
                        'Descripcion', w0,
                        'FechaBorrado', w1,
                        'SedeId', w2
                    ]);
                }
                return _this;
            }
            DepartamentosForm.formKey = 'Kairos.Departamentos';
            return DepartamentosForm;
        }(Serenity.PrefixedContext));
        Kairos.DepartamentosForm = DepartamentosForm;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var DepartamentosRow;
        (function (DepartamentosRow) {
            DepartamentosRow.idProperty = 'Id';
            DepartamentosRow.nameProperty = 'Codigo';
            DepartamentosRow.localTextPrefix = 'Kairos.Departamentos';
            DepartamentosRow.deletePermission = 'Kairos:Delete';
            DepartamentosRow.insertPermission = 'Kairos:Insert';
            DepartamentosRow.readPermission = 'Kairos:Read';
            DepartamentosRow.updatePermission = 'Kairos:Modify';
        })(DepartamentosRow = Kairos.DepartamentosRow || (Kairos.DepartamentosRow = {}));
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var DepartamentosService;
        (function (DepartamentosService) {
            DepartamentosService.baseUrl = 'Kairos/Departamentos';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DepartamentosService[x] = function (r, s, o) {
                    return Q.serviceRequest(DepartamentosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DepartamentosService = Kairos.DepartamentosService || (Kairos.DepartamentosService = {}));
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var DiarioForm = /** @class */ (function (_super) {
            __extends(DiarioForm, _super);
            function DiarioForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DiarioForm.init) {
                    DiarioForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(DiarioForm, [
                        'IdDepartamento', w0,
                        'Empleado', w0,
                        'Fecha', w1,
                        'Entrada', w1,
                        'HoraEntrada', w0,
                        'Salida', w1,
                        'HoraSalida', w0
                    ]);
                }
                return _this;
            }
            DiarioForm.formKey = 'Kairos.Diario';
            return DiarioForm;
        }(Serenity.PrefixedContext));
        Kairos.DiarioForm = DiarioForm;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var DiarioRow;
        (function (DiarioRow) {
            DiarioRow.idProperty = 'Id';
            DiarioRow.nameProperty = 'Empleado';
            DiarioRow.localTextPrefix = 'Kairos.Diario';
            DiarioRow.deletePermission = 'Kairos:Delete';
            DiarioRow.insertPermission = 'Kairos:Insert';
            DiarioRow.readPermission = 'Kairos:Read';
            DiarioRow.updatePermission = 'Kairos:Modify';
        })(DiarioRow = Kairos.DiarioRow || (Kairos.DiarioRow = {}));
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var DiarioService;
        (function (DiarioService) {
            DiarioService.baseUrl = 'Kairos/Diario';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DiarioService[x] = function (r, s, o) {
                    return Q.serviceRequest(DiarioService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DiarioService = Kairos.DiarioService || (Kairos.DiarioService = {}));
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var ExtrasForm = /** @class */ (function (_super) {
            __extends(ExtrasForm, _super);
            function ExtrasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ExtrasForm.init) {
                    ExtrasForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(ExtrasForm, [
                        'CodigoCliente', w0,
                        'IdEmpleado', w0,
                        'Fecha', w1,
                        'IdHoraExtraCabecera', w0,
                        'Tipo', w2,
                        'TotalHorasExtrasReales', w3,
                        'TotalHorasExtrasConvertidas', w3,
                        'IdAusenciaProgramadaTipo', w0,
                        'Dia', w0,
                        'Estado', w0,
                        'MotivoCancelacion', w0,
                        'FechaAceptacionCancelacion', w1
                    ]);
                }
                return _this;
            }
            ExtrasForm.formKey = 'Kairos.Extras';
            return ExtrasForm;
        }(Serenity.PrefixedContext));
        Kairos.ExtrasForm = ExtrasForm;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var ExtrasRow;
        (function (ExtrasRow) {
            ExtrasRow.idProperty = 'Id';
            ExtrasRow.nameProperty = 'Dia';
            ExtrasRow.localTextPrefix = 'Kairos.Extras';
            ExtrasRow.deletePermission = 'Kairos:Delete';
            ExtrasRow.insertPermission = 'Kairos:Insert';
            ExtrasRow.readPermission = 'Kairos:Read';
            ExtrasRow.updatePermission = 'Kairos:Modify';
        })(ExtrasRow = Kairos.ExtrasRow || (Kairos.ExtrasRow = {}));
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var ExtrasService;
        (function (ExtrasService) {
            ExtrasService.baseUrl = 'Kairos/Extras';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ExtrasService[x] = function (r, s, o) {
                    return Q.serviceRequest(ExtrasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ExtrasService = Kairos.ExtrasService || (Kairos.ExtrasService = {}));
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var FichajesForm = /** @class */ (function (_super) {
            __extends(FichajesForm, _super);
            function FichajesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FichajesForm.init) {
                    FichajesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateTimeEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.LookupEditor;
                    Q.initFormType(FichajesForm, [
                        'IdEmpleado', w0,
                        'CodigoCliente', w0,
                        'FechaHora', w1,
                        'Observaciones', w0,
                        'GpsPosicionLatitud', w0,
                        'GpsPosicionLongitud', w0,
                        'GpsFechaHora', w2,
                        'GpsProveedor', w0,
                        'GpsAltitud', w0,
                        'IdTerminal', w0,
                        'IdDispositivoModelo', w0,
                        'Modificado', w2,
                        'Anulado', w2,
                        'Validado', w3,
                        'TipoDispositivo', w3,
                        'EntradaSalida', w4,
                        'IdEmpresa', w0
                    ]);
                }
                return _this;
            }
            FichajesForm.formKey = 'Kairos.Fichajes';
            return FichajesForm;
        }(Serenity.PrefixedContext));
        Kairos.FichajesForm = FichajesForm;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var FichajesRow;
        (function (FichajesRow) {
            FichajesRow.idProperty = 'Id';
            FichajesRow.nameProperty = 'Observaciones';
            FichajesRow.localTextPrefix = 'Kairos.Fichajes';
            FichajesRow.deletePermission = 'Kairos:Delete';
            FichajesRow.insertPermission = 'Kairos:Insert';
            FichajesRow.readPermission = 'Kairos:Read';
            FichajesRow.updatePermission = 'Kairos:Modify';
        })(FichajesRow = Kairos.FichajesRow || (Kairos.FichajesRow = {}));
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var FichajesService;
        (function (FichajesService) {
            FichajesService.baseUrl = 'Kairos/Fichajes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FichajesService[x] = function (r, s, o) {
                    return Q.serviceRequest(FichajesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FichajesService = Kairos.FichajesService || (Kairos.FichajesService = {}));
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var KrsEmpleadosForm = /** @class */ (function (_super) {
            __extends(KrsEmpleadosForm, _super);
            function KrsEmpleadosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!KrsEmpleadosForm.init) {
                    KrsEmpleadosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(KrsEmpleadosForm, [
                        'CodigoCliente', w0,
                        'Nombre', w0,
                        'CodigoValidacion', w0,
                        'FechaBaja', w1,
                        'Pin', w2,
                        'Tecnico', w3,
                        'UsoHorario', w0,
                        'SacarFotoFichaje', w3,
                        'FechaActualizacion', w1,
                        'FechaBorrado', w1,
                        'NumeroTarjetaFichaje', w0,
                        'IdDepartamento', w0,
                        'IdEmpresa', w0,
                        'Email', w0,
                        'PermiteRecordatorio', w3,
                        'PermiteFichajeAutomatico', w3,
                        'IdEmpresaFichajeAutomatico', w0,
                        'ProgramaExternoIdEmpleado', w0,
                        'ProgramaExternoDescripcion', w0,
                        'IdHoraExtraCabecera', w0,
                        'ClaveAccesoWeb', w0,
                        'PermiteFichajeWeb', w3
                    ]);
                }
                return _this;
            }
            KrsEmpleadosForm.formKey = 'Kairos.KrsEmpleados';
            return KrsEmpleadosForm;
        }(Serenity.PrefixedContext));
        Kairos.KrsEmpleadosForm = KrsEmpleadosForm;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var KrsEmpleadosRow;
        (function (KrsEmpleadosRow) {
            KrsEmpleadosRow.idProperty = 'Id';
            KrsEmpleadosRow.nameProperty = 'Nombre';
            KrsEmpleadosRow.localTextPrefix = 'Kairos.KrsEmpleados';
            KrsEmpleadosRow.lookupKey = 'Kairos.KrsEmpleados';
            function getLookup() {
                return Q.getLookup('Kairos.KrsEmpleados');
            }
            KrsEmpleadosRow.getLookup = getLookup;
            KrsEmpleadosRow.deletePermission = 'Kairos:Delete';
            KrsEmpleadosRow.insertPermission = 'Kairos:Insert';
            KrsEmpleadosRow.readPermission = 'Kairos:Read';
            KrsEmpleadosRow.updatePermission = 'Kairos:Modify';
        })(KrsEmpleadosRow = Kairos.KrsEmpleadosRow || (Kairos.KrsEmpleadosRow = {}));
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var KrsEmpleadosService;
        (function (KrsEmpleadosService) {
            KrsEmpleadosService.baseUrl = 'Kairos/KrsEmpleados';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                KrsEmpleadosService[x] = function (r, s, o) {
                    return Q.serviceRequest(KrsEmpleadosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(KrsEmpleadosService = Kairos.KrsEmpleadosService || (Kairos.KrsEmpleadosService = {}));
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var TiposFichajeForm = /** @class */ (function (_super) {
            __extends(TiposFichajeForm, _super);
            function TiposFichajeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TiposFichajeForm.init) {
                    TiposFichajeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TiposFichajeForm, [
                        'Tipo', w0
                    ]);
                }
                return _this;
            }
            TiposFichajeForm.formKey = 'Kairos.TiposFichaje';
            return TiposFichajeForm;
        }(Serenity.PrefixedContext));
        Kairos.TiposFichajeForm = TiposFichajeForm;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var TiposFichajeRow;
        (function (TiposFichajeRow) {
            TiposFichajeRow.idProperty = 'Id';
            TiposFichajeRow.nameProperty = 'Tipo';
            TiposFichajeRow.localTextPrefix = 'Kairos.TiposFichaje';
            TiposFichajeRow.lookupKey = 'Kairos.TiposFichaje';
            function getLookup() {
                return Q.getLookup('Kairos.TiposFichaje');
            }
            TiposFichajeRow.getLookup = getLookup;
            TiposFichajeRow.deletePermission = 'Kairos:Delete';
            TiposFichajeRow.insertPermission = 'Kairos:Insert';
            TiposFichajeRow.readPermission = 'Kairos:Read';
            TiposFichajeRow.updatePermission = 'Kairos:Modify';
        })(TiposFichajeRow = Kairos.TiposFichajeRow || (Kairos.TiposFichajeRow = {}));
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var TiposFichajeService;
        (function (TiposFichajeService) {
            TiposFichajeService.baseUrl = 'Kairos/TiposFichaje';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TiposFichajeService[x] = function (r, s, o) {
                    return Q.serviceRequest(TiposFichajeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TiposFichajeService = Kairos.TiposFichajeService || (Kairos.TiposFichajeService = {}));
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = ProyectosZec.Membership || (ProyectosZec.Membership = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = ProyectosZec.Membership || (ProyectosZec.Membership = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = ProyectosZec.Membership || (ProyectosZec.Membership = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = ProyectosZec.Membership || (ProyectosZec.Membership = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = ProyectosZec.Membership || (ProyectosZec.Membership = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var ActividadesForm = /** @class */ (function (_super) {
            __extends(ActividadesForm, _super);
            function ActividadesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ActividadesForm.init) {
                    ActividadesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    Q.initFormType(ActividadesForm, [
                        'IdNace', w0,
                        'IdEmpresa', w0
                    ]);
                }
                return _this;
            }
            ActividadesForm.formKey = 'Roezec.Actividades';
            return ActividadesForm;
        }(Serenity.PrefixedContext));
        Roezec.ActividadesForm = ActividadesForm;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var ActividadesRow;
        (function (ActividadesRow) {
            ActividadesRow.idProperty = 'Id';
            ActividadesRow.nameProperty = 'Actividad';
            ActividadesRow.localTextPrefix = 'Roezec.Actividades';
            ActividadesRow.deletePermission = 'Roezec:Delete';
            ActividadesRow.insertPermission = 'Roezec:Insert';
            ActividadesRow.readPermission = 'Roezec:Read';
            ActividadesRow.updatePermission = 'Roezec:Modify';
        })(ActividadesRow = Roezec.ActividadesRow || (Roezec.ActividadesRow = {}));
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var ActividadesService;
        (function (ActividadesService) {
            ActividadesService.baseUrl = 'Roezec/Actividades';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ActividadesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ActividadesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ActividadesService = Roezec.ActividadesService || (Roezec.ActividadesService = {}));
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var NacesForm = /** @class */ (function (_super) {
            __extends(NacesForm, _super);
            function NacesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!NacesForm.init) {
                    NacesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(NacesForm, [
                        'Nace', w0,
                        'Codigo', w0,
                        'Actividad', w0,
                        'FechaAlta', w1,
                        'UsrAlta', w0
                    ]);
                }
                return _this;
            }
            NacesForm.formKey = 'Roezec.Naces';
            return NacesForm;
        }(Serenity.PrefixedContext));
        Roezec.NacesForm = NacesForm;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var NacesRow;
        (function (NacesRow) {
            NacesRow.idProperty = 'Id';
            NacesRow.nameProperty = 'Actividad';
            NacesRow.localTextPrefix = 'Roezec.Naces';
            NacesRow.lookupKey = 'Roezec.Naces';
            function getLookup() {
                return Q.getLookup('Roezec.Naces');
            }
            NacesRow.getLookup = getLookup;
            NacesRow.deletePermission = 'Roezec:Delete';
            NacesRow.insertPermission = 'Roezec:Insert';
            NacesRow.readPermission = 'Roezec:Read';
            NacesRow.updatePermission = 'Roezec:Modify';
        })(NacesRow = Roezec.NacesRow || (Roezec.NacesRow = {}));
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var NacesService;
        (function (NacesService) {
            NacesService.baseUrl = 'Roezec/Naces';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NacesService[x] = function (r, s, o) {
                    return Q.serviceRequest(NacesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(NacesService = Roezec.NacesService || (Roezec.NacesService = {}));
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RepresentantesForm = /** @class */ (function (_super) {
            __extends(RepresentantesForm, _super);
            function RepresentantesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RepresentantesForm.init) {
                    RepresentantesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.LookupEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(RepresentantesForm, [
                        'TipoDoc', w0,
                        'Doc', w0,
                        'IdRepresentanteFisico', w1,
                        'Nombre', w0,
                        'Direccion', w0,
                        'Cp', w0,
                        'Poblacion', w0,
                        'Provincia', w0,
                        'Pais', w0,
                        'Email', w0,
                        'Telefono', w0,
                        'Descripcion', w0,
                        'IdEmpresa', w2,
                        'FechaAlta', w3,
                        'FechaModificacion', w3,
                        'FechaBaja', w3,
                        'UsrAlta', w0,
                        'UsrModificacion', w0,
                        'UsrBaja', w0,
                        'MotivoBaja', w0
                    ]);
                }
                return _this;
            }
            RepresentantesForm.formKey = 'Roezec.Representantes';
            return RepresentantesForm;
        }(Serenity.PrefixedContext));
        Roezec.RepresentantesForm = RepresentantesForm;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RepresentantesRow;
        (function (RepresentantesRow) {
            RepresentantesRow.idProperty = 'Id';
            RepresentantesRow.nameProperty = 'TipoDoc';
            RepresentantesRow.localTextPrefix = 'Roezec.Representantes';
            RepresentantesRow.deletePermission = 'Roezec:Delete';
            RepresentantesRow.insertPermission = 'Roezec:Insert';
            RepresentantesRow.readPermission = 'Roezec:Read';
            RepresentantesRow.updatePermission = 'Roezec:Modify';
        })(RepresentantesRow = Roezec.RepresentantesRow || (Roezec.RepresentantesRow = {}));
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RepresentantesService;
        (function (RepresentantesService) {
            RepresentantesService.baseUrl = 'Roezec/Representantes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RepresentantesService[x] = function (r, s, o) {
                    return Q.serviceRequest(RepresentantesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RepresentantesService = Roezec.RepresentantesService || (Roezec.RepresentantesService = {}));
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RoezecEmpresasForm = /** @class */ (function (_super) {
            __extends(RoezecEmpresasForm, _super);
            function RoezecEmpresasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoezecEmpresasForm.init) {
                    RoezecEmpresasForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.LookupEditor;
                    Q.initFormType(RoezecEmpresasForm, [
                        'DenominacionSocial', w0,
                        'Cif', w0,
                        'Direccion', w0,
                        'Cp', w0,
                        'Poblacion', w0,
                        'Provincia', w0,
                        'Isla', w0,
                        'NotasMarginales', w0,
                        'AnyoExpediente', w1,
                        'NumExpediente', w1,
                        'Agencia', w1,
                        'Tecnico', w0,
                        'FormaJuridica', w0,
                        'Superficie', w2,
                        'ExentaAreaAcotada', w0,
                        'MotivosExencion', w0,
                        'ObjetivoEmpleo', w2,
                        'ObjetivoInversion', w2,
                        'ObservacionesEmpleo', w0,
                        'ObservacionesInversion', w0,
                        'PreEmpleo', w1,
                        'PreInversion', w1,
                        'TrasEmpleo', w1,
                        'TrasInversion', w1,
                        'FechaAlta', w3,
                        'FechaModificacion', w3,
                        'FechaBaja', w3,
                        'SituacionId', w4,
                        'UsrAlta', w0,
                        'UsrModificacion', w0,
                        'UsrBaja', w0
                    ]);
                }
                return _this;
            }
            RoezecEmpresasForm.formKey = 'Roezec.RoezecEmpresas';
            return RoezecEmpresasForm;
        }(Serenity.PrefixedContext));
        Roezec.RoezecEmpresasForm = RoezecEmpresasForm;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RoezecEmpresasRow;
        (function (RoezecEmpresasRow) {
            RoezecEmpresasRow.idProperty = 'Id';
            RoezecEmpresasRow.nameProperty = 'DenominacionSocial';
            RoezecEmpresasRow.localTextPrefix = 'Roezec.RoezecEmpresas';
            RoezecEmpresasRow.lookupKey = 'Roezec.RoezecEmpresas';
            function getLookup() {
                return Q.getLookup('Roezec.RoezecEmpresas');
            }
            RoezecEmpresasRow.getLookup = getLookup;
            RoezecEmpresasRow.deletePermission = 'Roezec:Delete';
            RoezecEmpresasRow.insertPermission = 'Roezec:Insert';
            RoezecEmpresasRow.readPermission = 'Roezec:Read';
            RoezecEmpresasRow.updatePermission = 'Roezec:Modify';
        })(RoezecEmpresasRow = Roezec.RoezecEmpresasRow || (Roezec.RoezecEmpresasRow = {}));
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RoezecEmpresasService;
        (function (RoezecEmpresasService) {
            RoezecEmpresasService.baseUrl = 'Roezec/RoezecEmpresas';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoezecEmpresasService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoezecEmpresasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoezecEmpresasService = Roezec.RoezecEmpresasService || (Roezec.RoezecEmpresasService = {}));
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RoezecEstadosForm = /** @class */ (function (_super) {
            __extends(RoezecEstadosForm, _super);
            function RoezecEstadosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoezecEstadosForm.init) {
                    RoezecEstadosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoezecEstadosForm, [
                        'Descripcion', w0
                    ]);
                }
                return _this;
            }
            RoezecEstadosForm.formKey = 'Roezec.RoezecEstados';
            return RoezecEstadosForm;
        }(Serenity.PrefixedContext));
        Roezec.RoezecEstadosForm = RoezecEstadosForm;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RoezecEstadosRow;
        (function (RoezecEstadosRow) {
            RoezecEstadosRow.idProperty = 'Codigo';
            RoezecEstadosRow.nameProperty = 'Descripcion';
            RoezecEstadosRow.localTextPrefix = 'Roezec.RoezecEstados';
            RoezecEstadosRow.lookupKey = 'Roezec.RoezecEstados';
            function getLookup() {
                return Q.getLookup('Roezec.RoezecEstados');
            }
            RoezecEstadosRow.getLookup = getLookup;
            RoezecEstadosRow.deletePermission = 'Roezec:Delete';
            RoezecEstadosRow.insertPermission = 'Roezec:Insert';
            RoezecEstadosRow.readPermission = 'Roezec:Read';
            RoezecEstadosRow.updatePermission = 'Roezec:Modify';
        })(RoezecEstadosRow = Roezec.RoezecEstadosRow || (Roezec.RoezecEstadosRow = {}));
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RoezecEstadosService;
        (function (RoezecEstadosService) {
            RoezecEstadosService.baseUrl = 'Roezec/RoezecEstados';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoezecEstadosService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoezecEstadosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoezecEstadosService = Roezec.RoezecEstadosService || (Roezec.RoezecEstadosService = {}));
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var SociosForm = /** @class */ (function (_super) {
            __extends(SociosForm, _super);
            function SociosForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SociosForm.init) {
                    SociosForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(SociosForm, [
                        'TipoDoc', w0,
                        'Doc', w0,
                        'TipoPersona', w0,
                        'Nombre', w0,
                        'Direccion', w0,
                        'Cp', w0,
                        'Poblacion', w0,
                        'Provincia', w0,
                        'Pais', w0,
                        'Email', w0,
                        'Telefono', w0,
                        'Descripcion', w0,
                        'IdEmpresa', w1,
                        'Participacion', w2,
                        'FechaAlta', w3,
                        'FechaModificacion', w3,
                        'FechaBaja', w3,
                        'UsrAlta', w0,
                        'UsrModificacion', w0,
                        'UsrBaja', w0,
                        'MotivoBaja', w0
                    ]);
                }
                return _this;
            }
            SociosForm.formKey = 'Roezec.Socios';
            return SociosForm;
        }(Serenity.PrefixedContext));
        Roezec.SociosForm = SociosForm;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var SociosRow;
        (function (SociosRow) {
            SociosRow.idProperty = 'Id';
            SociosRow.nameProperty = 'TipoDoc';
            SociosRow.localTextPrefix = 'Roezec.Socios';
            SociosRow.deletePermission = 'Roezec:Delete';
            SociosRow.insertPermission = 'Roezec:Insert';
            SociosRow.readPermission = 'Roezec:Read';
            SociosRow.updatePermission = 'Roezec:Modify';
        })(SociosRow = Roezec.SociosRow || (Roezec.SociosRow = {}));
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var SociosService;
        (function (SociosService) {
            SociosService.baseUrl = 'Roezec/Socios';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SociosService[x] = function (r, s, o) {
                    return Q.serviceRequest(SociosService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SociosService = Roezec.SociosService || (Roezec.SociosService = {}));
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Texts;
    (function (Texts) {
        ProyectosZec['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, CuadroMandos: { Capital: { Capital: 1, CapitalId: 1 }, Estados: { Estado: 1, EstadoId: 1 }, Islas: { Isla: 1, IslaId: 1, NombreIsla: 1 }, Prescriptorinversor: { PrescriptorInversor: 1, PrescriptorInversorId: 1 }, Proyectos: { Capital: 1, CapitalId: 1, Captacion: 1, Contacto: 1, Denominacion: 1, Descripcion: 1, Email: 1, EmpleoReal: 1, Empleos: 1, Estado: 1, EstadoId: 1, Expediente: 1, FechaAmpliacion: 1, FechaAutorizacion: 1, FechaBaja: 1, FechaInicio: 1, FechaInscripcion: 1, FechaPresentacion: 1, Inversion: 1, InversionReal: 1, Isla: 1, IslaId: 1, Nace: 1, NombreTecnico: 1, PrescriptorInversor: 1, PrescriptorInversorId: 1, ProyectoId: 1, Sector: 1, SectorId: 1, Subsector: 1, SubsectorId: 1, SubsectorSectorId: 1, Tecnico: 1, TecnicoId: 1, Telefono: 1 }, Sectores: { Sector: 1, SectorId: 1 }, Subsectores: { Sector: 1, SectorId: 1, Subsector: 1, SubsectorId: 1 }, Tecnicos: { NombreTecnico: 1, Tecnico: 1, TecnicoId: 1 } }, Inmovilizado: { Inmovilizados: { Amortizacion: 1, Codigo: 1, Descripcion: 1, Factura: 1, FechaBaja: 1, FechaCompra: 1, Files: 1, GalleryImages: 1, Garantia: 1, InmovilizadoId: 1, NumeroSerie: 1, Pg: 1, Proveedor: 1, ProveedorId: 1, Sede: 1, SedeId: 1, SubTipo: 1, SubTipoInmovilizadoId: 1, Tipo: 1, TipoInmovilizadoId: 1, Ubicacion: 1, Valor: 1, ValorResidual: 1 }, Proveedores: { Contacto: 1, Email: 1, Proveedor: 1, ProveedorId: 1, Telefono: 1 }, Subtiposinmovilizado: { SubTipo: 1, SubTipoInmovilizadoId: 1, TipoInmovilizadoId: 1, TipoInmovilizadoTipo: 1 }, Tiposinmovilizado: { Tipo: 1, TipoInmovilizadoId: 1 } }, Intranet: { Departamentos: { Departamento: 1, DepartamentoId: 1 }, Sedes: { Sede: 1, SedeId: 1 }, Telefonos: { Contrato: 1, CortoMovil: 1, Departamento: 1, DepartamentoId: 1, ExtCorta: 1, Fijo: 1, Movil: 1, Multisim: 1, Nombre: 1, PUK: 1, Sede: 1, SedeId: 1, TelefonoId: 1 } }, Kairos: { Departamentos: { Codigo: 1, CodigoCliente: 1, Descripcion: 1, FechaBorrado: 1, Id: 1, SedeId: 1 }, Diario: { Empleado: 1, Entrada: 1, Fecha: 1, HoraEntrada: 1, HoraSalida: 1, Id: 1, IdDepartamento: 1, IdEmpleado: 1, Salida: 1, Sede: 1, SedeId: 1 }, Extras: { CodigoCliente: 1, Convertidas: 1, Dia: 1, DptoId: 1, Empleado: 1, Estado: 1, Fecha: 1, FechaAceptacionCancelacion: 1, Id: 1, IdAusenciaProgramadaTipo: 1, IdEmpleado: 1, IdHoraExtraCabecera: 1, IdHoraExtraCabeceraCodigo: 1, IdHoraExtraCabeceraCodigoCliente: 1, IdHoraExtraCabeceraDescripcion: 1, IdHoraExtraCabeceraFechaBorrado: 1, MotivoCancelacion: 1, Sede: 1, SedeId: 1, Tipo: 1, TotalHorasExtrasConvertidas: 1, TotalHorasExtrasReales: 1 }, Fichajes: { Anulado: 1, CodigoCliente: 1, Dispositivo: 1, DptoId: 1, Empleado: 1, EntradaSalida: 1, Fecha: 1, FechaHora: 1, Fichaje: 1, GpsAltitud: 1, GpsFechaHora: 1, GpsPosicionLatitud: 1, GpsPosicionLongitud: 1, GpsProveedor: 1, Hora: 1, Id: 1, IdDispositivoModelo: 1, IdDispositivoModeloCodigoCliente: 1, IdDispositivoModeloFabricante: 1, IdDispositivoModeloFechaBorrado: 1, IdDispositivoModeloMac: 1, IdDispositivoModeloMarca: 1, IdDispositivoModeloModelo: 1, IdEmpleado: 1, IdEmpresa: 1, IdTerminal: 1, IdTerminalCodigo: 1, IdTerminalCodigoCliente: 1, IdTerminalDescripcion: 1, IdTerminalDispositivoHuellaDactilar: 1, IdTerminalDispositivoHuellaDactilarDns: 1, IdTerminalDispositivoHuellaDactilarFirmware: 1, IdTerminalDispositivoHuellaDactilarIp: 1, IdTerminalDispositivoHuellaDactilarMarca: 1, IdTerminalDispositivoHuellaDactilarModelo: 1, IdTerminalDispositivoHuellaDactilarNumero: 1, IdTerminalDispositivoHuellaDactilarPuerto: 1, IdTerminalFechaActualizacion: 1, IdTerminalFechaBorrado: 1, IdTerminalIdDepartamento: 1, IdTerminalTipoDispositivo: 1, Modificado: 1, Observaciones: 1, Sede: 1, SedeId: 1, TipoDispositivo: 1, Validado: 1 }, KrsEmpleados: { ClaveAccesoWeb: 1, CodigoCliente: 1, CodigoValidacion: 1, Email: 1, FechaActualizacion: 1, FechaBaja: 1, FechaBorrado: 1, Id: 1, IdDepartamento: 1, IdEmpresa: 1, IdEmpresaFichajeAutomatico: 1, IdHoraExtraCabecera: 1, IdHoraExtraCabeceraCodigo: 1, IdHoraExtraCabeceraCodigoCliente: 1, IdHoraExtraCabeceraDescripcion: 1, IdHoraExtraCabeceraFechaBorrado: 1, Nombre: 1, NumeroTarjetaFichaje: 1, PermiteFichajeAutomatico: 1, PermiteFichajeWeb: 1, PermiteRecordatorio: 1, Pin: 1, ProgramaExternoDescripcion: 1, ProgramaExternoIdEmpleado: 1, SacarFotoFichaje: 1, Tecnico: 1, UsoHorario: 1 }, TiposFichaje: { Id: 1, Tipo: 1 } }, Roezec: { Actividades: { Actividad: 1, Agencia: 1, AnyoExpediente: 1, Cif: 1, Codigo: 1, Cp: 1, Direccion: 1, Empresa: 1, Estado: 1, ExentaAreaAcotada: 1, FechaAlta: 1, FechaBaja: 1, FechaModificacion: 1, FormaJuridica: 1, Id: 1, IdEmpresa: 1, IdNace: 1, Isla: 1, MotivosExencion: 1, NotasMarginales: 1, NumExpediente: 1, ObjetivoEmpleo: 1, ObjetivoInversion: 1, ObservacionesEmpleo: 1, ObservacionesInversion: 1, Poblacion: 1, PreEmpleo: 1, PreInversion: 1, Provincia: 1, SituacionId: 1, Superficie: 1, Tecnico: 1, TrasEmpleo: 1, TrasInversion: 1, UsrAlta: 1, UsrBaja: 1, UsrModificacion: 1 }, Naces: { Actividad: 1, Codigo: 1, FechaAlta: 1, Id: 1, Nace: 1, UsrAlta: 1 }, Representantes: { Agencia: 1, AnyoExpediente: 1, Cif: 1, Cp: 1, Descripcion: 1, Direccion: 1, Doc: 1, Email: 1, Empresa: 1, Estado: 1, ExentaAreaAcotada: 1, FechaAlta: 1, FechaBaja: 1, FechaModificacion: 1, FormaJuridica: 1, Id: 1, IdEmpresa: 1, IdRepresentanteFisico: 1, Isla: 1, MotivoBaja: 1, MotivosExencion: 1, Nombre: 1, NotasMarginales: 1, NumExpediente: 1, ObjetivoEmpleo: 1, ObjetivoInversion: 1, ObservacionesEmpleo: 1, ObservacionesInversion: 1, Pais: 1, Poblacion: 1, PreEmpleo: 1, PreInversion: 1, Provincia: 1, SituacionId: 1, Superficie: 1, Tecnico: 1, Telefono: 1, TipoDoc: 1, TrasEmpleo: 1, TrasInversion: 1, UsrAlta: 1, UsrBaja: 1, UsrModificacion: 1 }, RoezecEmpresas: { Agencia: 1, AnyoExpediente: 1, Cif: 1, Cp: 1, DenominacionSocial: 1, Direccion: 1, Estado: 1, ExentaAreaAcotada: 1, FechaAlta: 1, FechaBaja: 1, FechaModificacion: 1, FormaJuridica: 1, Id: 1, Isla: 1, MotivosExencion: 1, NotasMarginales: 1, NumExpediente: 1, ObjetivoEmpleo: 1, ObjetivoInversion: 1, ObservacionesEmpleo: 1, ObservacionesInversion: 1, Poblacion: 1, PreEmpleo: 1, PreInversion: 1, Provincia: 1, SituacionId: 1, Superficie: 1, Tecnico: 1, TrasEmpleo: 1, TrasInversion: 1, UsrAlta: 1, UsrBaja: 1, UsrModificacion: 1 }, RoezecEstados: { Codigo: 1, Descripcion: 1 }, Socios: { Agencia: 1, AnyoExpediente: 1, Cif: 1, Cp: 1, Descripcion: 1, Direccion: 1, Doc: 1, Email: 1, Empresa: 1, Estado: 1, ExentaAreaAcotada: 1, FechaAlta: 1, FechaBaja: 1, FechaModificacion: 1, FormaJuridica: 1, Id: 1, IdEmpresa: 1, Isla: 1, MotivoBaja: 1, MotivosExencion: 1, Nombre: 1, NotasMarginales: 1, NumExpediente: 1, ObjetivoEmpleo: 1, ObjetivoInversion: 1, ObservacionesEmpleo: 1, ObservacionesInversion: 1, Pais: 1, Participacion: 1, Poblacion: 1, PreEmpleo: 1, PreInversion: 1, Provincia: 1, SituacionId: 1, Superficie: 1, Tecnico: 1, Telefono: 1, TipoDoc: 1, TipoPersona: 1, TrasEmpleo: 1, TrasInversion: 1, UsrAlta: 1, UsrBaja: 1, UsrModificacion: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = ProyectosZec.Texts || (ProyectosZec.Texts = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = ProyectosZec.Authorization || (ProyectosZec.Authorization = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = ProyectosZec.Administration || (ProyectosZec.Administration = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = ProyectosZec.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = ProyectosZec.LanguageList || (ProyectosZec.LanguageList = {}));
})(ProyectosZec || (ProyectosZec = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var ProyectosZec;
(function (ProyectosZec) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('ProyectosZec');
        Serenity.EntityDialog.defaultLanguageList = ProyectosZec.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = ProyectosZec.ScriptInitialization || (ProyectosZec.ScriptInitialization = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: false,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    ProyectosZec.BasicProgressDialog = BasicProgressDialog;
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new ProyectosZec.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = ProyectosZec.DialogUtils || (ProyectosZec.DialogUtils = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: false,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    ProyectosZec.StaticTextBlock = StaticTextBlock;
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = ProyectosZec.Common || (ProyectosZec.Common = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var CapitalDialog = /** @class */ (function (_super) {
            __extends(CapitalDialog, _super);
            function CapitalDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CuadroMandos.CapitalForm(_this.idPrefix);
                return _this;
            }
            CapitalDialog.prototype.getFormKey = function () { return CuadroMandos.CapitalForm.formKey; };
            CapitalDialog.prototype.getIdProperty = function () { return CuadroMandos.CapitalRow.idProperty; };
            CapitalDialog.prototype.getLocalTextPrefix = function () { return CuadroMandos.CapitalRow.localTextPrefix; };
            CapitalDialog.prototype.getNameProperty = function () { return CuadroMandos.CapitalRow.nameProperty; };
            CapitalDialog.prototype.getService = function () { return CuadroMandos.CapitalService.baseUrl; };
            CapitalDialog.prototype.getDeletePermission = function () { return CuadroMandos.CapitalRow.deletePermission; };
            CapitalDialog.prototype.getInsertPermission = function () { return CuadroMandos.CapitalRow.insertPermission; };
            CapitalDialog.prototype.getUpdatePermission = function () { return CuadroMandos.CapitalRow.updatePermission; };
            CapitalDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CapitalDialog);
            return CapitalDialog;
        }(Serenity.EntityDialog));
        CuadroMandos.CapitalDialog = CapitalDialog;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var CapitalGrid = /** @class */ (function (_super) {
            __extends(CapitalGrid, _super);
            function CapitalGrid(container) {
                return _super.call(this, container) || this;
            }
            CapitalGrid.prototype.getColumnsKey = function () { return 'CuadroMandos.Capital'; };
            CapitalGrid.prototype.getDialogType = function () { return CuadroMandos.CapitalDialog; };
            CapitalGrid.prototype.getIdProperty = function () { return CuadroMandos.CapitalRow.idProperty; };
            CapitalGrid.prototype.getInsertPermission = function () { return CuadroMandos.CapitalRow.insertPermission; };
            CapitalGrid.prototype.getLocalTextPrefix = function () { return CuadroMandos.CapitalRow.localTextPrefix; };
            CapitalGrid.prototype.getService = function () { return CuadroMandos.CapitalService.baseUrl; };
            CapitalGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CapitalGrid);
            return CapitalGrid;
        }(Serenity.EntityGrid));
        CuadroMandos.CapitalGrid = CapitalGrid;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var EstadosDialog = /** @class */ (function (_super) {
            __extends(EstadosDialog, _super);
            function EstadosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CuadroMandos.EstadosForm(_this.idPrefix);
                return _this;
            }
            EstadosDialog.prototype.getFormKey = function () { return CuadroMandos.EstadosForm.formKey; };
            EstadosDialog.prototype.getIdProperty = function () { return CuadroMandos.EstadosRow.idProperty; };
            EstadosDialog.prototype.getLocalTextPrefix = function () { return CuadroMandos.EstadosRow.localTextPrefix; };
            EstadosDialog.prototype.getNameProperty = function () { return CuadroMandos.EstadosRow.nameProperty; };
            EstadosDialog.prototype.getService = function () { return CuadroMandos.EstadosService.baseUrl; };
            EstadosDialog.prototype.getDeletePermission = function () { return CuadroMandos.EstadosRow.deletePermission; };
            EstadosDialog.prototype.getInsertPermission = function () { return CuadroMandos.EstadosRow.insertPermission; };
            EstadosDialog.prototype.getUpdatePermission = function () { return CuadroMandos.EstadosRow.updatePermission; };
            EstadosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EstadosDialog);
            return EstadosDialog;
        }(Serenity.EntityDialog));
        CuadroMandos.EstadosDialog = EstadosDialog;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var EstadosGrid = /** @class */ (function (_super) {
            __extends(EstadosGrid, _super);
            function EstadosGrid(container) {
                return _super.call(this, container) || this;
            }
            EstadosGrid.prototype.getColumnsKey = function () { return 'CuadroMandos.Estados'; };
            EstadosGrid.prototype.getDialogType = function () { return CuadroMandos.EstadosDialog; };
            EstadosGrid.prototype.getIdProperty = function () { return CuadroMandos.EstadosRow.idProperty; };
            EstadosGrid.prototype.getInsertPermission = function () { return CuadroMandos.EstadosRow.insertPermission; };
            EstadosGrid.prototype.getLocalTextPrefix = function () { return CuadroMandos.EstadosRow.localTextPrefix; };
            EstadosGrid.prototype.getService = function () { return CuadroMandos.EstadosService.baseUrl; };
            EstadosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EstadosGrid);
            return EstadosGrid;
        }(Serenity.EntityGrid));
        CuadroMandos.EstadosGrid = EstadosGrid;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var IslasDialog = /** @class */ (function (_super) {
            __extends(IslasDialog, _super);
            function IslasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CuadroMandos.IslasForm(_this.idPrefix);
                return _this;
            }
            IslasDialog.prototype.getFormKey = function () { return CuadroMandos.IslasForm.formKey; };
            IslasDialog.prototype.getIdProperty = function () { return CuadroMandos.IslasRow.idProperty; };
            IslasDialog.prototype.getLocalTextPrefix = function () { return CuadroMandos.IslasRow.localTextPrefix; };
            IslasDialog.prototype.getNameProperty = function () { return CuadroMandos.IslasRow.nameProperty; };
            IslasDialog.prototype.getService = function () { return CuadroMandos.IslasService.baseUrl; };
            IslasDialog.prototype.getDeletePermission = function () { return CuadroMandos.IslasRow.deletePermission; };
            IslasDialog.prototype.getInsertPermission = function () { return CuadroMandos.IslasRow.insertPermission; };
            IslasDialog.prototype.getUpdatePermission = function () { return CuadroMandos.IslasRow.updatePermission; };
            IslasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], IslasDialog);
            return IslasDialog;
        }(Serenity.EntityDialog));
        CuadroMandos.IslasDialog = IslasDialog;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var IslasGrid = /** @class */ (function (_super) {
            __extends(IslasGrid, _super);
            function IslasGrid(container) {
                return _super.call(this, container) || this;
            }
            IslasGrid.prototype.getColumnsKey = function () { return 'CuadroMandos.Islas'; };
            IslasGrid.prototype.getDialogType = function () { return CuadroMandos.IslasDialog; };
            IslasGrid.prototype.getIdProperty = function () { return CuadroMandos.IslasRow.idProperty; };
            IslasGrid.prototype.getInsertPermission = function () { return CuadroMandos.IslasRow.insertPermission; };
            IslasGrid.prototype.getLocalTextPrefix = function () { return CuadroMandos.IslasRow.localTextPrefix; };
            IslasGrid.prototype.getService = function () { return CuadroMandos.IslasService.baseUrl; };
            IslasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], IslasGrid);
            return IslasGrid;
        }(Serenity.EntityGrid));
        CuadroMandos.IslasGrid = IslasGrid;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var PrescriptorinversorDialog = /** @class */ (function (_super) {
            __extends(PrescriptorinversorDialog, _super);
            function PrescriptorinversorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CuadroMandos.PrescriptorinversorForm(_this.idPrefix);
                return _this;
            }
            PrescriptorinversorDialog.prototype.getFormKey = function () { return CuadroMandos.PrescriptorinversorForm.formKey; };
            PrescriptorinversorDialog.prototype.getIdProperty = function () { return CuadroMandos.PrescriptorinversorRow.idProperty; };
            PrescriptorinversorDialog.prototype.getLocalTextPrefix = function () { return CuadroMandos.PrescriptorinversorRow.localTextPrefix; };
            PrescriptorinversorDialog.prototype.getNameProperty = function () { return CuadroMandos.PrescriptorinversorRow.nameProperty; };
            PrescriptorinversorDialog.prototype.getService = function () { return CuadroMandos.PrescriptorinversorService.baseUrl; };
            PrescriptorinversorDialog.prototype.getDeletePermission = function () { return CuadroMandos.PrescriptorinversorRow.deletePermission; };
            PrescriptorinversorDialog.prototype.getInsertPermission = function () { return CuadroMandos.PrescriptorinversorRow.insertPermission; };
            PrescriptorinversorDialog.prototype.getUpdatePermission = function () { return CuadroMandos.PrescriptorinversorRow.updatePermission; };
            PrescriptorinversorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PrescriptorinversorDialog);
            return PrescriptorinversorDialog;
        }(Serenity.EntityDialog));
        CuadroMandos.PrescriptorinversorDialog = PrescriptorinversorDialog;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var PrescriptorinversorGrid = /** @class */ (function (_super) {
            __extends(PrescriptorinversorGrid, _super);
            function PrescriptorinversorGrid(container) {
                return _super.call(this, container) || this;
            }
            PrescriptorinversorGrid.prototype.getColumnsKey = function () { return 'CuadroMandos.Prescriptorinversor'; };
            PrescriptorinversorGrid.prototype.getDialogType = function () { return CuadroMandos.PrescriptorinversorDialog; };
            PrescriptorinversorGrid.prototype.getIdProperty = function () { return CuadroMandos.PrescriptorinversorRow.idProperty; };
            PrescriptorinversorGrid.prototype.getInsertPermission = function () { return CuadroMandos.PrescriptorinversorRow.insertPermission; };
            PrescriptorinversorGrid.prototype.getLocalTextPrefix = function () { return CuadroMandos.PrescriptorinversorRow.localTextPrefix; };
            PrescriptorinversorGrid.prototype.getService = function () { return CuadroMandos.PrescriptorinversorService.baseUrl; };
            PrescriptorinversorGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PrescriptorinversorGrid);
            return PrescriptorinversorGrid;
        }(Serenity.EntityGrid));
        CuadroMandos.PrescriptorinversorGrid = PrescriptorinversorGrid;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var PresentadasDialog = /** @class */ (function (_super) {
            __extends(PresentadasDialog, _super);
            function PresentadasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CuadroMandos.ProyectosForm(_this.idPrefix);
                return _this;
            }
            PresentadasDialog.prototype.getFormKey = function () { return CuadroMandos.ProyectosForm.formKey; };
            PresentadasDialog.prototype.getIdProperty = function () { return CuadroMandos.ProyectosRow.idProperty; };
            PresentadasDialog.prototype.getLocalTextPrefix = function () { return CuadroMandos.ProyectosRow.localTextPrefix; };
            PresentadasDialog.prototype.getNameProperty = function () { return CuadroMandos.ProyectosRow.nameProperty; };
            PresentadasDialog.prototype.getService = function () { return CuadroMandos.PresentadasService.baseUrl; };
            PresentadasDialog.prototype.getDeletePermission = function () { return CuadroMandos.ProyectosRow.deletePermission; };
            PresentadasDialog.prototype.getInsertPermission = function () { return CuadroMandos.ProyectosRow.insertPermission; };
            PresentadasDialog.prototype.getUpdatePermission = function () { return CuadroMandos.ProyectosRow.updatePermission; };
            PresentadasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PresentadasDialog);
            return PresentadasDialog;
        }(Serenity.EntityDialog));
        CuadroMandos.PresentadasDialog = PresentadasDialog;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var PresentadasGrid = /** @class */ (function (_super) {
            __extends(PresentadasGrid, _super);
            function PresentadasGrid(container) {
                return _super.call(this, container) || this;
            }
            PresentadasGrid.prototype.getColumnsKey = function () { return 'CuadroMandos.Presentadas'; };
            PresentadasGrid.prototype.getDialogType = function () { return CuadroMandos.PresentadasDialog; };
            PresentadasGrid.prototype.getIdProperty = function () { return CuadroMandos.ProyectosRow.idProperty; };
            PresentadasGrid.prototype.getInsertPermission = function () { return CuadroMandos.ProyectosRow.insertPermission; };
            PresentadasGrid.prototype.getLocalTextPrefix = function () { return CuadroMandos.ProyectosRow.localTextPrefix; };
            PresentadasGrid.prototype.getService = function () { return CuadroMandos.PresentadasService.baseUrl; };
            // Añadidos
            // Primero campo de ordenación por defecto en este caso, fecha de presentación
            PresentadasGrid.prototype.getDefaultSortBy = function () {
                return ["FechaPresentacion" /* FechaPresentacion */];
            };
            // Agrupar y sumar 
            PresentadasGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum("Empleos" /* Empleos */),
                        new Slick.Aggregators.Sum("EmpleoReal" /* EmpleoReal */),
                        new Slick.Aggregators.Sum("Inversion" /* Inversion */),
                        new Slick.Aggregators.Sum("InversionReal" /* InversionReal */)
                    ]
                });
                return grid;
            };
            // Añadimos la fila de pie para los totales
            PresentadasGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            PresentadasGrid.prototype.usePager = function () {
                return false;
            };
            // Ahora los botones. Quitamos el botón de añadir y ponemos los de Excel, Pdf y Agrupar por técnico
            PresentadasGrid.prototype.getButtons = function () {
                var _this = this;
                // call base method to get list of buttons
                // by default, base entity grid adds a few buttons, 
                // add, refresh, column selection in order.
                var buttons = _super.prototype.getButtons.call(this);
                // METHOD 3 - recommended
                // remove by splicing, but this time find button index
                // by its css class. it is the best and safer method
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                // Ahora añadimos el resto de botones
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'CuadroMandos/Proyectos/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                buttons.push({
                    title: 'Técnico',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Técnico: ' + x.value + ' (' + x.count + ' Proyectos)'; },
                            getter: "Tecnico" /* Tecnico */
                        }]); }
                });
                buttons.push({
                    title: 'Desagrupar',
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                return buttons;
            };
            PresentadasGrid.prototype.onViewSubmit = function () {
                // only continue if base class returns true (didn't cancel request)
                if (!_super.prototype.onViewSubmit.call(this)) {
                    return false;
                }
                // view object is the data source for grid (SlickRemoteView)
                // this is an EntityGrid so its Params object is a ListRequest
                var request = this.view.params;
                // list request has a Criteria parameter
                // we AND criteria here to existing one because 
                // otherwise we might clear filter set by 
                // an edit filter dialog if any.
                request.Criteria = Serenity.Criteria.and(request.Criteria, [['FechaPresentacion'], '>', '1900-01-01']);
                // TypeScript doesn't support operator overloading
                // so we had to use array syntax above to build criteria.
                // Make sure you write
                // [['Field'], '>', 10] (which means field A is greater than 10)
                // not 
                // ['A', '>', 10] (which means string 'A' is greater than 10
                return true;
            };
            PresentadasGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], PresentadasGrid);
            return PresentadasGrid;
        }(Serenity.EntityGrid));
        CuadroMandos.PresentadasGrid = PresentadasGrid;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var ProyectosDialog = /** @class */ (function (_super) {
            __extends(ProyectosDialog, _super);
            function ProyectosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CuadroMandos.ProyectosForm(_this.idPrefix);
                return _this;
            }
            ProyectosDialog.prototype.getFormKey = function () { return CuadroMandos.ProyectosForm.formKey; };
            ProyectosDialog.prototype.getIdProperty = function () { return CuadroMandos.ProyectosRow.idProperty; };
            ProyectosDialog.prototype.getLocalTextPrefix = function () { return CuadroMandos.ProyectosRow.localTextPrefix; };
            ProyectosDialog.prototype.getNameProperty = function () { return CuadroMandos.ProyectosRow.nameProperty; };
            ProyectosDialog.prototype.getService = function () { return CuadroMandos.ProyectosService.baseUrl; };
            ProyectosDialog.prototype.getDeletePermission = function () { return CuadroMandos.ProyectosRow.deletePermission; };
            ProyectosDialog.prototype.getInsertPermission = function () { return CuadroMandos.ProyectosRow.insertPermission; };
            ProyectosDialog.prototype.getUpdatePermission = function () { return CuadroMandos.ProyectosRow.updatePermission; };
            ProyectosDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProyectosDialog);
            return ProyectosDialog;
        }(Serenity.EntityDialog));
        CuadroMandos.ProyectosDialog = ProyectosDialog;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var ProyectosGrid = /** @class */ (function (_super) {
            __extends(ProyectosGrid, _super);
            function ProyectosGrid(container) {
                return _super.call(this, container) || this;
            }
            ProyectosGrid.prototype.getColumnsKey = function () { return 'CuadroMandos.Proyectos'; };
            ProyectosGrid.prototype.getDialogType = function () { return CuadroMandos.ProyectosDialog; };
            ProyectosGrid.prototype.getIdProperty = function () { return CuadroMandos.ProyectosRow.idProperty; };
            ProyectosGrid.prototype.getInsertPermission = function () { return CuadroMandos.ProyectosRow.insertPermission; };
            ProyectosGrid.prototype.getLocalTextPrefix = function () { return CuadroMandos.ProyectosRow.localTextPrefix; };
            ProyectosGrid.prototype.getService = function () { return CuadroMandos.ProyectosService.baseUrl; };
            // Añadidos
            // Primero campo de ordenación por defecto
            ProyectosGrid.prototype.getDefaultSortBy = function () {
                return ["ProyectoId" /* ProyectoId */];
            };
            // Agrupar y sumar 
            ProyectosGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum("Empleos" /* Empleos */),
                        new Slick.Aggregators.Sum("EmpleoReal" /* EmpleoReal */),
                        new Slick.Aggregators.Sum("Inversion" /* Inversion */),
                        new Slick.Aggregators.Sum("InversionReal" /* InversionReal */)
                    ]
                });
                return grid;
            };
            ProyectosGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            ProyectosGrid.prototype.usePager = function () {
                return false;
            };
            // Botones Excel y Pdf
            ProyectosGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'CuadroMandos/Proyectos/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                buttons.push({
                    title: 'Técnico',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Técnico: ' + x.value + ' (' + x.count + ' Proyectos)'; },
                            getter: "Tecnico" /* Tecnico */
                        }]); }
                });
                buttons.push({
                    title: 'Desagrupar',
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                return buttons;
                // Fin añadidos
            };
            ProyectosGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], ProyectosGrid);
            return ProyectosGrid;
        }(Serenity.EntityGrid));
        CuadroMandos.ProyectosGrid = ProyectosGrid;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var SectoresDialog = /** @class */ (function (_super) {
            __extends(SectoresDialog, _super);
            function SectoresDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CuadroMandos.SectoresForm(_this.idPrefix);
                return _this;
            }
            SectoresDialog.prototype.getFormKey = function () { return CuadroMandos.SectoresForm.formKey; };
            SectoresDialog.prototype.getIdProperty = function () { return CuadroMandos.SectoresRow.idProperty; };
            SectoresDialog.prototype.getLocalTextPrefix = function () { return CuadroMandos.SectoresRow.localTextPrefix; };
            SectoresDialog.prototype.getNameProperty = function () { return CuadroMandos.SectoresRow.nameProperty; };
            SectoresDialog.prototype.getService = function () { return CuadroMandos.SectoresService.baseUrl; };
            SectoresDialog.prototype.getDeletePermission = function () { return CuadroMandos.SectoresRow.deletePermission; };
            SectoresDialog.prototype.getInsertPermission = function () { return CuadroMandos.SectoresRow.insertPermission; };
            SectoresDialog.prototype.getUpdatePermission = function () { return CuadroMandos.SectoresRow.updatePermission; };
            SectoresDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SectoresDialog);
            return SectoresDialog;
        }(Serenity.EntityDialog));
        CuadroMandos.SectoresDialog = SectoresDialog;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var SectoresGrid = /** @class */ (function (_super) {
            __extends(SectoresGrid, _super);
            function SectoresGrid(container) {
                return _super.call(this, container) || this;
            }
            SectoresGrid.prototype.getColumnsKey = function () { return 'CuadroMandos.Sectores'; };
            SectoresGrid.prototype.getDialogType = function () { return CuadroMandos.SectoresDialog; };
            SectoresGrid.prototype.getIdProperty = function () { return CuadroMandos.SectoresRow.idProperty; };
            SectoresGrid.prototype.getInsertPermission = function () { return CuadroMandos.SectoresRow.insertPermission; };
            SectoresGrid.prototype.getLocalTextPrefix = function () { return CuadroMandos.SectoresRow.localTextPrefix; };
            SectoresGrid.prototype.getService = function () { return CuadroMandos.SectoresService.baseUrl; };
            // Añadidos
            // Primero campo de ordenación por defecto
            SectoresGrid.prototype.getDefaultSortBy = function () {
                return ["SectorId" /* SectorId */];
            };
            // Botones Excel y Pdf
            SectoresGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'CuadroMandos/Sectores/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
                // Fin añadidos
            };
            SectoresGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], SectoresGrid);
            return SectoresGrid;
        }(Serenity.EntityGrid));
        CuadroMandos.SectoresGrid = SectoresGrid;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var SubsectoresDialog = /** @class */ (function (_super) {
            __extends(SubsectoresDialog, _super);
            function SubsectoresDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CuadroMandos.SubsectoresForm(_this.idPrefix);
                return _this;
            }
            SubsectoresDialog.prototype.getFormKey = function () { return CuadroMandos.SubsectoresForm.formKey; };
            SubsectoresDialog.prototype.getIdProperty = function () { return CuadroMandos.SubsectoresRow.idProperty; };
            SubsectoresDialog.prototype.getLocalTextPrefix = function () { return CuadroMandos.SubsectoresRow.localTextPrefix; };
            SubsectoresDialog.prototype.getNameProperty = function () { return CuadroMandos.SubsectoresRow.nameProperty; };
            SubsectoresDialog.prototype.getService = function () { return CuadroMandos.SubsectoresService.baseUrl; };
            SubsectoresDialog.prototype.getDeletePermission = function () { return CuadroMandos.SubsectoresRow.deletePermission; };
            SubsectoresDialog.prototype.getInsertPermission = function () { return CuadroMandos.SubsectoresRow.insertPermission; };
            SubsectoresDialog.prototype.getUpdatePermission = function () { return CuadroMandos.SubsectoresRow.updatePermission; };
            SubsectoresDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SubsectoresDialog);
            return SubsectoresDialog;
        }(Serenity.EntityDialog));
        CuadroMandos.SubsectoresDialog = SubsectoresDialog;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var SubsectoresGrid = /** @class */ (function (_super) {
            __extends(SubsectoresGrid, _super);
            function SubsectoresGrid(container) {
                return _super.call(this, container) || this;
            }
            SubsectoresGrid.prototype.getColumnsKey = function () { return 'CuadroMandos.Subsectores'; };
            SubsectoresGrid.prototype.getDialogType = function () { return CuadroMandos.SubsectoresDialog; };
            SubsectoresGrid.prototype.getIdProperty = function () { return CuadroMandos.SubsectoresRow.idProperty; };
            SubsectoresGrid.prototype.getInsertPermission = function () { return CuadroMandos.SubsectoresRow.insertPermission; };
            SubsectoresGrid.prototype.getLocalTextPrefix = function () { return CuadroMandos.SubsectoresRow.localTextPrefix; };
            SubsectoresGrid.prototype.getService = function () { return CuadroMandos.SubsectoresService.baseUrl; };
            // Añadidos
            // Primero campo de ordenación por defecto
            SubsectoresGrid.prototype.getDefaultSortBy = function () {
                return ["SubsectorId" /* SubsectorId */];
            };
            // Botones Excel y Pdf
            SubsectoresGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'CuadroMandos/Subsectores/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
                // Fin añadidos
            };
            SubsectoresGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido 
            ], SubsectoresGrid);
            return SubsectoresGrid;
        }(Serenity.EntityGrid));
        CuadroMandos.SubsectoresGrid = SubsectoresGrid;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var TecnicosDialog = /** @class */ (function (_super) {
            __extends(TecnicosDialog, _super);
            function TecnicosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CuadroMandos.TecnicosForm(_this.idPrefix);
                return _this;
            }
            TecnicosDialog.prototype.getFormKey = function () { return CuadroMandos.TecnicosForm.formKey; };
            TecnicosDialog.prototype.getIdProperty = function () { return CuadroMandos.TecnicosRow.idProperty; };
            TecnicosDialog.prototype.getLocalTextPrefix = function () { return CuadroMandos.TecnicosRow.localTextPrefix; };
            TecnicosDialog.prototype.getNameProperty = function () { return CuadroMandos.TecnicosRow.nameProperty; };
            TecnicosDialog.prototype.getService = function () { return CuadroMandos.TecnicosService.baseUrl; };
            TecnicosDialog.prototype.getDeletePermission = function () { return CuadroMandos.TecnicosRow.deletePermission; };
            TecnicosDialog.prototype.getInsertPermission = function () { return CuadroMandos.TecnicosRow.insertPermission; };
            TecnicosDialog.prototype.getUpdatePermission = function () { return CuadroMandos.TecnicosRow.updatePermission; };
            TecnicosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TecnicosDialog);
            return TecnicosDialog;
        }(Serenity.EntityDialog));
        CuadroMandos.TecnicosDialog = TecnicosDialog;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var CuadroMandos;
    (function (CuadroMandos) {
        var TecnicosGrid = /** @class */ (function (_super) {
            __extends(TecnicosGrid, _super);
            function TecnicosGrid(container) {
                return _super.call(this, container) || this;
            }
            TecnicosGrid.prototype.getColumnsKey = function () { return 'CuadroMandos.Tecnicos'; };
            TecnicosGrid.prototype.getDialogType = function () { return CuadroMandos.TecnicosDialog; };
            TecnicosGrid.prototype.getIdProperty = function () { return CuadroMandos.TecnicosRow.idProperty; };
            TecnicosGrid.prototype.getInsertPermission = function () { return CuadroMandos.TecnicosRow.insertPermission; };
            TecnicosGrid.prototype.getLocalTextPrefix = function () { return CuadroMandos.TecnicosRow.localTextPrefix; };
            TecnicosGrid.prototype.getService = function () { return CuadroMandos.TecnicosService.baseUrl; };
            TecnicosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TecnicosGrid);
            return TecnicosGrid;
        }(Serenity.EntityGrid));
        CuadroMandos.TecnicosGrid = TecnicosGrid;
    })(CuadroMandos = ProyectosZec.CuadroMandos || (ProyectosZec.CuadroMandos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var InmovilizadosDialog = /** @class */ (function (_super) {
            __extends(InmovilizadosDialog, _super);
            function InmovilizadosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inmovilizado.InmovilizadosForm(_this.idPrefix);
                return _this;
            }
            InmovilizadosDialog.prototype.getFormKey = function () { return Inmovilizado.InmovilizadosForm.formKey; };
            InmovilizadosDialog.prototype.getIdProperty = function () { return Inmovilizado.InmovilizadosRow.idProperty; };
            InmovilizadosDialog.prototype.getLocalTextPrefix = function () { return Inmovilizado.InmovilizadosRow.localTextPrefix; };
            InmovilizadosDialog.prototype.getNameProperty = function () { return Inmovilizado.InmovilizadosRow.nameProperty; };
            InmovilizadosDialog.prototype.getService = function () { return Inmovilizado.InmovilizadosService.baseUrl; };
            InmovilizadosDialog.prototype.getDeletePermission = function () { return Inmovilizado.InmovilizadosRow.deletePermission; };
            InmovilizadosDialog.prototype.getInsertPermission = function () { return Inmovilizado.InmovilizadosRow.insertPermission; };
            InmovilizadosDialog.prototype.getUpdatePermission = function () { return Inmovilizado.InmovilizadosRow.updatePermission; };
            InmovilizadosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InmovilizadosDialog);
            return InmovilizadosDialog;
        }(Serenity.EntityDialog));
        Inmovilizado.InmovilizadosDialog = InmovilizadosDialog;
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var InmovilizadosGrid = /** @class */ (function (_super) {
            __extends(InmovilizadosGrid, _super);
            function InmovilizadosGrid(container) {
                return _super.call(this, container) || this;
            }
            InmovilizadosGrid.prototype.getColumnsKey = function () { return 'Inmovilizado.Inmovilizados'; };
            InmovilizadosGrid.prototype.getDialogType = function () { return Inmovilizado.InmovilizadosDialog; };
            InmovilizadosGrid.prototype.getIdProperty = function () { return Inmovilizado.InmovilizadosRow.idProperty; };
            InmovilizadosGrid.prototype.getInsertPermission = function () { return Inmovilizado.InmovilizadosRow.insertPermission; };
            InmovilizadosGrid.prototype.getLocalTextPrefix = function () { return Inmovilizado.InmovilizadosRow.localTextPrefix; };
            InmovilizadosGrid.prototype.getService = function () { return Inmovilizado.InmovilizadosService.baseUrl; };
            // Agrupar y sumar 
            InmovilizadosGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum("Valor" /* Valor */),
                        new Slick.Aggregators.Sum("ValorResidual" /* ValorResidual */)
                    ]
                });
                // Declaramos que el Grid puedes seleccionar fila
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            InmovilizadosGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                // Mostrar pie de página
                opt.showFooterRow = true;
                // Fin pie de página
                // Fila Seleccionable
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                // Fin Fila Seleccionable
                return opt;
            };
            InmovilizadosGrid.prototype.usePager = function () {
                return false;
            };
            InmovilizadosGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                // Botones Excel y Pdf
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Inmovilizado/Inmovilizados/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                buttons.push({
                    title: 'SubTipo',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Subtipo: ' + x.value + ' (' + x.count + ' Inmovilizados)'; },
                            getter: "SubTipo" /* SubTipo */
                        }]); }
                });
                buttons.push({
                    title: 'Desagrupar',
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                return buttons;
                // Fin añadidos
            };
            /**
     * We override getColumns() to be able to add a custom CSS class to UnitPrice
     * We could also add this class in ProductColumns.cs but didn't want to modify
     * it solely for this sample.
     */
            InmovilizadosGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                // adding a specific css class to UnitPrice column, 
                // to be able to format cell with a different background
                Q.first(columns, function (x) { return x.field == "ValorResidual" /* ValorResidual */; }).cssClass += " col-unit-price";
                return columns;
            };
            /**
     * This method is called for all rows
     * @param item Data item for current row
     * @param index Index of the row in grid
     */
            InmovilizadosGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.FechaBaja != null)
                    klass += " discontinued";
                else if (item.ValorResidual <= 0)
                    klass += " out-of-stock";
                return Q.trimToNull(klass);
            };
            InmovilizadosGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], InmovilizadosGrid);
            return InmovilizadosGrid;
        }(Serenity.EntityGrid));
        Inmovilizado.InmovilizadosGrid = InmovilizadosGrid;
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var ProveedoresDialog = /** @class */ (function (_super) {
            __extends(ProveedoresDialog, _super);
            function ProveedoresDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inmovilizado.ProveedoresForm(_this.idPrefix);
                return _this;
            }
            ProveedoresDialog.prototype.getFormKey = function () { return Inmovilizado.ProveedoresForm.formKey; };
            ProveedoresDialog.prototype.getIdProperty = function () { return Inmovilizado.ProveedoresRow.idProperty; };
            ProveedoresDialog.prototype.getLocalTextPrefix = function () { return Inmovilizado.ProveedoresRow.localTextPrefix; };
            ProveedoresDialog.prototype.getNameProperty = function () { return Inmovilizado.ProveedoresRow.nameProperty; };
            ProveedoresDialog.prototype.getService = function () { return Inmovilizado.ProveedoresService.baseUrl; };
            ProveedoresDialog.prototype.getDeletePermission = function () { return Inmovilizado.ProveedoresRow.deletePermission; };
            ProveedoresDialog.prototype.getInsertPermission = function () { return Inmovilizado.ProveedoresRow.insertPermission; };
            ProveedoresDialog.prototype.getUpdatePermission = function () { return Inmovilizado.ProveedoresRow.updatePermission; };
            ProveedoresDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProveedoresDialog);
            return ProveedoresDialog;
        }(Serenity.EntityDialog));
        Inmovilizado.ProveedoresDialog = ProveedoresDialog;
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var ProveedoresGrid = /** @class */ (function (_super) {
            __extends(ProveedoresGrid, _super);
            function ProveedoresGrid(container) {
                return _super.call(this, container) || this;
            }
            ProveedoresGrid.prototype.getColumnsKey = function () { return 'Inmovilizado.Proveedores'; };
            ProveedoresGrid.prototype.getDialogType = function () { return Inmovilizado.ProveedoresDialog; };
            ProveedoresGrid.prototype.getIdProperty = function () { return Inmovilizado.ProveedoresRow.idProperty; };
            ProveedoresGrid.prototype.getInsertPermission = function () { return Inmovilizado.ProveedoresRow.insertPermission; };
            ProveedoresGrid.prototype.getLocalTextPrefix = function () { return Inmovilizado.ProveedoresRow.localTextPrefix; };
            ProveedoresGrid.prototype.getService = function () { return Inmovilizado.ProveedoresService.baseUrl; };
            ProveedoresGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                // Botones Excel y Pdf
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Inmovilizado/Proveedores/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
                // Fin añadidos
            };
            ProveedoresGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProveedoresGrid);
            return ProveedoresGrid;
        }(Serenity.EntityGrid));
        Inmovilizado.ProveedoresGrid = ProveedoresGrid;
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var SubtiposinmovilizadoDialog = /** @class */ (function (_super) {
            __extends(SubtiposinmovilizadoDialog, _super);
            function SubtiposinmovilizadoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inmovilizado.SubtiposinmovilizadoForm(_this.idPrefix);
                return _this;
            }
            SubtiposinmovilizadoDialog.prototype.getFormKey = function () { return Inmovilizado.SubtiposinmovilizadoForm.formKey; };
            SubtiposinmovilizadoDialog.prototype.getIdProperty = function () { return Inmovilizado.SubtiposinmovilizadoRow.idProperty; };
            SubtiposinmovilizadoDialog.prototype.getLocalTextPrefix = function () { return Inmovilizado.SubtiposinmovilizadoRow.localTextPrefix; };
            SubtiposinmovilizadoDialog.prototype.getNameProperty = function () { return Inmovilizado.SubtiposinmovilizadoRow.nameProperty; };
            SubtiposinmovilizadoDialog.prototype.getService = function () { return Inmovilizado.SubtiposinmovilizadoService.baseUrl; };
            SubtiposinmovilizadoDialog.prototype.getDeletePermission = function () { return Inmovilizado.SubtiposinmovilizadoRow.deletePermission; };
            SubtiposinmovilizadoDialog.prototype.getInsertPermission = function () { return Inmovilizado.SubtiposinmovilizadoRow.insertPermission; };
            SubtiposinmovilizadoDialog.prototype.getUpdatePermission = function () { return Inmovilizado.SubtiposinmovilizadoRow.updatePermission; };
            SubtiposinmovilizadoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SubtiposinmovilizadoDialog);
            return SubtiposinmovilizadoDialog;
        }(Serenity.EntityDialog));
        Inmovilizado.SubtiposinmovilizadoDialog = SubtiposinmovilizadoDialog;
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var SubtiposinmovilizadoGrid = /** @class */ (function (_super) {
            __extends(SubtiposinmovilizadoGrid, _super);
            function SubtiposinmovilizadoGrid(container) {
                return _super.call(this, container) || this;
            }
            SubtiposinmovilizadoGrid.prototype.getColumnsKey = function () { return 'Inmovilizado.Subtiposinmovilizado'; };
            SubtiposinmovilizadoGrid.prototype.getDialogType = function () { return Inmovilizado.SubtiposinmovilizadoDialog; };
            SubtiposinmovilizadoGrid.prototype.getIdProperty = function () { return Inmovilizado.SubtiposinmovilizadoRow.idProperty; };
            SubtiposinmovilizadoGrid.prototype.getInsertPermission = function () { return Inmovilizado.SubtiposinmovilizadoRow.insertPermission; };
            SubtiposinmovilizadoGrid.prototype.getLocalTextPrefix = function () { return Inmovilizado.SubtiposinmovilizadoRow.localTextPrefix; };
            SubtiposinmovilizadoGrid.prototype.getService = function () { return Inmovilizado.SubtiposinmovilizadoService.baseUrl; };
            SubtiposinmovilizadoGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Inmovilizado/Subtiposinmovilizados/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
                // Fin añadidos
            };
            SubtiposinmovilizadoGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], SubtiposinmovilizadoGrid);
            return SubtiposinmovilizadoGrid;
        }(Serenity.EntityGrid));
        Inmovilizado.SubtiposinmovilizadoGrid = SubtiposinmovilizadoGrid;
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var TiposinmovilizadoDialog = /** @class */ (function (_super) {
            __extends(TiposinmovilizadoDialog, _super);
            function TiposinmovilizadoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inmovilizado.TiposinmovilizadoForm(_this.idPrefix);
                return _this;
            }
            TiposinmovilizadoDialog.prototype.getFormKey = function () { return Inmovilizado.TiposinmovilizadoForm.formKey; };
            TiposinmovilizadoDialog.prototype.getIdProperty = function () { return Inmovilizado.TiposinmovilizadoRow.idProperty; };
            TiposinmovilizadoDialog.prototype.getLocalTextPrefix = function () { return Inmovilizado.TiposinmovilizadoRow.localTextPrefix; };
            TiposinmovilizadoDialog.prototype.getNameProperty = function () { return Inmovilizado.TiposinmovilizadoRow.nameProperty; };
            TiposinmovilizadoDialog.prototype.getService = function () { return Inmovilizado.TiposinmovilizadoService.baseUrl; };
            TiposinmovilizadoDialog.prototype.getDeletePermission = function () { return Inmovilizado.TiposinmovilizadoRow.deletePermission; };
            TiposinmovilizadoDialog.prototype.getInsertPermission = function () { return Inmovilizado.TiposinmovilizadoRow.insertPermission; };
            TiposinmovilizadoDialog.prototype.getUpdatePermission = function () { return Inmovilizado.TiposinmovilizadoRow.updatePermission; };
            TiposinmovilizadoDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TiposinmovilizadoDialog);
            return TiposinmovilizadoDialog;
        }(Serenity.EntityDialog));
        Inmovilizado.TiposinmovilizadoDialog = TiposinmovilizadoDialog;
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Inmovilizado;
    (function (Inmovilizado) {
        var TiposinmovilizadoGrid = /** @class */ (function (_super) {
            __extends(TiposinmovilizadoGrid, _super);
            function TiposinmovilizadoGrid(container) {
                return _super.call(this, container) || this;
            }
            TiposinmovilizadoGrid.prototype.getColumnsKey = function () { return 'Inmovilizado.Tiposinmovilizado'; };
            TiposinmovilizadoGrid.prototype.getDialogType = function () { return Inmovilizado.TiposinmovilizadoDialog; };
            TiposinmovilizadoGrid.prototype.getIdProperty = function () { return Inmovilizado.TiposinmovilizadoRow.idProperty; };
            TiposinmovilizadoGrid.prototype.getInsertPermission = function () { return Inmovilizado.TiposinmovilizadoRow.insertPermission; };
            TiposinmovilizadoGrid.prototype.getLocalTextPrefix = function () { return Inmovilizado.TiposinmovilizadoRow.localTextPrefix; };
            TiposinmovilizadoGrid.prototype.getService = function () { return Inmovilizado.TiposinmovilizadoService.baseUrl; };
            TiposinmovilizadoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TiposinmovilizadoGrid);
            return TiposinmovilizadoGrid;
        }(Serenity.EntityGrid));
        Inmovilizado.TiposinmovilizadoGrid = TiposinmovilizadoGrid;
    })(Inmovilizado = ProyectosZec.Inmovilizado || (ProyectosZec.Inmovilizado = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var DepartamentosDialog = /** @class */ (function (_super) {
            __extends(DepartamentosDialog, _super);
            function DepartamentosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Intranet.DepartamentosForm(_this.idPrefix);
                return _this;
            }
            DepartamentosDialog.prototype.getFormKey = function () { return Intranet.DepartamentosForm.formKey; };
            DepartamentosDialog.prototype.getIdProperty = function () { return Intranet.DepartamentosRow.idProperty; };
            DepartamentosDialog.prototype.getLocalTextPrefix = function () { return Intranet.DepartamentosRow.localTextPrefix; };
            DepartamentosDialog.prototype.getNameProperty = function () { return Intranet.DepartamentosRow.nameProperty; };
            DepartamentosDialog.prototype.getService = function () { return Intranet.DepartamentosService.baseUrl; };
            DepartamentosDialog.prototype.getDeletePermission = function () { return Intranet.DepartamentosRow.deletePermission; };
            DepartamentosDialog.prototype.getInsertPermission = function () { return Intranet.DepartamentosRow.insertPermission; };
            DepartamentosDialog.prototype.getUpdatePermission = function () { return Intranet.DepartamentosRow.updatePermission; };
            DepartamentosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartamentosDialog);
            return DepartamentosDialog;
        }(Serenity.EntityDialog));
        Intranet.DepartamentosDialog = DepartamentosDialog;
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var DepartamentosGrid = /** @class */ (function (_super) {
            __extends(DepartamentosGrid, _super);
            function DepartamentosGrid(container) {
                return _super.call(this, container) || this;
            }
            DepartamentosGrid.prototype.getColumnsKey = function () { return 'Intranet.Departamentos'; };
            DepartamentosGrid.prototype.getDialogType = function () { return Intranet.DepartamentosDialog; };
            DepartamentosGrid.prototype.getIdProperty = function () { return Intranet.DepartamentosRow.idProperty; };
            DepartamentosGrid.prototype.getInsertPermission = function () { return Intranet.DepartamentosRow.insertPermission; };
            DepartamentosGrid.prototype.getLocalTextPrefix = function () { return Intranet.DepartamentosRow.localTextPrefix; };
            DepartamentosGrid.prototype.getService = function () { return Intranet.DepartamentosService.baseUrl; };
            DepartamentosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartamentosGrid);
            return DepartamentosGrid;
        }(Serenity.EntityGrid));
        Intranet.DepartamentosGrid = DepartamentosGrid;
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var SedesDialog = /** @class */ (function (_super) {
            __extends(SedesDialog, _super);
            function SedesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Intranet.SedesForm(_this.idPrefix);
                return _this;
            }
            SedesDialog.prototype.getFormKey = function () { return Intranet.SedesForm.formKey; };
            SedesDialog.prototype.getIdProperty = function () { return Intranet.SedesRow.idProperty; };
            SedesDialog.prototype.getLocalTextPrefix = function () { return Intranet.SedesRow.localTextPrefix; };
            SedesDialog.prototype.getNameProperty = function () { return Intranet.SedesRow.nameProperty; };
            SedesDialog.prototype.getService = function () { return Intranet.SedesService.baseUrl; };
            SedesDialog.prototype.getDeletePermission = function () { return Intranet.SedesRow.deletePermission; };
            SedesDialog.prototype.getInsertPermission = function () { return Intranet.SedesRow.insertPermission; };
            SedesDialog.prototype.getUpdatePermission = function () { return Intranet.SedesRow.updatePermission; };
            SedesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SedesDialog);
            return SedesDialog;
        }(Serenity.EntityDialog));
        Intranet.SedesDialog = SedesDialog;
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var SedesGrid = /** @class */ (function (_super) {
            __extends(SedesGrid, _super);
            function SedesGrid(container) {
                return _super.call(this, container) || this;
            }
            SedesGrid.prototype.getColumnsKey = function () { return 'Intranet.Sedes'; };
            SedesGrid.prototype.getDialogType = function () { return Intranet.SedesDialog; };
            SedesGrid.prototype.getIdProperty = function () { return Intranet.SedesRow.idProperty; };
            SedesGrid.prototype.getInsertPermission = function () { return Intranet.SedesRow.insertPermission; };
            SedesGrid.prototype.getLocalTextPrefix = function () { return Intranet.SedesRow.localTextPrefix; };
            SedesGrid.prototype.getService = function () { return Intranet.SedesService.baseUrl; };
            SedesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SedesGrid);
            return SedesGrid;
        }(Serenity.EntityGrid));
        Intranet.SedesGrid = SedesGrid;
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var TelefonosDialog = /** @class */ (function (_super) {
            __extends(TelefonosDialog, _super);
            function TelefonosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Intranet.TelefonosForm(_this.idPrefix);
                return _this;
            }
            TelefonosDialog.prototype.getFormKey = function () { return Intranet.TelefonosForm.formKey; };
            TelefonosDialog.prototype.getIdProperty = function () { return Intranet.TelefonosRow.idProperty; };
            TelefonosDialog.prototype.getLocalTextPrefix = function () { return Intranet.TelefonosRow.localTextPrefix; };
            TelefonosDialog.prototype.getNameProperty = function () { return Intranet.TelefonosRow.nameProperty; };
            TelefonosDialog.prototype.getService = function () { return Intranet.TelefonosService.baseUrl; };
            TelefonosDialog.prototype.getDeletePermission = function () { return Intranet.TelefonosRow.deletePermission; };
            TelefonosDialog.prototype.getInsertPermission = function () { return Intranet.TelefonosRow.insertPermission; };
            TelefonosDialog.prototype.getUpdatePermission = function () { return Intranet.TelefonosRow.updatePermission; };
            TelefonosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TelefonosDialog);
            return TelefonosDialog;
        }(Serenity.EntityDialog));
        Intranet.TelefonosDialog = TelefonosDialog;
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Intranet;
    (function (Intranet) {
        var TelefonosGrid = /** @class */ (function (_super) {
            __extends(TelefonosGrid, _super);
            function TelefonosGrid(container) {
                return _super.call(this, container) || this;
            }
            TelefonosGrid.prototype.getColumnsKey = function () { return 'Intranet.Telefonos'; };
            TelefonosGrid.prototype.getDialogType = function () { return Intranet.TelefonosDialog; };
            TelefonosGrid.prototype.getIdProperty = function () { return Intranet.TelefonosRow.idProperty; };
            TelefonosGrid.prototype.getInsertPermission = function () { return Intranet.TelefonosRow.insertPermission; };
            TelefonosGrid.prototype.getLocalTextPrefix = function () { return Intranet.TelefonosRow.localTextPrefix; };
            TelefonosGrid.prototype.getService = function () { return Intranet.TelefonosService.baseUrl; };
            // Añadidos
            // Primero campo de ordenación por defecto
            // No olvidarse Cambiar el Row y el Id
            TelefonosGrid.prototype.getDefaultSortBy = function () {
                return ["TelefonoId" /* TelefonoId */];
            };
            // Botones Excel y Pdf
            TelefonosGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Intranet/Telefonos/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
                // Fin añadidos
            };
            TelefonosGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], TelefonosGrid);
            return TelefonosGrid;
        }(Serenity.EntityGrid));
        Intranet.TelefonosGrid = TelefonosGrid;
    })(Intranet = ProyectosZec.Intranet || (ProyectosZec.Intranet = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var DepartamentosDialog = /** @class */ (function (_super) {
            __extends(DepartamentosDialog, _super);
            function DepartamentosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Kairos.DepartamentosForm(_this.idPrefix);
                return _this;
            }
            DepartamentosDialog.prototype.getFormKey = function () { return Kairos.DepartamentosForm.formKey; };
            DepartamentosDialog.prototype.getIdProperty = function () { return Kairos.DepartamentosRow.idProperty; };
            DepartamentosDialog.prototype.getLocalTextPrefix = function () { return Kairos.DepartamentosRow.localTextPrefix; };
            DepartamentosDialog.prototype.getNameProperty = function () { return Kairos.DepartamentosRow.nameProperty; };
            DepartamentosDialog.prototype.getService = function () { return Kairos.DepartamentosService.baseUrl; };
            DepartamentosDialog.prototype.getDeletePermission = function () { return Kairos.DepartamentosRow.deletePermission; };
            DepartamentosDialog.prototype.getInsertPermission = function () { return Kairos.DepartamentosRow.insertPermission; };
            DepartamentosDialog.prototype.getUpdatePermission = function () { return Kairos.DepartamentosRow.updatePermission; };
            DepartamentosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartamentosDialog);
            return DepartamentosDialog;
        }(Serenity.EntityDialog));
        Kairos.DepartamentosDialog = DepartamentosDialog;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var DepartamentosGrid = /** @class */ (function (_super) {
            __extends(DepartamentosGrid, _super);
            function DepartamentosGrid(container) {
                return _super.call(this, container) || this;
            }
            DepartamentosGrid.prototype.getColumnsKey = function () { return 'Kairos.Departamentos'; };
            DepartamentosGrid.prototype.getDialogType = function () { return Kairos.DepartamentosDialog; };
            DepartamentosGrid.prototype.getIdProperty = function () { return Kairos.DepartamentosRow.idProperty; };
            DepartamentosGrid.prototype.getInsertPermission = function () { return Kairos.DepartamentosRow.insertPermission; };
            DepartamentosGrid.prototype.getLocalTextPrefix = function () { return Kairos.DepartamentosRow.localTextPrefix; };
            DepartamentosGrid.prototype.getService = function () { return Kairos.DepartamentosService.baseUrl; };
            DepartamentosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartamentosGrid);
            return DepartamentosGrid;
        }(Serenity.EntityGrid));
        Kairos.DepartamentosGrid = DepartamentosGrid;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var DiarioDialog = /** @class */ (function (_super) {
            __extends(DiarioDialog, _super);
            function DiarioDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Kairos.DiarioForm(_this.idPrefix);
                return _this;
            }
            DiarioDialog.prototype.getFormKey = function () { return Kairos.DiarioForm.formKey; };
            DiarioDialog.prototype.getIdProperty = function () { return Kairos.DiarioRow.idProperty; };
            DiarioDialog.prototype.getLocalTextPrefix = function () { return Kairos.DiarioRow.localTextPrefix; };
            DiarioDialog.prototype.getNameProperty = function () { return Kairos.DiarioRow.nameProperty; };
            DiarioDialog.prototype.getService = function () { return Kairos.DiarioService.baseUrl; };
            DiarioDialog.prototype.getDeletePermission = function () { return Kairos.DiarioRow.deletePermission; };
            DiarioDialog.prototype.getInsertPermission = function () { return Kairos.DiarioRow.insertPermission; };
            DiarioDialog.prototype.getUpdatePermission = function () { return Kairos.DiarioRow.updatePermission; };
            DiarioDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DiarioDialog);
            return DiarioDialog;
        }(Serenity.EntityDialog));
        Kairos.DiarioDialog = DiarioDialog;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var DiarioGrid = /** @class */ (function (_super) {
            __extends(DiarioGrid, _super);
            function DiarioGrid(container) {
                return _super.call(this, container) || this;
            }
            DiarioGrid.prototype.getColumnsKey = function () { return 'Kairos.Diario'; };
            DiarioGrid.prototype.getDialogType = function () { return Kairos.DiarioDialog; };
            DiarioGrid.prototype.getIdProperty = function () { return Kairos.DiarioRow.idProperty; };
            DiarioGrid.prototype.getInsertPermission = function () { return Kairos.DiarioRow.insertPermission; };
            DiarioGrid.prototype.getLocalTextPrefix = function () { return Kairos.DiarioRow.localTextPrefix; };
            DiarioGrid.prototype.getService = function () { return Kairos.DiarioService.baseUrl; };
            DiarioGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // Declaramos que el Grid puedes seleccionar fila
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            /**
    * This method is called for all rows
    * @param item Data item for current row
    * @param index Index of the row in grid
    */
            DiarioGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Salida == null)
                    klass += " out-of-stock";
                else if (item.Entrada == null)
                    klass += " critical-stock";
                return Q.trimToNull(klass);
            };
            // Botones Excel y Pdf
            DiarioGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Kairos/Diario/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
                // Fin añadidos
            };
            DiarioGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], DiarioGrid);
            return DiarioGrid;
        }(Serenity.EntityGrid));
        Kairos.DiarioGrid = DiarioGrid;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var ExtrasDialog = /** @class */ (function (_super) {
            __extends(ExtrasDialog, _super);
            function ExtrasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Kairos.ExtrasForm(_this.idPrefix);
                return _this;
            }
            ExtrasDialog.prototype.getFormKey = function () { return Kairos.ExtrasForm.formKey; };
            ExtrasDialog.prototype.getIdProperty = function () { return Kairos.ExtrasRow.idProperty; };
            ExtrasDialog.prototype.getLocalTextPrefix = function () { return Kairos.ExtrasRow.localTextPrefix; };
            ExtrasDialog.prototype.getNameProperty = function () { return Kairos.ExtrasRow.nameProperty; };
            ExtrasDialog.prototype.getService = function () { return Kairos.ExtrasService.baseUrl; };
            ExtrasDialog.prototype.getDeletePermission = function () { return Kairos.ExtrasRow.deletePermission; };
            ExtrasDialog.prototype.getInsertPermission = function () { return Kairos.ExtrasRow.insertPermission; };
            ExtrasDialog.prototype.getUpdatePermission = function () { return Kairos.ExtrasRow.updatePermission; };
            ExtrasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExtrasDialog);
            return ExtrasDialog;
        }(Serenity.EntityDialog));
        Kairos.ExtrasDialog = ExtrasDialog;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var ExtrasGrid = /** @class */ (function (_super) {
            __extends(ExtrasGrid, _super);
            function ExtrasGrid(container) {
                return _super.call(this, container) || this;
            }
            ExtrasGrid.prototype.getColumnsKey = function () { return 'Kairos.Extras'; };
            ExtrasGrid.prototype.getDialogType = function () { return Kairos.ExtrasDialog; };
            ExtrasGrid.prototype.getIdProperty = function () { return Kairos.ExtrasRow.idProperty; };
            ExtrasGrid.prototype.getInsertPermission = function () { return Kairos.ExtrasRow.insertPermission; };
            ExtrasGrid.prototype.getLocalTextPrefix = function () { return Kairos.ExtrasRow.localTextPrefix; };
            ExtrasGrid.prototype.getService = function () { return Kairos.ExtrasService.baseUrl; };
            // Agrupar y sumar 
            ExtrasGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum("TotalHorasExtrasReales" /* TotalHorasExtrasReales */),
                        new Slick.Aggregators.Sum("TotalHorasExtrasConvertidas" /* TotalHorasExtrasConvertidas */)
                    ]
                });
                // Declaramos que el Grid puedes seleccionar fila
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            ExtrasGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                // Mostrar pie de página
                opt.showFooterRow = true;
                // Fin pie de página
                // Fila Seleccionable
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                // Fin Fila Seleccionable
                return opt;
            };
            ExtrasGrid.prototype.usePager = function () {
                return false;
            };
            // Botones Excel y Pdf
            ExtrasGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Kairos/Extras/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
                // Fin añadidos
            };
            /**
     * This method is called for all rows
     * @param item Data item for current row
     * @param index Index of the row in grid
     */
            ExtrasGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.Estado == "A")
                    klass += " aceptada";
                else if (item.Estado == "C")
                    klass += " rechazada";
                return Q.trimToNull(klass);
            };
            ExtrasGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], ExtrasGrid);
            return ExtrasGrid;
        }(Serenity.EntityGrid));
        Kairos.ExtrasGrid = ExtrasGrid;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var FichajesDialog = /** @class */ (function (_super) {
            __extends(FichajesDialog, _super);
            function FichajesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Kairos.FichajesForm(_this.idPrefix);
                return _this;
            }
            FichajesDialog.prototype.getFormKey = function () { return Kairos.FichajesForm.formKey; };
            FichajesDialog.prototype.getIdProperty = function () { return Kairos.FichajesRow.idProperty; };
            FichajesDialog.prototype.getLocalTextPrefix = function () { return Kairos.FichajesRow.localTextPrefix; };
            FichajesDialog.prototype.getNameProperty = function () { return Kairos.FichajesRow.nameProperty; };
            FichajesDialog.prototype.getService = function () { return Kairos.FichajesService.baseUrl; };
            FichajesDialog.prototype.getDeletePermission = function () { return Kairos.FichajesRow.deletePermission; };
            FichajesDialog.prototype.getInsertPermission = function () { return Kairos.FichajesRow.insertPermission; };
            FichajesDialog.prototype.getUpdatePermission = function () { return Kairos.FichajesRow.updatePermission; };
            FichajesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FichajesDialog);
            return FichajesDialog;
        }(Serenity.EntityDialog));
        Kairos.FichajesDialog = FichajesDialog;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var FichajesGrid = /** @class */ (function (_super) {
            __extends(FichajesGrid, _super);
            function FichajesGrid(container) {
                return _super.call(this, container) || this;
            }
            FichajesGrid.prototype.getColumnsKey = function () { return 'Kairos.Fichajes'; };
            FichajesGrid.prototype.getDialogType = function () { return Kairos.FichajesDialog; };
            FichajesGrid.prototype.getIdProperty = function () { return Kairos.FichajesRow.idProperty; };
            FichajesGrid.prototype.getInsertPermission = function () { return Kairos.FichajesRow.insertPermission; };
            FichajesGrid.prototype.getLocalTextPrefix = function () { return Kairos.FichajesRow.localTextPrefix; };
            FichajesGrid.prototype.getService = function () { return Kairos.FichajesService.baseUrl; };
            // Botones Excel y Pdf
            FichajesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Kairos/Fichajes/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
                // Fin añadidos
            };
            FichajesGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], FichajesGrid);
            return FichajesGrid;
        }(Serenity.EntityGrid));
        Kairos.FichajesGrid = FichajesGrid;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var KrsEmpleadosDialog = /** @class */ (function (_super) {
            __extends(KrsEmpleadosDialog, _super);
            function KrsEmpleadosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Kairos.KrsEmpleadosForm(_this.idPrefix);
                return _this;
            }
            KrsEmpleadosDialog.prototype.getFormKey = function () { return Kairos.KrsEmpleadosForm.formKey; };
            KrsEmpleadosDialog.prototype.getIdProperty = function () { return Kairos.KrsEmpleadosRow.idProperty; };
            KrsEmpleadosDialog.prototype.getLocalTextPrefix = function () { return Kairos.KrsEmpleadosRow.localTextPrefix; };
            KrsEmpleadosDialog.prototype.getNameProperty = function () { return Kairos.KrsEmpleadosRow.nameProperty; };
            KrsEmpleadosDialog.prototype.getService = function () { return Kairos.KrsEmpleadosService.baseUrl; };
            KrsEmpleadosDialog.prototype.getDeletePermission = function () { return Kairos.KrsEmpleadosRow.deletePermission; };
            KrsEmpleadosDialog.prototype.getInsertPermission = function () { return Kairos.KrsEmpleadosRow.insertPermission; };
            KrsEmpleadosDialog.prototype.getUpdatePermission = function () { return Kairos.KrsEmpleadosRow.updatePermission; };
            KrsEmpleadosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], KrsEmpleadosDialog);
            return KrsEmpleadosDialog;
        }(Serenity.EntityDialog));
        Kairos.KrsEmpleadosDialog = KrsEmpleadosDialog;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var KrsEmpleadosGrid = /** @class */ (function (_super) {
            __extends(KrsEmpleadosGrid, _super);
            function KrsEmpleadosGrid(container) {
                return _super.call(this, container) || this;
            }
            KrsEmpleadosGrid.prototype.getColumnsKey = function () { return 'Kairos.KrsEmpleados'; };
            KrsEmpleadosGrid.prototype.getDialogType = function () { return Kairos.KrsEmpleadosDialog; };
            KrsEmpleadosGrid.prototype.getIdProperty = function () { return Kairos.KrsEmpleadosRow.idProperty; };
            KrsEmpleadosGrid.prototype.getInsertPermission = function () { return Kairos.KrsEmpleadosRow.insertPermission; };
            KrsEmpleadosGrid.prototype.getLocalTextPrefix = function () { return Kairos.KrsEmpleadosRow.localTextPrefix; };
            KrsEmpleadosGrid.prototype.getService = function () { return Kairos.KrsEmpleadosService.baseUrl; };
            KrsEmpleadosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], KrsEmpleadosGrid);
            return KrsEmpleadosGrid;
        }(Serenity.EntityGrid));
        Kairos.KrsEmpleadosGrid = KrsEmpleadosGrid;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var TiposFichajeDialog = /** @class */ (function (_super) {
            __extends(TiposFichajeDialog, _super);
            function TiposFichajeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Kairos.TiposFichajeForm(_this.idPrefix);
                return _this;
            }
            TiposFichajeDialog.prototype.getFormKey = function () { return Kairos.TiposFichajeForm.formKey; };
            TiposFichajeDialog.prototype.getIdProperty = function () { return Kairos.TiposFichajeRow.idProperty; };
            TiposFichajeDialog.prototype.getLocalTextPrefix = function () { return Kairos.TiposFichajeRow.localTextPrefix; };
            TiposFichajeDialog.prototype.getNameProperty = function () { return Kairos.TiposFichajeRow.nameProperty; };
            TiposFichajeDialog.prototype.getService = function () { return Kairos.TiposFichajeService.baseUrl; };
            TiposFichajeDialog.prototype.getDeletePermission = function () { return Kairos.TiposFichajeRow.deletePermission; };
            TiposFichajeDialog.prototype.getInsertPermission = function () { return Kairos.TiposFichajeRow.insertPermission; };
            TiposFichajeDialog.prototype.getUpdatePermission = function () { return Kairos.TiposFichajeRow.updatePermission; };
            TiposFichajeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TiposFichajeDialog);
            return TiposFichajeDialog;
        }(Serenity.EntityDialog));
        Kairos.TiposFichajeDialog = TiposFichajeDialog;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Kairos;
    (function (Kairos) {
        var TiposFichajeGrid = /** @class */ (function (_super) {
            __extends(TiposFichajeGrid, _super);
            function TiposFichajeGrid(container) {
                return _super.call(this, container) || this;
            }
            TiposFichajeGrid.prototype.getColumnsKey = function () { return 'Kairos.TiposFichaje'; };
            TiposFichajeGrid.prototype.getDialogType = function () { return Kairos.TiposFichajeDialog; };
            TiposFichajeGrid.prototype.getIdProperty = function () { return Kairos.TiposFichajeRow.idProperty; };
            TiposFichajeGrid.prototype.getInsertPermission = function () { return Kairos.TiposFichajeRow.insertPermission; };
            TiposFichajeGrid.prototype.getLocalTextPrefix = function () { return Kairos.TiposFichajeRow.localTextPrefix; };
            TiposFichajeGrid.prototype.getService = function () { return Kairos.TiposFichajeService.baseUrl; };
            TiposFichajeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TiposFichajeGrid);
            return TiposFichajeGrid;
        }(Serenity.EntityGrid));
        Kairos.TiposFichajeGrid = TiposFichajeGrid;
    })(Kairos = ProyectosZec.Kairos || (ProyectosZec.Kairos = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = ProyectosZec.Membership || (ProyectosZec.Membership = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = ProyectosZec.Membership || (ProyectosZec.Membership = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = ProyectosZec.Membership || (ProyectosZec.Membership = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = ProyectosZec.Membership || (ProyectosZec.Membership = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var ActividadesDialog = /** @class */ (function (_super) {
            __extends(ActividadesDialog, _super);
            function ActividadesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Roezec.ActividadesForm(_this.idPrefix);
                return _this;
            }
            ActividadesDialog.prototype.getFormKey = function () { return Roezec.ActividadesForm.formKey; };
            ActividadesDialog.prototype.getIdProperty = function () { return Roezec.ActividadesRow.idProperty; };
            ActividadesDialog.prototype.getLocalTextPrefix = function () { return Roezec.ActividadesRow.localTextPrefix; };
            ActividadesDialog.prototype.getNameProperty = function () { return Roezec.ActividadesRow.nameProperty; };
            ActividadesDialog.prototype.getService = function () { return Roezec.ActividadesService.baseUrl; };
            ActividadesDialog.prototype.getDeletePermission = function () { return Roezec.ActividadesRow.deletePermission; };
            ActividadesDialog.prototype.getInsertPermission = function () { return Roezec.ActividadesRow.insertPermission; };
            ActividadesDialog.prototype.getUpdatePermission = function () { return Roezec.ActividadesRow.updatePermission; };
            ActividadesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ActividadesDialog);
            return ActividadesDialog;
        }(Serenity.EntityDialog));
        Roezec.ActividadesDialog = ActividadesDialog;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var ActividadesGrid = /** @class */ (function (_super) {
            __extends(ActividadesGrid, _super);
            function ActividadesGrid(container) {
                return _super.call(this, container) || this;
            }
            ActividadesGrid.prototype.getColumnsKey = function () { return 'Roezec.Actividades'; };
            ActividadesGrid.prototype.getDialogType = function () { return Roezec.ActividadesDialog; };
            ActividadesGrid.prototype.getIdProperty = function () { return Roezec.ActividadesRow.idProperty; };
            ActividadesGrid.prototype.getInsertPermission = function () { return Roezec.ActividadesRow.insertPermission; };
            ActividadesGrid.prototype.getLocalTextPrefix = function () { return Roezec.ActividadesRow.localTextPrefix; };
            ActividadesGrid.prototype.getService = function () { return Roezec.ActividadesService.baseUrl; };
            // Agrupar y sumar 
            ActividadesGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            // Mostramos Footer con los totales
            ActividadesGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                // Fila Seleccionable
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            // Botones Excel y Pdf
            ActividadesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Roezec/Actividades/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                buttons.push({
                    title: 'Agrupar por Año',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Año: ' + x.value + ' (' + x.count + ' Nace/Empresas)'; },
                            getter: "AnyoExpediente" /* AnyoExpediente */
                        }]); }
                });
                buttons.push({
                    title: 'Agrupar por Nace',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Nace: ' + x.value + ' (' + x.count + ' Empresas)'; },
                            getter: "Actividad" /* Actividad */
                        }]); }
                });
                buttons.push({
                    title: 'Agrupar por Empresa',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Empresa: ' + x.value + ' (' + x.count + ' Naces)'; },
                            getter: "Actividad" /* Actividad */
                        }]); }
                });
                buttons.push({
                    title: 'Agrupar por Año y Nace',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Año: ' + x.value + ' (' + x.count + ' Nace/Empresas)'; },
                            getter: "AnyoExpediente" /* AnyoExpediente */
                        }, {
                            formatter: function (x) { return 'Nace: ' + x.value + ' (' + x.count + ' Empresas)'; },
                            getter: "Actividad" /* Actividad */
                        }]); }
                });
                buttons.push({
                    title: 'Desagrupar',
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                return buttons;
                // Fin añadidos
            };
            ActividadesGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], ActividadesGrid);
            return ActividadesGrid;
        }(Serenity.EntityGrid));
        Roezec.ActividadesGrid = ActividadesGrid;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var NacesDialog = /** @class */ (function (_super) {
            __extends(NacesDialog, _super);
            function NacesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Roezec.NacesForm(_this.idPrefix);
                return _this;
            }
            NacesDialog.prototype.getFormKey = function () { return Roezec.NacesForm.formKey; };
            NacesDialog.prototype.getIdProperty = function () { return Roezec.NacesRow.idProperty; };
            NacesDialog.prototype.getLocalTextPrefix = function () { return Roezec.NacesRow.localTextPrefix; };
            NacesDialog.prototype.getNameProperty = function () { return Roezec.NacesRow.nameProperty; };
            NacesDialog.prototype.getService = function () { return Roezec.NacesService.baseUrl; };
            NacesDialog.prototype.getDeletePermission = function () { return Roezec.NacesRow.deletePermission; };
            NacesDialog.prototype.getInsertPermission = function () { return Roezec.NacesRow.insertPermission; };
            NacesDialog.prototype.getUpdatePermission = function () { return Roezec.NacesRow.updatePermission; };
            NacesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NacesDialog);
            return NacesDialog;
        }(Serenity.EntityDialog));
        Roezec.NacesDialog = NacesDialog;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var NacesGrid = /** @class */ (function (_super) {
            __extends(NacesGrid, _super);
            function NacesGrid(container) {
                return _super.call(this, container) || this;
            }
            NacesGrid.prototype.getColumnsKey = function () { return 'Roezec.Naces'; };
            NacesGrid.prototype.getDialogType = function () { return Roezec.NacesDialog; };
            NacesGrid.prototype.getIdProperty = function () { return Roezec.NacesRow.idProperty; };
            NacesGrid.prototype.getInsertPermission = function () { return Roezec.NacesRow.insertPermission; };
            NacesGrid.prototype.getLocalTextPrefix = function () { return Roezec.NacesRow.localTextPrefix; };
            NacesGrid.prototype.getService = function () { return Roezec.NacesService.baseUrl; };
            // Botones Excel y Pdf
            NacesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Roezec/Naces/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
                // Fin añadidos
            };
            NacesGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], NacesGrid);
            return NacesGrid;
        }(Serenity.EntityGrid));
        Roezec.NacesGrid = NacesGrid;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RepresentantesDialog = /** @class */ (function (_super) {
            __extends(RepresentantesDialog, _super);
            function RepresentantesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Roezec.RepresentantesForm(_this.idPrefix);
                return _this;
            }
            RepresentantesDialog.prototype.getFormKey = function () { return Roezec.RepresentantesForm.formKey; };
            RepresentantesDialog.prototype.getIdProperty = function () { return Roezec.RepresentantesRow.idProperty; };
            RepresentantesDialog.prototype.getLocalTextPrefix = function () { return Roezec.RepresentantesRow.localTextPrefix; };
            RepresentantesDialog.prototype.getNameProperty = function () { return Roezec.RepresentantesRow.nameProperty; };
            RepresentantesDialog.prototype.getService = function () { return Roezec.RepresentantesService.baseUrl; };
            RepresentantesDialog.prototype.getDeletePermission = function () { return Roezec.RepresentantesRow.deletePermission; };
            RepresentantesDialog.prototype.getInsertPermission = function () { return Roezec.RepresentantesRow.insertPermission; };
            RepresentantesDialog.prototype.getUpdatePermission = function () { return Roezec.RepresentantesRow.updatePermission; };
            RepresentantesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RepresentantesDialog);
            return RepresentantesDialog;
        }(Serenity.EntityDialog));
        Roezec.RepresentantesDialog = RepresentantesDialog;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RepresentantesGrid = /** @class */ (function (_super) {
            __extends(RepresentantesGrid, _super);
            function RepresentantesGrid(container) {
                return _super.call(this, container) || this;
            }
            RepresentantesGrid.prototype.getColumnsKey = function () { return 'Roezec.Representantes'; };
            RepresentantesGrid.prototype.getDialogType = function () { return Roezec.RepresentantesDialog; };
            RepresentantesGrid.prototype.getIdProperty = function () { return Roezec.RepresentantesRow.idProperty; };
            RepresentantesGrid.prototype.getInsertPermission = function () { return Roezec.RepresentantesRow.insertPermission; };
            RepresentantesGrid.prototype.getLocalTextPrefix = function () { return Roezec.RepresentantesRow.localTextPrefix; };
            RepresentantesGrid.prototype.getService = function () { return Roezec.RepresentantesService.baseUrl; };
            // Botones Excel y Pdf
            RepresentantesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Roezec/Representantes/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
                // Fin añadidos
            };
            RepresentantesGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], RepresentantesGrid);
            return RepresentantesGrid;
        }(Serenity.EntityGrid));
        Roezec.RepresentantesGrid = RepresentantesGrid;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RoezecEmpresasDialog = /** @class */ (function (_super) {
            __extends(RoezecEmpresasDialog, _super);
            function RoezecEmpresasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Roezec.RoezecEmpresasForm(_this.idPrefix);
                return _this;
            }
            RoezecEmpresasDialog.prototype.getFormKey = function () { return Roezec.RoezecEmpresasForm.formKey; };
            RoezecEmpresasDialog.prototype.getIdProperty = function () { return Roezec.RoezecEmpresasRow.idProperty; };
            RoezecEmpresasDialog.prototype.getLocalTextPrefix = function () { return Roezec.RoezecEmpresasRow.localTextPrefix; };
            RoezecEmpresasDialog.prototype.getNameProperty = function () { return Roezec.RoezecEmpresasRow.nameProperty; };
            RoezecEmpresasDialog.prototype.getService = function () { return Roezec.RoezecEmpresasService.baseUrl; };
            RoezecEmpresasDialog.prototype.getDeletePermission = function () { return Roezec.RoezecEmpresasRow.deletePermission; };
            RoezecEmpresasDialog.prototype.getInsertPermission = function () { return Roezec.RoezecEmpresasRow.insertPermission; };
            RoezecEmpresasDialog.prototype.getUpdatePermission = function () { return Roezec.RoezecEmpresasRow.updatePermission; };
            RoezecEmpresasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoezecEmpresasDialog);
            return RoezecEmpresasDialog;
        }(Serenity.EntityDialog));
        Roezec.RoezecEmpresasDialog = RoezecEmpresasDialog;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RoezecEmpresasGrid = /** @class */ (function (_super) {
            __extends(RoezecEmpresasGrid, _super);
            function RoezecEmpresasGrid(container) {
                return _super.call(this, container) || this;
            }
            RoezecEmpresasGrid.prototype.getColumnsKey = function () { return 'Roezec.RoezecEmpresas'; };
            RoezecEmpresasGrid.prototype.getDialogType = function () { return Roezec.RoezecEmpresasDialog; };
            RoezecEmpresasGrid.prototype.getIdProperty = function () { return Roezec.RoezecEmpresasRow.idProperty; };
            RoezecEmpresasGrid.prototype.getInsertPermission = function () { return Roezec.RoezecEmpresasRow.insertPermission; };
            RoezecEmpresasGrid.prototype.getLocalTextPrefix = function () { return Roezec.RoezecEmpresasRow.localTextPrefix; };
            RoezecEmpresasGrid.prototype.getService = function () { return Roezec.RoezecEmpresasService.baseUrl; };
            // Agrupar y sumar 
            RoezecEmpresasGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                // sumamos Objetivo Empleo y de Inversión
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum("ObjetivoEmpleo" /* ObjetivoEmpleo */),
                        new Slick.Aggregators.Sum("ObjetivoInversion" /* ObjetivoInversion */)
                    ]
                });
                return grid;
            };
            // Mostramos Footer con los totales
            RoezecEmpresasGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            RoezecEmpresasGrid.prototype.usePager = function () {
                return true;
            };
            // Botones Excel y Pdf
            RoezecEmpresasGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Roezec/RoezecEmpresas/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                buttons.push({
                    title: 'Agrupar por Año',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Año: ' + x.value + ' (' + x.count + ' Empresas)'; },
                            getter: "AnyoExpediente" /* AnyoExpediente */
                        }]); }
                });
                buttons.push({
                    title: 'Agrupar por Año y Técnico',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Año: ' + x.value + ' (' + x.count + ' Empresas)'; },
                            getter: "AnyoExpediente" /* AnyoExpediente */
                        }, {
                            formatter: function (x) { return 'Técnico: ' + x.value + ' (' + x.count + ' Empresas)'; },
                            getter: "Tecnico" /* Tecnico */
                        }]); }
                });
                buttons.push({
                    title: 'Desagrupar',
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                return buttons;
                // Fin añadidos
            };
            RoezecEmpresasGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], RoezecEmpresasGrid);
            return RoezecEmpresasGrid;
        }(Serenity.EntityGrid));
        Roezec.RoezecEmpresasGrid = RoezecEmpresasGrid;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RoezecEstadosDialog = /** @class */ (function (_super) {
            __extends(RoezecEstadosDialog, _super);
            function RoezecEstadosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Roezec.RoezecEstadosForm(_this.idPrefix);
                return _this;
            }
            RoezecEstadosDialog.prototype.getFormKey = function () { return Roezec.RoezecEstadosForm.formKey; };
            RoezecEstadosDialog.prototype.getIdProperty = function () { return Roezec.RoezecEstadosRow.idProperty; };
            RoezecEstadosDialog.prototype.getLocalTextPrefix = function () { return Roezec.RoezecEstadosRow.localTextPrefix; };
            RoezecEstadosDialog.prototype.getNameProperty = function () { return Roezec.RoezecEstadosRow.nameProperty; };
            RoezecEstadosDialog.prototype.getService = function () { return Roezec.RoezecEstadosService.baseUrl; };
            RoezecEstadosDialog.prototype.getDeletePermission = function () { return Roezec.RoezecEstadosRow.deletePermission; };
            RoezecEstadosDialog.prototype.getInsertPermission = function () { return Roezec.RoezecEstadosRow.insertPermission; };
            RoezecEstadosDialog.prototype.getUpdatePermission = function () { return Roezec.RoezecEstadosRow.updatePermission; };
            RoezecEstadosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoezecEstadosDialog);
            return RoezecEstadosDialog;
        }(Serenity.EntityDialog));
        Roezec.RoezecEstadosDialog = RoezecEstadosDialog;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var RoezecEstadosGrid = /** @class */ (function (_super) {
            __extends(RoezecEstadosGrid, _super);
            function RoezecEstadosGrid(container) {
                return _super.call(this, container) || this;
            }
            RoezecEstadosGrid.prototype.getColumnsKey = function () { return 'Roezec.RoezecEstados'; };
            RoezecEstadosGrid.prototype.getDialogType = function () { return Roezec.RoezecEstadosDialog; };
            RoezecEstadosGrid.prototype.getIdProperty = function () { return Roezec.RoezecEstadosRow.idProperty; };
            RoezecEstadosGrid.prototype.getInsertPermission = function () { return Roezec.RoezecEstadosRow.insertPermission; };
            RoezecEstadosGrid.prototype.getLocalTextPrefix = function () { return Roezec.RoezecEstadosRow.localTextPrefix; };
            RoezecEstadosGrid.prototype.getService = function () { return Roezec.RoezecEstadosService.baseUrl; };
            RoezecEstadosGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoezecEstadosGrid);
            return RoezecEstadosGrid;
        }(Serenity.EntityGrid));
        Roezec.RoezecEstadosGrid = RoezecEstadosGrid;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var SociosDialog = /** @class */ (function (_super) {
            __extends(SociosDialog, _super);
            function SociosDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Roezec.SociosForm(_this.idPrefix);
                return _this;
            }
            SociosDialog.prototype.getFormKey = function () { return Roezec.SociosForm.formKey; };
            SociosDialog.prototype.getIdProperty = function () { return Roezec.SociosRow.idProperty; };
            SociosDialog.prototype.getLocalTextPrefix = function () { return Roezec.SociosRow.localTextPrefix; };
            SociosDialog.prototype.getNameProperty = function () { return Roezec.SociosRow.nameProperty; };
            SociosDialog.prototype.getService = function () { return Roezec.SociosService.baseUrl; };
            SociosDialog.prototype.getDeletePermission = function () { return Roezec.SociosRow.deletePermission; };
            SociosDialog.prototype.getInsertPermission = function () { return Roezec.SociosRow.insertPermission; };
            SociosDialog.prototype.getUpdatePermission = function () { return Roezec.SociosRow.updatePermission; };
            SociosDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SociosDialog);
            return SociosDialog;
        }(Serenity.EntityDialog));
        Roezec.SociosDialog = SociosDialog;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
var ProyectosZec;
(function (ProyectosZec) {
    var Roezec;
    (function (Roezec) {
        var SociosGrid = /** @class */ (function (_super) {
            __extends(SociosGrid, _super);
            function SociosGrid(container) {
                return _super.call(this, container) || this;
            }
            SociosGrid.prototype.getColumnsKey = function () { return 'Roezec.Socios'; };
            SociosGrid.prototype.getDialogType = function () { return Roezec.SociosDialog; };
            SociosGrid.prototype.getIdProperty = function () { return Roezec.SociosRow.idProperty; };
            SociosGrid.prototype.getInsertPermission = function () { return Roezec.SociosRow.insertPermission; };
            SociosGrid.prototype.getLocalTextPrefix = function () { return Roezec.SociosRow.localTextPrefix; };
            SociosGrid.prototype.getService = function () { return Roezec.SociosService.baseUrl; };
            // Botones Excel y Pdf
            SociosGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Roezec/Socios/ListExcel',
                    separator: true
                }));
                buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
                // Fin añadidos
            };
            SociosGrid = __decorate([
                Serenity.Decorators.registerClass()
                // Añadido para los filtros multiples
                ,
                Serenity.Decorators.filterable()
                // Fin Añadido
            ], SociosGrid);
            return SociosGrid;
        }(Serenity.EntityGrid));
        Roezec.SociosGrid = SociosGrid;
    })(Roezec = ProyectosZec.Roezec || (ProyectosZec.Roezec = {}));
})(ProyectosZec || (ProyectosZec = {}));
//# sourceMappingURL=ProyectosZec.Web.js.map